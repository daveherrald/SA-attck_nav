import os
import sys
import json
#just set up reference to our apps on-disk location explicitly
#so we can import local libs as needed
from splunk.clilib.bundle_paths import make_splunkhome_path


if sys.platform == "win32":
    import msvcrt
    # Binary mode is required for persistent mode on Windows.
    msvcrt.setmode(sys.stdin.fileno(), os.O_BINARY)
    msvcrt.setmode(sys.stdout.fileno(), os.O_BINARY)
    msvcrt.setmode(sys.stderr.fileno(), os.O_BINARY)


#Splunk's Persistent REST handler class
from splunk.persistconn.application import PersistentServerConnectionApplication


class SimHandler(PersistentServerConnectionApplication):
    def __init__(self, command_line, command_arg):
        PersistentServerConnectionApplication.__init__(self)

    def handle(self, in_string):
        query_params=json.loads(in_string)
        resp = json.dumps(query_params["query"])
        return {'payload': resp ,  # Payload of the request.
                'status': 200          # HTTP status code
        }