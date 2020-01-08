layer_master = {
    "_key": "master_layer",
    "_user": "nobody",
    "description": "",
    "domain": "mitre-enterprise",
    "filters": {
        "platforms": [
            "windows",
            "linux",
            "mac"
        ],
        "stages": [
            "act"
        ]
    },
    "gradient": {
        "colors": [
            "#ff6666",
            "#ffe766",
            "#8ec843"
        ],
        "maxValue": 100,
        "minValue": 0
    },
    "hideDisabled": False,
    "legendItems": [
		{
			"label": "Have Data; Not Detected",
			"color": "#ffe766"
		},
		{
			"label": "Needs Data",
			"color": "#ff6666"
		},
		{
			"label": "Detect single sub-technique",
			"color": "#c6dbef"
		},
		{
			"label": "Detect Multiple sub-techniques",
			"color": "#9ecae1"
		},
		{
			"label": "Correlation rule(s) in place",
			"color": "#6baed6"
		},
		{
			"label": "Highest confidence",
			"color": "#3182bd"
		}
	],
    "metadata": [],
    "name": "master_layer",
    "selectTechniquesAcrossTactics": True,
    "showTacticRowBackground": False,
    "sorting": 0,
    "tacticRowBackground": "#dddddd",
    "techniques": [
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1156"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1134"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1134"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1015"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1015"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1087"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1098"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1098"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1182"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1182"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1103"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1103"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1155"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1155"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1017"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1138"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1138"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1010"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1123"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1131"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1119"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "exfiltration",
            "techniqueID": "T1020"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1197"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1197"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1139"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1009"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1067"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1217"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1176"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1110"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1088"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1088"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1191"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1191"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1042"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1146"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1115"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1116"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1059"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1043"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1092"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1500"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1223"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1223"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1109"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1109"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1122"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1122"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1090"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1196"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1196"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1136"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1003"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1081"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1214"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1094"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1024"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1207"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1038"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1038"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1038"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1073"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "exfiltration",
            "techniqueID": "T1002"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1485"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1132"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "exfiltration",
            "techniqueID": "T1022"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1486"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1001"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1074"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "exfiltration",
            "techniqueID": "T1030"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1213"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1005"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1039"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1025"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1491"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1140"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1089"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1488"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1487"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1175"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1172"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1483"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1482"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1189"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1157"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1157"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1173"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1114"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1499"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1480"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1106"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1129"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "exfiltration",
            "techniqueID": "T1048"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "exfiltration",
            "techniqueID": "T1041"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "exfiltration",
            "techniqueID": "T1011"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "exfiltration",
            "techniqueID": "T1052"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1190"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1203"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1212"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1211"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1068"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1210"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1133"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1133"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1181"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1181"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1008"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1107"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1222"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1006"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1044"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1044"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1083"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1495"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1187"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1144"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1061"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1484"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1148"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1200"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1158"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1158"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1147"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1143"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1179"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1179"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1179"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1062"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1183"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1183"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1183"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1054"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1066"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1070"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1202"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1490"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1056"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1056"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1141"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1130"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1118"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1118"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1208"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1215"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1142"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1161"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1149"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1171"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1177"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1177"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1159"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1160"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1160"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1152"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1152"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1152"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1168"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1168"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1162"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1037"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1037"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1185"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1036"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1031"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1112"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1170"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1170"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1104"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1188"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1026"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1079"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1096"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1128"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1498"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1046"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1126"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1135"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1040"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1040"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1050"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1050"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1027"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1137"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1075"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1097"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1174"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1201"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1034"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1034"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1120"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1069"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1150"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1150"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1150"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1205"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1205"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1205"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1013"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1013"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1086"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1145"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1057"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1186"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1093"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1055"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1055"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1012"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1163"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1164"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1108"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1108"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1060"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1121"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1121"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1117"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1117"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1219"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1076"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1105"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1105"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1021"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1018"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1091"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1091"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1496"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1014"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1085"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1085"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1494"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1178"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1198"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1198"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1184"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1053"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1053"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1053"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "exfiltration",
            "techniqueID": "T1029"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1113"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1180"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1064"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1064"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1063"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1101"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1167"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1035"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1058"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1058"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1489"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1166"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1166"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1051"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1023"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1218"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1218"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1216"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1216"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1045"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1153"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1151"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1151"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1193"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1192"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1194"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1071"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1032"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1095"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1165"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1165"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1492"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1169"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1206"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1195"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1019"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1082"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1016"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1049"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1033"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1007"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1124"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1501"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1080"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1221"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1072"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1072"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1209"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1099"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "impact",
            "techniqueID": "T1493"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1154"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1154"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1127"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1127"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1199"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "credential-access",
            "techniqueID": "T1111"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1065"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1204"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1078"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1078"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1078"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "initial-access",
            "techniqueID": "T1078"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "collection",
            "techniqueID": "T1125"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1497"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "discovery",
            "techniqueID": "T1497"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "command-and-control",
            "techniqueID": "T1102"
        },
        {
            "comment": "",
            "enabled": False,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1102"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1100"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "privilege-escalation",
            "techniqueID": "T1100"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1077"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1047"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1084"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1028"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "lateral-movement",
            "techniqueID": "T1028"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "persistence",
            "techniqueID": "T1004"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "defense-evasion",
            "techniqueID": "T1220"
        },
        {
            "comment": "",
            "enabled": True,
            "metadata": [],
            "tactic": "execution",
            "techniqueID": "T1220"
        }
    ],
    "version": "2.1",
    "viewMode": 0
}
