import os
import sys
import json
import traceback
#just set up reference to our apps on-disk location explicitly
#so we can import local libs as needed
from splunk.clilib.bundle_paths import make_splunkhome_path
assets_path = make_splunkhome_path(["etc", "apps", "SA-attck_nav","appserver","static","assets"])
config_file = "/config.json"

if sys.platform == "win32":
    import msvcrt
    # Binary mode is required for persistent mode on Windows.
    msvcrt.setmode(sys.stdin.fileno(), os.O_BINARY)
    msvcrt.setmode(sys.stdout.fileno(), os.O_BINARY)
    msvcrt.setmode(sys.stderr.fileno(), os.O_BINARY)


#Splunk's Persistent REST handler class
from splunk.persistconn.application import PersistentServerConnectionApplication


class ConfHandler(PersistentServerConnectionApplication):
    def __init__(self, command_line, command_arg):
        PersistentServerConnectionApplication.__init__(self)

    def handle(self, in_string):
        '''
        config = open(assets_path+config_file,'r')
        config_json = json.loads(config.read())
        config.close()
        return {'payload': config_json["custom_context_menu_items"] ,  # Payload of the request.
                'status': 200          # HTTP status code
        }
        '''
        #in_string is a string...go figure
        #need to turn into dict to work with more easily
        in_string = json.loads(in_string)
        try:
            #get command - simply returns the values w/in the config.json
            #
            if in_string['method'] == "GET":
                config = open(assets_path+config_file,'r')
                config_json = json.loads(config.read())
                config.close()
                return {'payload': config_json["custom_context_menu_items"] ,  # Payload of the request.
                        'status': 200          # HTTP status code
                }

            if in_string['method'] == "POST":
                post_data = in_string["payload"]
                #decode the data POSTed to the endpoint as a dict
                #the underlying data in payload is treated like a string w/in the
                #overall dict
                post_data = json.loads(post_data)
                #if our payload is larger than 5 items, lets just return an error
                #as we want to limit the number of menu items stored in the Config file
                if len(post_data) > 5:
                    return {'payload': {"error" : "max number of items is 5, you sent {}".format(len(post_data)) } ,  # Payload of the request.
                    'status': 500          # HTTP status code
                }

                #placeholder code for doing input sanitzation
                #will need to compile regexes for this at some point and test
                #commenting out for now
                '''
                urls = {}
                urls["urls"] = []
                urls["menus"] = []

                for item in post_data:
                    urls["urls"].append(item["url"])
                    urls["menus"].append(item["label"])
                '''
                #lets open the file, and then replace it with the updated dict info
                config = open(assets_path+config_file,'r+')
                config_json = json.loads(config.read())
                config_json["custom_context_menu_items"]=post_data
                config.seek(0)
                config.truncate()
                config.write(json.dumps(config_json))
                config.close()
                return {'payload': {"success" : "configuration file updated"} ,  # Payload of the request.
                'status': 200          # HTTP status code
                }



        except Exception as e:
            exc_type, exc_value, exc_traceback = sys.exc_info()
            tb = repr(traceback.format_exception(exc_type, exc_value, exc_traceback))
            return {'payload' : {'error':e.message , 'tb' : str(tb) } ,'status': 500}