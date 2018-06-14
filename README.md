This Splunk App is intended to implement the [ATT&CK navigator](https://github.com/mitre/attack-navigator) inside of Splunkweb as an "app".
It also includes a REST handler to read and update the "Custom Context Menu Options"

GET example (read)
```
curl -k -u 'admin:changeme' https://localhost:8089/services/app_config
```

POST example (update)
```
curl -k -u 'admin:changeme' https://localhost:8089/services/app_config -d '[{"label" : "splunkonline" , "url" : "https://www.splunk.com"},{"label" : "simulate attck", "url" : "/splunkd/__raw/services/run_simulation?attack=~Technique_Name~&id=~Technique_ID~"}]'
```

