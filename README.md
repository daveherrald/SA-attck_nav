# SA-attck_nav - Ansible Fork

**NOTE**

This fork of SA-attck_nav is an example of possible integration with 
other automation tools, in this case Ansible. Additionally also be aware this release requires [TA-ansible-invoke](https://github.com/mobia-security-services/TA-ansible-invoke).

---

This repository is part of a larger [Adversary Simulation project](https://github.com/timfrazier1/AdversarySimulation).  The main page includes some installation guidance and information about other components.  Please refer there for more information. 


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

