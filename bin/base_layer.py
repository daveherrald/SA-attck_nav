layer_default = {
    "_key": "default_layer",
    "_user": "nobody",
    "name": "Default Layer",
    "version": "3.0",
    "description": "ART Techniques enabled",
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
    "hideDisabled": "false",
    "sorting": 3,
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
    "techniques": [
        {
            "techniqueID": "T1546.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1003.008",
            "enabled": "true"
        },
        {
            "techniqueID": "T1548",
            "enabled": "true"
        },
        {
            "techniqueID": "T1134",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.008",
            "enabled": "true"
        },
        {
            "techniqueID": "T1531",
            "enabled": "true"
        },
        {
            "techniqueID": "T1087",
            "enabled": "true"
        },
        {
            "techniqueID": "T1098",
            "enabled": "true"
        },
        {
            "techniqueID": "T1098.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1137.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1098.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.009",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.010",
            "enabled": "true"
        },
        {
            "techniqueID": "T1059.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1550.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1499.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1071",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.011",
            "enabled": "true"
        },
        {
            "techniqueID": "T1010",
            "enabled": "true"
        },
        {
            "techniqueID": "T1499.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1560",
            "enabled": "true"
        },
        {
            "techniqueID": "T1560.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1560.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1560.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1573.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1053.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1053.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1123",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1119",
            "enabled": "true"
        },
        {
            "techniqueID": "T1020",
            "enabled": "true"
        },
        {
            "techniqueID": "T1197",
            "enabled": "true"
        },
        {
            "techniqueID": "T1552.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1102.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1027.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547",
            "enabled": "true"
        },
        {
            "techniqueID": "T1037",
            "enabled": "true"
        },
        {
            "techniqueID": "T1542.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1217",
            "enabled": "true"
        },
        {
            "techniqueID": "T1176",
            "enabled": "true"
        },
        {
            "techniqueID": "T1110",
            "enabled": "true"
        },
        {
            "techniqueID": "T1548.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.012",
            "enabled": "true"
        },
        {
            "techniqueID": "T1003.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1070.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1070.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1070.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1115",
            "enabled": "true"
        },
        {
            "techniqueID": "T1136.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1087.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1078.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1069.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1552.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1538",
            "enabled": "true"
        },
        {
            "techniqueID": "T1526",
            "enabled": "true"
        },
        {
            "techniqueID": "T1553.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1059",
            "enabled": "true"
        },
        {
            "techniqueID": "T1092",
            "enabled": "true"
        },
        {
            "techniqueID": "T1027.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1542.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1559.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.015",
            "enabled": "true"
        },
        {
            "techniqueID": "T1554",
            "enabled": "true"
        },
        {
            "techniqueID": "T1195.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1195.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1195.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1213.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1136",
            "enabled": "true"
        },
        {
            "techniqueID": "T1578.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1134.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1578.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1543",
            "enabled": "true"
        },
        {
            "techniqueID": "T1056.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1110.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1552.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1555",
            "enabled": "true"
        },
        {
            "techniqueID": "T1555.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1552.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1053.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1003.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1071.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1568.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1485",
            "enabled": "true"
        },
        {
            "techniqueID": "T1132",
            "enabled": "true"
        },
        {
            "techniqueID": "T1486",
            "enabled": "true"
        },
        {
            "techniqueID": "T1565",
            "enabled": "true"
        },
        {
            "techniqueID": "T1001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1074",
            "enabled": "true"
        },
        {
            "techniqueID": "T1030",
            "enabled": "true"
        },
        {
            "techniqueID": "T1530",
            "enabled": "true"
        },
        {
            "techniqueID": "T1213",
            "enabled": "true"
        },
        {
            "techniqueID": "T1005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1039",
            "enabled": "true"
        },
        {
            "techniqueID": "T1025",
            "enabled": "true"
        },
        {
            "techniqueID": "T1102.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1491",
            "enabled": "true"
        },
        {
            "techniqueID": "T1078.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1578.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1140",
            "enabled": "true"
        },
        {
            "techniqueID": "T1498.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1562.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1562.007",
            "enabled": "true"
        },
        {
            "techniqueID": "T1562.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1562.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1561.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1561.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1561",
            "enabled": "true"
        },
        {
            "techniqueID": "T1021.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1136.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1087.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1078.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1556.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1090.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1568.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1069.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1482",
            "enabled": "true"
        },
        {
            "techniqueID": "T1189",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1559.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1568",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1548.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1087.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1114",
            "enabled": "true"
        },
        {
            "techniqueID": "T1114.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.014",
            "enabled": "true"
        },
        {
            "techniqueID": "T1573",
            "enabled": "true"
        },
        {
            "techniqueID": "T1499",
            "enabled": "true"
        },
        {
            "techniqueID": "T1480.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546",
            "enabled": "true"
        },
        {
            "techniqueID": "T1098.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1480",
            "enabled": "true"
        },
        {
            "techniqueID": "T1048",
            "enabled": "true"
        },
        {
            "techniqueID": "T1048.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1011.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1041",
            "enabled": "true"
        },
        {
            "techniqueID": "T1011",
            "enabled": "true"
        },
        {
            "techniqueID": "T1052",
            "enabled": "true"
        },
        {
            "techniqueID": "T1048.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1048.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1567",
            "enabled": "true"
        },
        {
            "techniqueID": "T1052.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1567.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1567.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1190",
            "enabled": "true"
        },
        {
            "techniqueID": "T1203",
            "enabled": "true"
        },
        {
            "techniqueID": "T1212",
            "enabled": "true"
        },
        {
            "techniqueID": "T1211",
            "enabled": "true"
        },
        {
            "techniqueID": "T1068",
            "enabled": "true"
        },
        {
            "techniqueID": "T1210",
            "enabled": "true"
        },
        {
            "techniqueID": "T1491.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1090.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1133",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.011",
            "enabled": "true"
        },
        {
            "techniqueID": "T1008",
            "enabled": "true"
        },
        {
            "techniqueID": "T1568.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1070.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1071.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1083",
            "enabled": "true"
        },
        {
            "techniqueID": "T1222",
            "enabled": "true"
        },
        {
            "techniqueID": "T1495",
            "enabled": "true"
        },
        {
            "techniqueID": "T1187",
            "enabled": "true"
        },
        {
            "techniqueID": "T1056.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1553.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1558.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1484",
            "enabled": "true"
        },
        {
            "techniqueID": "T1552.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1562.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1200",
            "enabled": "true"
        },
        {
            "techniqueID": "T1564.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1564.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1564.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1564.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1564",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.012",
            "enabled": "true"
        },
        {
            "techniqueID": "T1562",
            "enabled": "true"
        },
        {
            "techniqueID": "T1525",
            "enabled": "true"
        },
        {
            "techniqueID": "T1562.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1027.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1070",
            "enabled": "true"
        },
        {
            "techniqueID": "T1202",
            "enabled": "true"
        },
        {
            "techniqueID": "T1105",
            "enabled": "true"
        },
        {
            "techniqueID": "T1490",
            "enabled": "true"
        },
        {
            "techniqueID": "T1056",
            "enabled": "true"
        },
        {
            "techniqueID": "T1553.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1559",
            "enabled": "true"
        },
        {
            "techniqueID": "T1491.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1090.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1534",
            "enabled": "true"
        },
        {
            "techniqueID": "T1036.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1059.007",
            "enabled": "true"
        },
        {
            "techniqueID": "T1001.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1558.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1555.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1056.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1557.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1003.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.008",
            "enabled": "true"
        },
        {
            "techniqueID": "T1003.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1570",
            "enabled": "true"
        },
        {
            "techniqueID": "T1543.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1543.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1569.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1053.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1222.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1136.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1087.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1078.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1074.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1114.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1069.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1037.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1037.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1127.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1071.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1134.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1204.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1204.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1185",
            "enabled": "true"
        },
        {
            "techniqueID": "T1557",
            "enabled": "true"
        },
        {
            "techniqueID": "T1036.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1036",
            "enabled": "true"
        },
        {
            "techniqueID": "T1036.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1556",
            "enabled": "true"
        },
        {
            "techniqueID": "T1578",
            "enabled": "true"
        },
        {
            "techniqueID": "T1112",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218.007",
            "enabled": "true"
        },
        {
            "techniqueID": "T1104",
            "enabled": "true"
        },
        {
            "techniqueID": "T1090.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1003.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1564.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1106",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.007",
            "enabled": "true"
        },
        {
            "techniqueID": "T1498",
            "enabled": "true"
        },
        {
            "techniqueID": "T1037.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1046",
            "enabled": "true"
        },
        {
            "techniqueID": "T1070.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1135",
            "enabled": "true"
        },
        {
            "techniqueID": "T1040",
            "enabled": "true"
        },
        {
            "techniqueID": "T1095",
            "enabled": "true"
        },
        {
            "techniqueID": "T1132.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1571",
            "enabled": "true"
        },
        {
            "techniqueID": "T1003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1499.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1027",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218.008",
            "enabled": "true"
        },
        {
            "techniqueID": "T1137",
            "enabled": "true"
        },
        {
            "techniqueID": "T1137.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1137.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1102.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1137.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1137.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1137.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1134.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1550.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1550.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1110.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1556.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1110.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1201",
            "enabled": "true"
        },
        {
            "techniqueID": "T1110.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.007",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.008",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.009",
            "enabled": "true"
        },
        {
            "techniqueID": "T1120",
            "enabled": "true"
        },
        {
            "techniqueID": "T1069",
            "enabled": "true"
        },
        {
            "techniqueID": "T1566",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.011",
            "enabled": "true"
        },
        {
            "techniqueID": "T1556.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1205.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.010",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1059.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.013",
            "enabled": "true"
        },
        {
            "techniqueID": "T1542",
            "enabled": "true"
        },
        {
            "techniqueID": "T1552.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1003.007",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.009",
            "enabled": "true"
        },
        {
            "techniqueID": "T1057",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.013",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.012",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055",
            "enabled": "true"
        },
        {
            "techniqueID": "T1001.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1572",
            "enabled": "true"
        },
        {
            "techniqueID": "T1090",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.008",
            "enabled": "true"
        },
        {
            "techniqueID": "T1216.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1059.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1012",
            "enabled": "true"
        },
        {
            "techniqueID": "T1563.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1037.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.007",
            "enabled": "true"
        },
        {
            "techniqueID": "T1498.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218.009",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218.010",
            "enabled": "true"
        },
        {
            "techniqueID": "T1219",
            "enabled": "true"
        },
        {
            "techniqueID": "T1074.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1021.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1114.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1563",
            "enabled": "true"
        },
        {
            "techniqueID": "T1021",
            "enabled": "true"
        },
        {
            "techniqueID": "T1018",
            "enabled": "true"
        },
        {
            "techniqueID": "T1036.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1091",
            "enabled": "true"
        },
        {
            "techniqueID": "T1496",
            "enabled": "true"
        },
        {
            "techniqueID": "T1578.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1036.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1207",
            "enabled": "true"
        },
        {
            "techniqueID": "T1014",
            "enabled": "true"
        },
        {
            "techniqueID": "T1564.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218.011",
            "enabled": "true"
        },
        {
            "techniqueID": "T1565.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1134.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1553.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1021.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1505.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1021.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1098.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1563.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1053.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1053",
            "enabled": "true"
        },
        {
            "techniqueID": "T1029",
            "enabled": "true"
        },
        {
            "techniqueID": "T1113",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1003.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1518.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1555.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1505",
            "enabled": "true"
        },
        {
            "techniqueID": "T1569.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1499.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1489",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.010",
            "enabled": "true"
        },
        {
            "techniqueID": "T1574.011",
            "enabled": "true"
        },
        {
            "techniqueID": "T1548.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1129",
            "enabled": "true"
        },
        {
            "techniqueID": "T1213.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.009",
            "enabled": "true"
        },
        {
            "techniqueID": "T1218",
            "enabled": "true"
        },
        {
            "techniqueID": "T1216",
            "enabled": "true"
        },
        {
            "techniqueID": "T1558.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1072",
            "enabled": "true"
        },
        {
            "techniqueID": "T1518",
            "enabled": "true"
        },
        {
            "techniqueID": "T1027.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1036.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1566.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1566.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1566.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1132.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1037.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1528",
            "enabled": "true"
        },
        {
            "techniqueID": "T1539",
            "enabled": "true"
        },
        {
            "techniqueID": "T1558",
            "enabled": "true"
        },
        {
            "techniqueID": "T1027.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1001.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1565.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1553",
            "enabled": "true"
        },
        {
            "techniqueID": "T1548.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1195",
            "enabled": "true"
        },
        {
            "techniqueID": "T1573.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1497.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1542.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1082",
            "enabled": "true"
        },
        {
            "techniqueID": "T1016",
            "enabled": "true"
        },
        {
            "techniqueID": "T1049",
            "enabled": "true"
        },
        {
            "techniqueID": "T1033",
            "enabled": "true"
        },
        {
            "techniqueID": "T1007",
            "enabled": "true"
        },
        {
            "techniqueID": "T1569",
            "enabled": "true"
        },
        {
            "techniqueID": "T1529",
            "enabled": "true"
        },
        {
            "techniqueID": "T1124",
            "enabled": "true"
        },
        {
            "techniqueID": "T1543.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1080",
            "enabled": "true"
        },
        {
            "techniqueID": "T1221",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1497.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1070.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1134.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1205",
            "enabled": "true"
        },
        {
            "techniqueID": "T1537",
            "enabled": "true"
        },
        {
            "techniqueID": "T1565.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1505.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1127",
            "enabled": "true"
        },
        {
            "techniqueID": "T1199",
            "enabled": "true"
        },
        {
            "techniqueID": "T1111",
            "enabled": "true"
        },
        {
            "techniqueID": "T1059.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1552",
            "enabled": "true"
        },
        {
            "techniqueID": "T1535",
            "enabled": "true"
        },
        {
            "techniqueID": "T1550",
            "enabled": "true"
        },
        {
            "techniqueID": "T1497.002",
            "enabled": "true"
        },
        {
            "techniqueID": "T1204",
            "enabled": "true"
        },
        {
            "techniqueID": "T1055.014",
            "enabled": "true"
        },
        {
            "techniqueID": "T1021.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1078",
            "enabled": "true"
        },
        {
            "techniqueID": "T1125",
            "enabled": "true"
        },
        {
            "techniqueID": "T1497",
            "enabled": "true"
        },
        {
            "techniqueID": "T1059.005",
            "enabled": "true"
        },
        {
            "techniqueID": "T1056.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1071.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1102",
            "enabled": "true"
        },
        {
            "techniqueID": "T1550.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1505.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1059.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1222.001",
            "enabled": "true"
        },
        {
            "techniqueID": "T1047",
            "enabled": "true"
        },
        {
            "techniqueID": "T1546.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1021.006",
            "enabled": "true"
        },
        {
            "techniqueID": "T1543.003",
            "enabled": "true"
        },
        {
            "techniqueID": "T1547.004",
            "enabled": "true"
        },
        {
            "techniqueID": "T1220",
            "enabled": "true"
        }
    ]
}
