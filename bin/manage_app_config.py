import os
import sys
import json
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
        config = open(assets_path+config_file,'r')
        config_json = json.loads(config.read())
        config.close()
        return {'payload': config_json["custom_context_menu_items"] ,  # Payload of the request.
                'status': 200          # HTTP status code
        }