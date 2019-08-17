#!/usr/bin/env python
#
# Copyright 2011-2015 Splunk, Inc.
#
# Licensed under the Apache License, Version 2.0 (the "License"): you may
# not use this file except in compliance with the License. You may obtain
# a copy of the License at
#
#     http://www.apache.org/licenses/LICENSE-2.0
#
# Unless required by applicable law or agreed to in writing, software
# distributed under the License is distributed on an "AS IS" BASIS, WITHOUT
# WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied. See the
# License for the specific language governing permissions and limitations
# under the License.
# Also borrowed from the following att&ck project 
# https://github.com/mitre-attack/attack-navigator/blob/master/layers/attack_layers/attack_layers_simple.py

from __future__ import absolute_import
import csv, sys
import os
import logging
import time
import json
# import our library
appname = "SA-attck_nav"
from splunk.clilib.bundle_paths import make_splunkhome_path
sys.path.append(make_splunkhome_path(["etc", "apps", appname, "lib"]))

from splunklib.searchcommands import dispatch, StreamingCommand, Configuration, Option, validators
import sys

# Splunk REST lib
import splunk.rest

# import our base layer
from base_layer import  layer_master


# py3 stuff
import six
from six.moves import zip
from six import StringIO
from six.moves import urllib

VERSION = "2.1"
NAME = "Default Name"
DESCRIPTION = "Default Desription"
DOMAIN = "mitre-enterprise"
COLLECTION_NAME = "attack_layers"
COLLECTION_URI = "/servicesNS/Nobody/{}/storage/collections/data/attack_layers?output_mode=json".format(appname)
MASTER_URI = "/servicesNS/Nobody/{}/storage/collections/data/attack_layers/master_layer?output_mode=json".format(appname)
GREEN = "#0FFE00"
RED = "#FF1700"
PINK = "#FF00EC"



@Configuration(distributed=False)
class genatklayerCommand(StreamingCommand):
    """ Counts the number of non-overlapping matches to a regular expression in a set of fields.
    ##Syntax
    .. code-block::
        genatklayer name=<string> description=<string> reset=<bool>
    ##Description
    Takes input from a search and attempts to map it to Att&ck framework techniques and create a layer file. 
    The parameter `name` is the name for the layer file as it will be stored in KVStore.
    The parameter `description` is the description for the layer file as it will be stored in KVstore.
    ##Example
    Read in some data (tweets) and atttempt to save layer file to KVStore with name "my name" and description "my description"
    .. code-block::
        | inputlookup tweets | genatklayer name="my name" description="my description"
    """
    atkfield = Option(
        doc='''
        **Syntax:** **atkfield=***<field that stores att&ck technique id>*
        **Description:** The name of the field in your search results that has the att&ck technique id''',
        require=False, validate=None)

    name = Option(
        doc='''
        **Syntax:** **name=***<layer name>*
        **Description:** What name you want to give the layer in KVStore''',
        require=False, validate=None)

    description = Option(
        doc='''
        **Syntax:** **description=***<layer description>*
        **Description:** What description you want to provide for the layer in KVStore''',
        require=False, validate=None)

    reset = Option(
        doc='''
        **Syntax:** **reset=***<bool>*
        **Description:** Reset the master layer back to its original state''',
        require=False, validate=validators.Boolean())



    # Base ATT&CK Navigator layer / template
    layer_json = { \
        "version": VERSION, \
        "name": NAME, \
        "description": DESCRIPTION, \
        "domain": DOMAIN, \
        "techniques": [] \
    }


    # per attack map - makes some color codes
    # add a color gradient (white -> red) to layer
    # ranging from zero (white) to the maximum score in the file (red)
    # To be implemented later
    """
    layer_json["gradient"] = {
        "colors": [
            "#ffffff",
            "#ff6666"
        ],
        "minValue": 0,
        "maxValue": max([technique["score"] for technique in layer_json["techniques"]])
    }
    """

    def getMasterLayer(self, uri):
        r, c = splunk.rest.simpleRequest(uri, sessionKey=self.metadata.searchinfo.session_key, rawResult=True)
        if r.status == 200:
            return json.loads(c)
        if r.status == 404:
            r, c = splunk.rest.simpleRequest(COLLECTION_URI, jsonargs=json.dumps(layer_master), sessionKey=self.metadata.searchinfo.session_key, rawResult=True) 
            return {"error":"ayer file not loaded in KVStore, it has now been loaded on your behalf"}
        else:
            return {"error":json.loads(c)}

    def resetMasterLayer(self,uri):
        # if layer exists - error similar to the below will be thrown
        # {"messages":[{"type":"ERROR","text":"A document with the same key and user already exists."}]}
        r, c = splunk.rest.simpleRequest(uri, jsonargs=json.dumps(layer_master), sessionKey=self.metadata.searchinfo.session_key, rawResult=True)    
        if r.status == 200:
            return json.loads(c)
        else:
            return json.loads(c)



    def stream(self, records):

        self.logger.debug('genatklayerCommand: %s', self)  # logs command line
        if self.reset:
            resp = self.resetMasterLayer(MASTER_URI)
            for record in records:
                record['_raw'] = json.dumps(resp)
                yield record


        
        # attempt to get the master layer
        master_layer = self.getMasterLayer(MASTER_URI)
        if "error" in master_layer:
            raise Exception("Error retrieving layer. {}".format(str(master_layer['error'])))

        # iterate through our search results
        for record in records:
            # determine if the user specified a field to key off of for Technique ID
            # and if so, proceed
            if self.atkfield in record:
                # iterate through the techniques array in our layer file
                # we also will set our layers "scores" values per technique ID 
                # back to zero, or in a first run, create a 'score' key
                for tech in master_layer['techniques']:
                    tech['score'] = 0
                    # determine if we have a match in this case between
                    # a technique ID in our layer file and in our splunk record
                    if tech['techniqueID'] == six.text_type(record[self.atkfield].decode("utf-8")):
                        # if there is a match, see if there's also a detected field in our splunk results
                        # and if so, update the layer info to reflect that
                        if 'detected' in record:
                            if six.text_type(record['detected'].decode("utf-8")) == "1":
                                tech['color'] = GREEN
                                tech['score'] = tech['score'] + 1
                            elif six.text_type(record['detected'].decode("utf-8")) == "0":
                                tech['color'] = RED
                                tech['score'] = tech['score'] - 1
                        else:
                            tech['color'] = PINK
            else:
                record['_raw'] = "Error no field with that name exists {}".format(self.atkfield)
            yield record
        # post updated layer if all was successful
        r, c = splunk.rest.simpleRequest(MASTER_URI, jsonargs=json.dumps(master_layer), sessionKey=self.metadata.searchinfo.session_key, rawResult=True)    
        if r.status == 200:
            self.logger.debug('updated master layer successfully: {}'.format(json.loads(c)))
        else:
            self.logger.debug('error updating master layer successfully: {}'.format(json.loads(c)))

dispatch(genatklayerCommand, sys.argv, sys.stdin, sys.stdout, __name__)