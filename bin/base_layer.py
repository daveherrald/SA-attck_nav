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
    "hideDisabled": False ,
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
            "enabled": True
        },
        {
            "techniqueID": "T1003.008",
            "enabled": True
        },
        {
            "techniqueID": "T1548",
            "enabled": True
        },
        {
            "techniqueID": "T1134",
            "enabled": True
        },
        {
            "techniqueID": "T1546.008",
            "enabled": True
        },
        {
            "techniqueID": "T1531",
            "enabled": True
        },
        {
            "techniqueID": "T1087",
            "enabled": True
        },
        {
            "techniqueID": "T1098",
            "enabled": True
        },
        {
            "techniqueID": "T1098.003",
            "enabled": True
        },
        {
            "techniqueID": "T1137.006",
            "enabled": True
        },
        {
            "techniqueID": "T1098.001",
            "enabled": True
        },
        {
            "techniqueID": "T1546.009",
            "enabled": True
        },
        {
            "techniqueID": "T1546.010",
            "enabled": True
        },
        {
            "techniqueID": "T1059.002",
            "enabled": True
        },
        {
            "techniqueID": "T1550.001",
            "enabled": True
        },
        {
            "techniqueID": "T1499.003",
            "enabled": True
        },
        {
            "techniqueID": "T1071",
            "enabled": True
        },
        {
            "techniqueID": "T1546.011",
            "enabled": True
        },
        {
            "techniqueID": "T1010",
            "enabled": True
        },
        {
            "techniqueID": "T1499.004",
            "enabled": True
        },
        {
            "techniqueID": "T1560",
            "enabled": True
        },
        {
            "techniqueID": "T1560.003",
            "enabled": True
        },
        {
            "techniqueID": "T1560.002",
            "enabled": True
        },
        {
            "techniqueID": "T1560.001",
            "enabled": True
        },
        {
            "techniqueID": "T1573.002",
            "enabled": True
        },
        {
            "techniqueID": "T1055.004",
            "enabled": True
        },
        {
            "techniqueID": "T1053.001",
            "enabled": True
        },
        {
            "techniqueID": "T1053.002",
            "enabled": True
        },
        {
            "techniqueID": "T1123",
            "enabled": True
        },
        {
            "techniqueID": "T1547.002",
            "enabled": True
        },
        {
            "techniqueID": "T1119",
            "enabled": True
        },
        {
            "techniqueID": "T1020",
            "enabled": True
        },
        {
            "techniqueID": "T1197",
            "enabled": True
        },
        {
            "techniqueID": "T1552.003",
            "enabled": True
        },
        {
            "techniqueID": "T1102.002",
            "enabled": True
        },
        {
            "techniqueID": "T1027.001",
            "enabled": True
        },
        {
            "techniqueID": "T1547",
            "enabled": True
        },
        {
            "techniqueID": "T1037",
            "enabled": True
        },
        {
            "techniqueID": "T1542.003",
            "enabled": True
        },
        {
            "techniqueID": "T1217",
            "enabled": True
        },
        {
            "techniqueID": "T1176",
            "enabled": True
        },
        {
            "techniqueID": "T1110",
            "enabled": True
        },
        {
            "techniqueID": "T1548.002",
            "enabled": True
        },
        {
            "techniqueID": "T1218.003",
            "enabled": True
        },
        {
            "techniqueID": "T1574.012",
            "enabled": True
        },
        {
            "techniqueID": "T1003.005",
            "enabled": True
        },
        {
            "techniqueID": "T1546.001",
            "enabled": True
        },
        {
            "techniqueID": "T1070.003",
            "enabled": True
        },
        {
            "techniqueID": "T1070.002",
            "enabled": True
        },
        {
            "techniqueID": "T1070.001",
            "enabled": True
        },
        {
            "techniqueID": "T1115",
            "enabled": True
        },
        {
            "techniqueID": "T1136.003",
            "enabled": True
        },
        {
            "techniqueID": "T1087.004",
            "enabled": True
        },
        {
            "techniqueID": "T1078.004",
            "enabled": True
        },
        {
            "techniqueID": "T1069.003",
            "enabled": True
        },
        {
            "techniqueID": "T1552.005",
            "enabled": True
        },
        {
            "techniqueID": "T1538",
            "enabled": True
        },
        {
            "techniqueID": "T1526",
            "enabled": True
        },
        {
            "techniqueID": "T1553.002",
            "enabled": True
        },
        {
            "techniqueID": "T1059",
            "enabled": True
        },
        {
            "techniqueID": "T1092",
            "enabled": True
        },
        {
            "techniqueID": "T1027.004",
            "enabled": True
        },
        {
            "techniqueID": "T1218.001",
            "enabled": True
        },
        {
            "techniqueID": "T1542.002",
            "enabled": True
        },
        {
            "techniqueID": "T1559.001",
            "enabled": True
        },
        {
            "techniqueID": "T1546.015",
            "enabled": True
        },
        {
            "techniqueID": "T1554",
            "enabled": True
        },
        {
            "techniqueID": "T1195.003",
            "enabled": True
        },
        {
            "techniqueID": "T1195.001",
            "enabled": True
        },
        {
            "techniqueID": "T1195.002",
            "enabled": True
        },
        {
            "techniqueID": "T1213.001",
            "enabled": True
        },
        {
            "techniqueID": "T1218.002",
            "enabled": True
        },
        {
            "techniqueID": "T1136",
            "enabled": True
        },
        {
            "techniqueID": "T1578.002",
            "enabled": True
        },
        {
            "techniqueID": "T1134.002",
            "enabled": True
        },
        {
            "techniqueID": "T1578.001",
            "enabled": True
        },
        {
            "techniqueID": "T1543",
            "enabled": True
        },
        {
            "techniqueID": "T1056.004",
            "enabled": True
        },
        {
            "techniqueID": "T1110.004",
            "enabled": True
        },
        {
            "techniqueID": "T1552.001",
            "enabled": True
        },
        {
            "techniqueID": "T1555",
            "enabled": True
        },
        {
            "techniqueID": "T1555.003",
            "enabled": True
        },
        {
            "techniqueID": "T1552.002",
            "enabled": True
        },
        {
            "techniqueID": "T1053.003",
            "enabled": True
        },
        {
            "techniqueID": "T1003.006",
            "enabled": True
        },
        {
            "techniqueID": "T1574.001",
            "enabled": True
        },
        {
            "techniqueID": "T1574.002",
            "enabled": True
        },
        {
            "techniqueID": "T1071.004",
            "enabled": True
        },
        {
            "techniqueID": "T1568.003",
            "enabled": True
        },
        {
            "techniqueID": "T1485",
            "enabled": True
        },
        {
            "techniqueID": "T1132",
            "enabled": True
        },
        {
            "techniqueID": "T1486",
            "enabled": True
        },
        {
            "techniqueID": "T1565",
            "enabled": True
        },
        {
            "techniqueID": "T1001",
            "enabled": True
        },
        {
            "techniqueID": "T1074",
            "enabled": True
        },
        {
            "techniqueID": "T1030",
            "enabled": True
        },
        {
            "techniqueID": "T1530",
            "enabled": True
        },
        {
            "techniqueID": "T1213",
            "enabled": True
        },
        {
            "techniqueID": "T1005",
            "enabled": True
        },
        {
            "techniqueID": "T1039",
            "enabled": True
        },
        {
            "techniqueID": "T1025",
            "enabled": True
        },
        {
            "techniqueID": "T1102.001",
            "enabled": True
        },
        {
            "techniqueID": "T1491",
            "enabled": True
        },
        {
            "techniqueID": "T1078.001",
            "enabled": True
        },
        {
            "techniqueID": "T1578.003",
            "enabled": True
        },
        {
            "techniqueID": "T1140",
            "enabled": True
        },
        {
            "techniqueID": "T1498.001",
            "enabled": True
        },
        {
            "techniqueID": "T1006",
            "enabled": True
        },
        {
            "techniqueID": "T1562.002",
            "enabled": True
        },
        {
            "techniqueID": "T1562.007",
            "enabled": True
        },
        {
            "techniqueID": "T1562.004",
            "enabled": True
        },
        {
            "techniqueID": "T1562.001",
            "enabled": True
        },
        {
            "techniqueID": "T1561.001",
            "enabled": True
        },
        {
            "techniqueID": "T1561.002",
            "enabled": True
        },
        {
            "techniqueID": "T1561",
            "enabled": True
        },
        {
            "techniqueID": "T1021.003",
            "enabled": True
        },
        {
            "techniqueID": "T1136.002",
            "enabled": True
        },
        {
            "techniqueID": "T1087.002",
            "enabled": True
        },
        {
            "techniqueID": "T1078.002",
            "enabled": True
        },
        {
            "techniqueID": "T1556.001",
            "enabled": True
        },
        {
            "techniqueID": "T1090.004",
            "enabled": True
        },
        {
            "techniqueID": "T1568.002",
            "enabled": True
        },
        {
            "techniqueID": "T1069.002",
            "enabled": True
        },
        {
            "techniqueID": "T1482",
            "enabled": True
        },
        {
            "techniqueID": "T1189",
            "enabled": True
        },
        {
            "techniqueID": "T1574.004",
            "enabled": True
        },
        {
            "techniqueID": "T1559.002",
            "enabled": True
        },
        {
            "techniqueID": "T1568",
            "enabled": True
        },
        {
            "techniqueID": "T1055.001",
            "enabled": True
        },
        {
            "techniqueID": "T1548.004",
            "enabled": True
        },
        {
            "techniqueID": "T1087.003",
            "enabled": True
        },
        {
            "techniqueID": "T1114",
            "enabled": True
        },
        {
            "techniqueID": "T1114.003",
            "enabled": True
        },
        {
            "techniqueID": "T1546.014",
            "enabled": True
        },
        {
            "techniqueID": "T1573",
            "enabled": True
        },
        {
            "techniqueID": "T1499",
            "enabled": True
        },
        {
            "techniqueID": "T1480.001",
            "enabled": True
        },
        {
            "techniqueID": "T1546",
            "enabled": True
        },
        {
            "techniqueID": "T1098.002",
            "enabled": True
        },
        {
            "techniqueID": "T1574.005",
            "enabled": True
        },
        {
            "techniqueID": "T1480",
            "enabled": True
        },
        {
            "techniqueID": "T1048",
            "enabled": True
        },
        {
            "techniqueID": "T1048.002",
            "enabled": True
        },
        {
            "techniqueID": "T1011.001",
            "enabled": True
        },
        {
            "techniqueID": "T1041",
            "enabled": True
        },
        {
            "techniqueID": "T1011",
            "enabled": True
        },
        {
            "techniqueID": "T1052",
            "enabled": True
        },
        {
            "techniqueID": "T1048.001",
            "enabled": True
        },
        {
            "techniqueID": "T1048.003",
            "enabled": True
        },
        {
            "techniqueID": "T1567",
            "enabled": True
        },
        {
            "techniqueID": "T1052.001",
            "enabled": True
        },
        {
            "techniqueID": "T1567.002",
            "enabled": True
        },
        {
            "techniqueID": "T1567.001",
            "enabled": True
        },
        {
            "techniqueID": "T1190",
            "enabled": True
        },
        {
            "techniqueID": "T1203",
            "enabled": True
        },
        {
            "techniqueID": "T1212",
            "enabled": True
        },
        {
            "techniqueID": "T1211",
            "enabled": True
        },
        {
            "techniqueID": "T1068",
            "enabled": True
        },
        {
            "techniqueID": "T1210",
            "enabled": True
        },
        {
            "techniqueID": "T1491.002",
            "enabled": True
        },
        {
            "techniqueID": "T1090.002",
            "enabled": True
        },
        {
            "techniqueID": "T1133",
            "enabled": True
        },
        {
            "techniqueID": "T1055.011",
            "enabled": True
        },
        {
            "techniqueID": "T1008",
            "enabled": True
        },
        {
            "techniqueID": "T1568.001",
            "enabled": True
        },
        {
            "techniqueID": "T1070.004",
            "enabled": True
        },
        {
            "techniqueID": "T1071.002",
            "enabled": True
        },
        {
            "techniqueID": "T1083",
            "enabled": True
        },
        {
            "techniqueID": "T1222",
            "enabled": True
        },
        {
            "techniqueID": "T1495",
            "enabled": True
        },
        {
            "techniqueID": "T1187",
            "enabled": True
        },
        {
            "techniqueID": "T1056.002",
            "enabled": True
        },
        {
            "techniqueID": "T1553.001",
            "enabled": True
        },
        {
            "techniqueID": "T1558.001",
            "enabled": True
        },
        {
            "techniqueID": "T1484",
            "enabled": True
        },
        {
            "techniqueID": "T1552.006",
            "enabled": True
        },
        {
            "techniqueID": "T1562.003",
            "enabled": True
        },
        {
            "techniqueID": "T1200",
            "enabled": True
        },
        {
            "techniqueID": "T1564.005",
            "enabled": True
        },
        {
            "techniqueID": "T1564.001",
            "enabled": True
        },
        {
            "techniqueID": "T1564.002",
            "enabled": True
        },
        {
            "techniqueID": "T1564.003",
            "enabled": True
        },
        {
            "techniqueID": "T1564",
            "enabled": True
        },
        {
            "techniqueID": "T1574",
            "enabled": True
        },
        {
            "techniqueID": "T1546.012",
            "enabled": True
        },
        {
            "techniqueID": "T1562",
            "enabled": True
        },
        {
            "techniqueID": "T1525",
            "enabled": True
        },
        {
            "techniqueID": "T1562.006",
            "enabled": True
        },
        {
            "techniqueID": "T1027.005",
            "enabled": True
        },
        {
            "techniqueID": "T1070",
            "enabled": True
        },
        {
            "techniqueID": "T1202",
            "enabled": True
        },
        {
            "techniqueID": "T1105",
            "enabled": True
        },
        {
            "techniqueID": "T1490",
            "enabled": True
        },
        {
            "techniqueID": "T1056",
            "enabled": True
        },
        {
            "techniqueID": "T1553.004",
            "enabled": True
        },
        {
            "techniqueID": "T1218.004",
            "enabled": True
        },
        {
            "techniqueID": "T1559",
            "enabled": True
        },
        {
            "techniqueID": "T1491.001",
            "enabled": True
        },
        {
            "techniqueID": "T1090.001",
            "enabled": True
        },
        {
            "techniqueID": "T1534",
            "enabled": True
        },
        {
            "techniqueID": "T1036.001",
            "enabled": True
        },
        {
            "techniqueID": "T1059.007",
            "enabled": True
        },
        {
            "techniqueID": "T1001.001",
            "enabled": True
        },
        {
            "techniqueID": "T1558.003",
            "enabled": True
        },
        {
            "techniqueID": "T1547.006",
            "enabled": True
        },
        {
            "techniqueID": "T1555.001",
            "enabled": True
        },
        {
            "techniqueID": "T1056.001",
            "enabled": True
        },
        {
            "techniqueID": "T1546.006",
            "enabled": True
        },
        {
            "techniqueID": "T1574.006",
            "enabled": True
        },
        {
            "techniqueID": "T1557.001",
            "enabled": True
        },
        {
            "techniqueID": "T1003.004",
            "enabled": True
        },
        {
            "techniqueID": "T1547.008",
            "enabled": True
        },
        {
            "techniqueID": "T1003.001",
            "enabled": True
        },
        {
            "techniqueID": "T1570",
            "enabled": True
        },
        {
            "techniqueID": "T1543.001",
            "enabled": True
        },
        {
            "techniqueID": "T1543.004",
            "enabled": True
        },
        {
            "techniqueID": "T1569.001",
            "enabled": True
        },
        {
            "techniqueID": "T1053.004",
            "enabled": True
        },
        {
            "techniqueID": "T1222.002",
            "enabled": True
        },
        {
            "techniqueID": "T1136.001",
            "enabled": True
        },
        {
            "techniqueID": "T1087.001",
            "enabled": True
        },
        {
            "techniqueID": "T1078.003",
            "enabled": True
        },
        {
            "techniqueID": "T1074.001",
            "enabled": True
        },
        {
            "techniqueID": "T1114.001",
            "enabled": True
        },
        {
            "techniqueID": "T1069.001",
            "enabled": True
        },
        {
            "techniqueID": "T1037.002",
            "enabled": True
        },
        {
            "techniqueID": "T1037.001",
            "enabled": True
        },
        {
            "techniqueID": "T1127.001",
            "enabled": True
        },
        {
            "techniqueID": "T1071.003",
            "enabled": True
        },
        {
            "techniqueID": "T1134.003",
            "enabled": True
        },
        {
            "techniqueID": "T1204.002",
            "enabled": True
        },
        {
            "techniqueID": "T1204.001",
            "enabled": True
        },
        {
            "techniqueID": "T1185",
            "enabled": True
        },
        {
            "techniqueID": "T1557",
            "enabled": True
        },
        {
            "techniqueID": "T1036.004",
            "enabled": True
        },
        {
            "techniqueID": "T1036",
            "enabled": True
        },
        {
            "techniqueID": "T1036.005",
            "enabled": True
        },
        {
            "techniqueID": "T1556",
            "enabled": True
        },
        {
            "techniqueID": "T1578",
            "enabled": True
        },
        {
            "techniqueID": "T1112",
            "enabled": True
        },
        {
            "techniqueID": "T1218.005",
            "enabled": True
        },
        {
            "techniqueID": "T1218.007",
            "enabled": True
        },
        {
            "techniqueID": "T1104",
            "enabled": True
        },
        {
            "techniqueID": "T1090.003",
            "enabled": True
        },
        {
            "techniqueID": "T1003.003",
            "enabled": True
        },
        {
            "techniqueID": "T1564.004",
            "enabled": True
        },
        {
            "techniqueID": "T1106",
            "enabled": True
        },
        {
            "techniqueID": "T1546.007",
            "enabled": True
        },
        {
            "techniqueID": "T1498",
            "enabled": True
        },
        {
            "techniqueID": "T1037.003",
            "enabled": True
        },
        {
            "techniqueID": "T1046",
            "enabled": True
        },
        {
            "techniqueID": "T1070.005",
            "enabled": True
        },
        {
            "techniqueID": "T1135",
            "enabled": True
        },
        {
            "techniqueID": "T1040",
            "enabled": True
        },
        {
            "techniqueID": "T1095",
            "enabled": True
        },
        {
            "techniqueID": "T1132.002",
            "enabled": True
        },
        {
            "techniqueID": "T1571",
            "enabled": True
        },
        {
            "techniqueID": "T1003",
            "enabled": True
        },
        {
            "techniqueID": "T1499.001",
            "enabled": True
        },
        {
            "techniqueID": "T1027",
            "enabled": True
        },
        {
            "techniqueID": "T1218.008",
            "enabled": True
        },
        {
            "techniqueID": "T1137",
            "enabled": True
        },
        {
            "techniqueID": "T1137.001",
            "enabled": True
        },
        {
            "techniqueID": "T1137.002",
            "enabled": True
        },
        {
            "techniqueID": "T1102.003",
            "enabled": True
        },
        {
            "techniqueID": "T1137.003",
            "enabled": True
        },
        {
            "techniqueID": "T1137.004",
            "enabled": True
        },
        {
            "techniqueID": "T1137.005",
            "enabled": True
        },
        {
            "techniqueID": "T1134.004",
            "enabled": True
        },
        {
            "techniqueID": "T1550.002",
            "enabled": True
        },
        {
            "techniqueID": "T1550.003",
            "enabled": True
        },
        {
            "techniqueID": "T1110.002",
            "enabled": True
        },
        {
            "techniqueID": "T1556.002",
            "enabled": True
        },
        {
            "techniqueID": "T1110.001",
            "enabled": True
        },
        {
            "techniqueID": "T1201",
            "enabled": True
        },
        {
            "techniqueID": "T1110.003",
            "enabled": True
        },
        {
            "techniqueID": "T1574.007",
            "enabled": True
        },
        {
            "techniqueID": "T1574.008",
            "enabled": True
        },
        {
            "techniqueID": "T1574.009",
            "enabled": True
        },
        {
            "techniqueID": "T1120",
            "enabled": True
        },
        {
            "techniqueID": "T1069",
            "enabled": True
        },
        {
            "techniqueID": "T1566",
            "enabled": True
        },
        {
            "techniqueID": "T1547.011",
            "enabled": True
        },
        {
            "techniqueID": "T1556.003",
            "enabled": True
        },
        {
            "techniqueID": "T1205.001",
            "enabled": True
        },
        {
            "techniqueID": "T1547.010",
            "enabled": True
        },
        {
            "techniqueID": "T1055.002",
            "enabled": True
        },
        {
            "techniqueID": "T1059.001",
            "enabled": True
        },
        {
            "techniqueID": "T1546.013",
            "enabled": True
        },
        {
            "techniqueID": "T1542",
            "enabled": True
        },
        {
            "techniqueID": "T1552.004",
            "enabled": True
        },
        {
            "techniqueID": "T1003.007",
            "enabled": True
        },
        {
            "techniqueID": "T1055.009",
            "enabled": True
        },
        {
            "techniqueID": "T1057",
            "enabled": True
        },
        {
            "techniqueID": "T1055.013",
            "enabled": True
        },
        {
            "techniqueID": "T1055.012",
            "enabled": True
        },
        {
            "techniqueID": "T1055",
            "enabled": True
        },
        {
            "techniqueID": "T1001.003",
            "enabled": True
        },
        {
            "techniqueID": "T1572",
            "enabled": True
        },
        {
            "techniqueID": "T1090",
            "enabled": True
        },
        {
            "techniqueID": "T1055.008",
            "enabled": True
        },
        {
            "techniqueID": "T1216.001",
            "enabled": True
        },
        {
            "techniqueID": "T1059.006",
            "enabled": True
        },
        {
            "techniqueID": "T1012",
            "enabled": True
        },
        {
            "techniqueID": "T1563.002",
            "enabled": True
        },
        {
            "techniqueID": "T1037.004",
            "enabled": True
        },
        {
            "techniqueID": "T1547.007",
            "enabled": True
        },
        {
            "techniqueID": "T1498.002",
            "enabled": True
        },
        {
            "techniqueID": "T1547.001",
            "enabled": True
        },
        {
            "techniqueID": "T1218.009",
            "enabled": True
        },
        {
            "techniqueID": "T1218.010",
            "enabled": True
        },
        {
            "techniqueID": "T1219",
            "enabled": True
        },
        {
            "techniqueID": "T1074.002",
            "enabled": True
        },
        {
            "techniqueID": "T1021.001",
            "enabled": True
        },
        {
            "techniqueID": "T1114.002",
            "enabled": True
        },
        {
            "techniqueID": "T1563",
            "enabled": True
        },
        {
            "techniqueID": "T1021",
            "enabled": True
        },
        {
            "techniqueID": "T1018",
            "enabled": True
        },
        {
            "techniqueID": "T1036.003",
            "enabled": True
        },
        {
            "techniqueID": "T1091",
            "enabled": True
        },
        {
            "techniqueID": "T1496",
            "enabled": True
        },
        {
            "techniqueID": "T1578.004",
            "enabled": True
        },
        {
            "techniqueID": "T1036.002",
            "enabled": True
        },
        {
            "techniqueID": "T1207",
            "enabled": True
        },
        {
            "techniqueID": "T1014",
            "enabled": True
        },
        {
            "techniqueID": "T1564.006",
            "enabled": True
        },
        {
            "techniqueID": "T1218.011",
            "enabled": True
        },
        {
            "techniqueID": "T1565.003",
            "enabled": True
        },
        {
            "techniqueID": "T1134.005",
            "enabled": True
        },
        {
            "techniqueID": "T1553.003",
            "enabled": True
        },
        {
            "techniqueID": "T1021.002",
            "enabled": True
        },
        {
            "techniqueID": "T1505.001",
            "enabled": True
        },
        {
            "techniqueID": "T1021.004",
            "enabled": True
        },
        {
            "techniqueID": "T1098.004",
            "enabled": True
        },
        {
            "techniqueID": "T1563.001",
            "enabled": True
        },
        {
            "techniqueID": "T1053.005",
            "enabled": True
        },
        {
            "techniqueID": "T1053",
            "enabled": True
        },
        {
            "techniqueID": "T1029",
            "enabled": True
        },
        {
            "techniqueID": "T1113",
            "enabled": True
        },
        {
            "techniqueID": "T1546.002",
            "enabled": True
        },
        {
            "techniqueID": "T1003.002",
            "enabled": True
        },
        {
            "techniqueID": "T1518.001",
            "enabled": True
        },
        {
            "techniqueID": "T1547.005",
            "enabled": True
        },
        {
            "techniqueID": "T1555.002",
            "enabled": True
        },
        {
            "techniqueID": "T1505",
            "enabled": True
        },
        {
            "techniqueID": "T1569.002",
            "enabled": True
        },
        {
            "techniqueID": "T1499.002",
            "enabled": True
        },
        {
            "techniqueID": "T1489",
            "enabled": True
        },
        {
            "techniqueID": "T1574.010",
            "enabled": True
        },
        {
            "techniqueID": "T1574.011",
            "enabled": True
        },
        {
            "techniqueID": "T1548.001",
            "enabled": True
        },
        {
            "techniqueID": "T1129",
            "enabled": True
        },
        {
            "techniqueID": "T1213.002",
            "enabled": True
        },
        {
            "techniqueID": "T1547.009",
            "enabled": True
        },
        {
            "techniqueID": "T1218",
            "enabled": True
        },
        {
            "techniqueID": "T1216",
            "enabled": True
        },
        {
            "techniqueID": "T1558.002",
            "enabled": True
        },
        {
            "techniqueID": "T1072",
            "enabled": True
        },
        {
            "techniqueID": "T1518",
            "enabled": True
        },
        {
            "techniqueID": "T1027.002",
            "enabled": True
        },
        {
            "techniqueID": "T1036.006",
            "enabled": True
        },
        {
            "techniqueID": "T1566.001",
            "enabled": True
        },
        {
            "techniqueID": "T1566.002",
            "enabled": True
        },
        {
            "techniqueID": "T1566.003",
            "enabled": True
        },
        {
            "techniqueID": "T1132.001",
            "enabled": True
        },
        {
            "techniqueID": "T1037.005",
            "enabled": True
        },
        {
            "techniqueID": "T1528",
            "enabled": True
        },
        {
            "techniqueID": "T1539",
            "enabled": True
        },
        {
            "techniqueID": "T1558",
            "enabled": True
        },
        {
            "techniqueID": "T1027.003",
            "enabled": True
        },
        {
            "techniqueID": "T1001.002",
            "enabled": True
        },
        {
            "techniqueID": "T1565.001",
            "enabled": True
        },
        {
            "techniqueID": "T1553",
            "enabled": True
        },
        {
            "techniqueID": "T1548.003",
            "enabled": True
        },
        {
            "techniqueID": "T1195",
            "enabled": True
        },
        {
            "techniqueID": "T1573.001",
            "enabled": True
        },
        {
            "techniqueID": "T1497.001",
            "enabled": True
        },
        {
            "techniqueID": "T1542.001",
            "enabled": True
        },
        {
            "techniqueID": "T1082",
            "enabled": True
        },
        {
            "techniqueID": "T1016",
            "enabled": True
        },
        {
            "techniqueID": "T1049",
            "enabled": True
        },
        {
            "techniqueID": "T1033",
            "enabled": True
        },
        {
            "techniqueID": "T1007",
            "enabled": True
        },
        {
            "techniqueID": "T1569",
            "enabled": True
        },
        {
            "techniqueID": "T1529",
            "enabled": True
        },
        {
            "techniqueID": "T1124",
            "enabled": True
        },
        {
            "techniqueID": "T1543.002",
            "enabled": True
        },
        {
            "techniqueID": "T1080",
            "enabled": True
        },
        {
            "techniqueID": "T1221",
            "enabled": True
        },
        {
            "techniqueID": "T1055.003",
            "enabled": True
        },
        {
            "techniqueID": "T1055.005",
            "enabled": True
        },
        {
            "techniqueID": "T1497.003",
            "enabled": True
        },
        {
            "techniqueID": "T1547.003",
            "enabled": True
        },
        {
            "techniqueID": "T1070.006",
            "enabled": True
        },
        {
            "techniqueID": "T1134.001",
            "enabled": True
        },
        {
            "techniqueID": "T1205",
            "enabled": True
        },
        {
            "techniqueID": "T1537",
            "enabled": True
        },
        {
            "techniqueID": "T1565.002",
            "enabled": True
        },
        {
            "techniqueID": "T1505.002",
            "enabled": True
        },
        {
            "techniqueID": "T1546.005",
            "enabled": True
        },
        {
            "techniqueID": "T1127",
            "enabled": True
        },
        {
            "techniqueID": "T1199",
            "enabled": True
        },
        {
            "techniqueID": "T1111",
            "enabled": True
        },
        {
            "techniqueID": "T1059.004",
            "enabled": True
        },
        {
            "techniqueID": "T1552",
            "enabled": True
        },
        {
            "techniqueID": "T1535",
            "enabled": True
        },
        {
            "techniqueID": "T1550",
            "enabled": True
        },
        {
            "techniqueID": "T1497.002",
            "enabled": True
        },
        {
            "techniqueID": "T1204",
            "enabled": True
        },
        {
            "techniqueID": "T1055.014",
            "enabled": True
        },
        {
            "techniqueID": "T1021.005",
            "enabled": True
        },
        {
            "techniqueID": "T1078",
            "enabled": True
        },
        {
            "techniqueID": "T1125",
            "enabled": True
        },
        {
            "techniqueID": "T1497",
            "enabled": True
        },
        {
            "techniqueID": "T1059.005",
            "enabled": True
        },
        {
            "techniqueID": "T1056.003",
            "enabled": True
        },
        {
            "techniqueID": "T1071.001",
            "enabled": True
        },
        {
            "techniqueID": "T1102",
            "enabled": True
        },
        {
            "techniqueID": "T1550.004",
            "enabled": True
        },
        {
            "techniqueID": "T1505.003",
            "enabled": True
        },
        {
            "techniqueID": "T1059.003",
            "enabled": True
        },
        {
            "techniqueID": "T1222.001",
            "enabled": True
        },
        {
            "techniqueID": "T1047",
            "enabled": True
        },
        {
            "techniqueID": "T1546.003",
            "enabled": True
        },
        {
            "techniqueID": "T1021.006",
            "enabled": True
        },
        {
            "techniqueID": "T1543.003",
            "enabled": True
        },
        {
            "techniqueID": "T1547.004",
            "enabled": True
        },
        {
            "techniqueID": "T1220",
            "enabled": True
        }
    ]
}
