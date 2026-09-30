# SFA Complexity

## Sycamore 53-20

```json
{
    "type": "prog",
    "xsize": "12",
    "ysize": "9",
    "use00": true,
    "brokenBits": "[3]",
    "part1": "[0,1,12,13,14,18,19,2,20,24,25,26,30,31,32,36,37,38,42,43,44,48,49,50,6,7,8]",
    "depth": "20",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 6,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternA",
            "pattern": "A",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "B",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "C",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "D",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"ABCDCDAB":{"split":[0,1,12,13,14,18,19,2,24,25,26,30,31,32,36,37,38,42,43,44,48,49,50,51,6,7,8],"lengthInfo":{"length":31,"cut":35,"wedge":0,"DCD":2,"start":2,"end":2},"search_min":31,"search_max":31,"unbalance":2,"n1":27,"n2":26,"pattern":["ABCDCDAB","ABCD"]}

## Zuchongzhi 56-20

```json
{
    "type": "prog",
    "xsize": "12",
    "ysize": "11",
    "use00": false,
    "brokenBits": "[0,5,6,18,30,42,54,60,65,24]",
    "part1": "[1,10,11,12,13,14,15,16,17,19,2,20,21,22,23,26,27,28,29,3,33,34,35,4,41,7,8,9]",
    "depth": "20",
    "searchPattern": "01232301012323010123",
    "errorRates": "[0.0016,0.008,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 6,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "1_1111110011"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "1_0000001100"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "0_0110001111"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "0_1001110000"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuit",
            "qubitNumber": 66,
            "elided": "",
            "pattern": "IJKLKLIJIJKLKLIJIJKL",
            "seed": "13874234",
            "simulationFilename": "",
            "auxiliaryFilename": "",
            "experimentFilename": "",
            "order": [
                {
                    "type": "orderlist",
                    "order": "[30,24,31,36,42,43,18,19,37,25,44,20,32,48,49,12,13,50,38,14,26,45,21,33,51,39,15,27,54,55,6,7,56,57,8,9,58,46,10,22,34,52,40,16,28,60,61,0,1,62,63,2,3,64,59,4,11,47,23,35,53,41,17,29,65,5]"
                }
            ],
            "sfaCut": "-1",
            "pepsCut": "[8,3,8,15,20,15,20,27]",
            "pepsPath": [
                {
                    "type": "orderlist",
                    "order": "[30,24,31,36,42,43,18,19,37,25,44,20,32,48,49,12,13,50,38,14,26,45,21,33,51,39,15,27,54,55,6,7,56,57,8,9,58,46,10,22,34,52,40,16,28,60,61,0,1,62,63,2,3,64,59,4,11,47,23,35,53,41,17,29,65,5]"
                }
            ],
            "gateArgs": [
                {
                    "type": "gateArgs",
                    "unknow": "[0.5,0.1666666667,0,0,0]"
                }
            ]
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,10,11,12,13,14,15,16,17,19,2,20,21,22,23,26,27,28,29,3,33,34,35,4,41,7,8,9],"lengthInfo":{"length":38,"cut":45,"wedge":3,"DCD":2,"start":1,"end":3},"search_min":38,"search_max":38,"unbalance":0,"n1":28,"n2":28,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi 60-24

```json
{
    "type": "prog",
    "xsize": "12",
    "ysize": "11",
    "use00": false,
    "brokenBits": "[4,5,11,22,65,17]",
    "part1": "[0,1,10,12,13,14,15,16,18,19,2,20,21,24,25,26,3,30,31,32,36,37,42,6,7,8,9]",
    "depth": "24",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.008,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 6,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_0001000100"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_1110111011"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_0000001001"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_1111110110"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuit",
            "qubitNumber": 66,
            "elided": "",
            "pattern": "IJKLKLIJIJKLKLIJIJKL",
            "seed": "13874234",
            "simulationFilename": "",
            "auxiliaryFilename": "",
            "experimentFilename": "",
            "order": [
                {
                    "type": "orderlist",
                    "order": "[30,24,31,36,42,43,18,19,37,25,44,20,32,48,49,12,13,50,38,14,26,45,21,33,51,39,15,27,54,55,6,7,56,57,8,9,58,46,10,22,34,52,40,16,28,60,61,0,1,62,63,2,3,64,59,4,11,47,23,35,53,41,17,29,65,5]"
                }
            ],
            "sfaCut": "-1",
            "pepsCut": "[8,3,8,15,20,15,20,27]",
            "pepsPath": [
                {
                    "type": "orderlist",
                    "order": "[30,24,31,36,42,43,18,19,37,25,44,20,32,48,49,12,13,50,38,14,26,45,21,33,51,39,15,27,54,55,6,7,56,57,8,9,58,46,10,22,34,52,40,16,28,60,61,0,1,62,63,2,3,64,59,4,11,47,23,35,53,41,17,29,65,5]"
                }
            ],
            "gateArgs": [
                {
                    "type": "gateArgs",
                    "unknow": "[0.5,0.1666666667,0,0,0]"
                }
            ]
        }
    ]
}
```

"IJKLKLIJ":{"split":[0,1,10,12,13,14,15,16,18,19,2,20,21,24,25,26,3,30,31,32,36,37,42,6,7,8,9],"lengthInfo":{"length":41.5,"cut":48,"wedge":3,"DCD":3,"start":1,"end":0},"search_min":42.511183906514226,"search_max":42.511183906514226,"unbalance":12,"n1":33,"n2":27,"pattern":["IJKLKLIJ","IJKL"]}

## Sycamore 67-32

```json
{
    "type": "prog",
    "xsize": "12",
    "ysize": "12",
    "use00": false,
    "brokenBits": "[0,5,7,17,23]",
    "part1": "[1,10,11,12,13,14,15,16,18,19,2,20,21,22,24,25,26,27,3,30,31,32,33,36,37,38,4,42,44,6,8,9]",
    "depth": "32",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 6,
    "search": "notprune",
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ],
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternA",
            "pattern": "A",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "B",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "C",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "D",
            "color": "#cc0000"
        }
    ]
}
```

"ABCDCDAB":{"split":[1,10,11,12,13,14,15,16,18,19,2,20,21,22,24,25,26,27,3,30,31,32,33,36,37,38,4,42,44,6,8,9],"lengthInfo":{"length":59,"cut":72,"wedge":8,"DCD":4,"start":1,"end":1},"search_min":59.29248125036058,"search_max":59.29248125036058,"unbalance":6,"n1":35,"n2":32,"pattern":["ABCDCDAB","ABCD"]}

## Sycamore 70-24

```json
{
    "type": "prog",
    "xsize": "12",
    "ysize": "12",
    "use00": false,
    "brokenBits": "[5,11]",
    "part1": "[0,1,10,12,13,14,15,16,17,18,19,2,20,21,22,23,24,25,26,27,28,29,3,30,32,33,34,35,39,4,40,6,7,8,9]",
    "depth": "24",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 8,
    "search": "notprune",
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ],
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternA",
            "pattern": "A",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "B",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "C",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "D",
            "color": "#cc0000"
        }
    ]
}
```

"ABCDCDAB":{"split":[0,1,10,12,13,14,15,16,17,18,19,2,20,21,22,23,24,25,26,27,28,29,3,30,32,33,34,35,39,4,40,6,7,8,9],"lengthInfo":{"length":45.5,"cut":66,"wedge":12,"DCD":6,"start":3,"end":2},"search_min":45.5,"search_max":45.5,"unbalance":0,"n1":35,"n2":35,"pattern":["ABCDCDAB","ABCD"]}

## Zuchongzhi 74-28

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "11",
    "use00": true,
    "brokenBits": "[0, 7, 22, 30, 49, 52, 60, 75, 82]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 64, 72, 79, 71, 78, 70, 77, 69, 76, 68, 61, 54, 62, 55, 63, 47, 40, 32, 39, 46, 53, 45, 38, 31, 24, 16, 23, 15, 8]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 6,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_00000001110"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_11111110001"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_00111000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_11000111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,64,72,79,71,78,70,77,69,76,68,61,54,62,55,63,47,40,32,39,46,53,45,38,31,24,16,23,15,8],"lengthInfo":{"length":48.5,"cut":56,"wedge":0,"DCD":6,"start":3,"end":0},"search_min":48.5,"search_max":48.5,"unbalance":0,"n1":37,"n2":37,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi 99-24

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "15",
    "use00": true,
    "brokenBits": "[ 0, 7, 22, 30, 49, 52, 60, 82, 90, 105, 108, 112 ]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 55, 47, 40, 32, 39, 31, 24, 16, 23, 15, 8, 34, 42, 50, 58, 66, 74, 67, 59, 51, 44, 37, 29, 36, 43, 35, 28, 21, 14, 6, 13, 20, 27, 19, 26, 18, 11, 4, 12, 5, 3, 10, 2]",
    "depth": "24",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 6,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_0000000110000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_1111111001111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_0001111000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_1110000111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,55,47,40,32,39,31,24,16,23,15,8,34,42,50,58,66,74,67,59,51,44,37,29,36,43,35,28,21,14,6,13,20,27,19,26,18,11,4,12,5,3,10,2],"lengtInfo"j:{"length":56,"cut":60,"wedge":0,"DCD":0,"start":4,"end":4},"search_min":56,"search_max":56,"unbalance":2,"n1":51,"n2":50,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi 98-24

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "15",
    "use00": true,
    "brokenBits": "[0,7,22,30,49,52,60,82,90,105,108,112,94]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 70, 78, 86, 93, 101, 109, 100, 107, 99, 106, 98, 91, 84, 92, 85, 77, 69, 76, 83, 75, 68, 61, 54, 62, 55, 47, 40, 32, 39, 46, 53, 45, 38, 31, 24, 16, 23, 15, 8, 10, 2]",
    "depth": "24",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 6,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "1_0001011000000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "1_1110100111111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "0_0000000110000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "0_1111111001111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,70,78,86,93,101,109,100,107,99,106,98,91,84,92,85,77,69,76,83,75,68,61,54,62,55,47,40,32,39,46,53,45,38,31,24,16,23,15,8,10,2],"lengthInfo":{"length":52.5,"cut":60,"wedge":0,"DCD":6,"start":1,"end":2},"search_min":52.5,"search_max":52.5,"unbalance":0,"n1":50,"n2":50,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-96-24

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "15",
    "use00": true,
    "brokenBits": "[0,7,22,30,49,52,60,82,90,94,105,107,108,112,5]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 70, 78, 86, 93, 101, 109, 100, 92, 99, 106, 98, 91, 84, 77, 85, 69, 76, 83, 75, 68, 61, 54, 62, 55, 47, 40, 32, 39, 46, 53, 45, 38, 31, 24, 16, 23, 15, 8, 26, 19, 11, 18, 10, 3, 2]",
    "depth": "24",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 6,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "1_0001111000000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "1_1110000111111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "0_0000000110000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "0_1111111001111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,4,12,9,17,25,33,41,48,56,63,70,78,86,93,101,109,100,92,99,106,98,91,84,77,85,69,76,83,75,68,61,54,62,55,47,40,32,39,46,53,45,38,31,24,16,23,15,8,26,19,11,18,10,3,2],"lengthInfo":{"length":48.5,"cut":54,"wedge":0,"DCD":3,"start":2,"end":3},"search_min":51.500044026215065,"search_max":51.500044026215065,"unbalance":28,"n1":56,"n2":42,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-86-24

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,30,49,52,60,82,90,94,97,5]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 70, 78, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 62, 55, 47, 54, 61, 68, 75, 53, 46, 39, 32, 40, 24, 31, 38, 45, 23, 16, 8, 15, 26, 19, 11, 18, 10, 3, 2]",
    "depth": "24",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 6,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "1_000111000000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "1_111000111111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "0_000000011000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "0_111111100111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,70,78,86,93,85,92,84,91,83,76,69,77,62,55,47,54,61,68,75,53,46,39,32,40,24,31,38,45,23,16,8,15,26,19,11,18,10,3,2],"lengthInfo":{"length":46,"cut":54,"wedge":0,"DCD":6,"start":2,"end":2},"search_min":48.000704097196405,"search_max":48.000704097196405,"unbalance":20,"n1":48,"n2":38,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-86-28

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,30,49,52,60,82,90,94,97,5]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 70, 78, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 62, 55, 47, 54, 61, 68, 75, 53, 46, 39, 32, 40, 24, 31, 38, 45, 23, 16, 8, 15, 26, 19, 12, 4, 11, 18, 10, 3, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 20,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000000011000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111111100111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_001111000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_110000111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,70,78,86,93,85,92,84,91,83,76,69,77,62,55,47,54,61,68,75,53,46,39,32,40,24,31,38,45,23,16,8,15,26,19,12,4,11,18,10,3,2],"lengthInfo":{"length":54,"cut":56,"wedge":0,"DCD":0,"start":1,"end":3},"search_min":57.000044026215065,"search_max":57.000044026215065,"unbalance":28,"n1":50,"n2":36,"pattern":["IJKLKLIJ","IJKL"]}


## Zuchongzhi-84-28

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,5,7,10,22,30,49,52,60,82,90,94,97,39]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 71, 78, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 70, 62, 55, 47, 54, 61, 68, 75, 53, 46, 38, 45, 31, 24, 32, 40, 16, 23, 15, 8, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010011000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101100111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000011000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111100111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,71,78,86,93,85,92,84,91,83,76,69,77,70,62,55,47,54,61,68,75,53,46,38,45,31,24,32,40,16,23,15,8,2],"lengthInfo":{"length":48,"cut":49,"wedge":0,"DCD":0,"start":2,"end":0},"search_min":48,"search_max":48,"unbalance":0,"n1":42,"n2":42,"pattern":["IJKLKLIJ","IJKL"]}


## Zuchongzhi-85-28

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,5,7,10,22,30,49,52,60,82,90,94,97]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 70, 78, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 62, 55, 47, 54, 61, 68, 75, 53, 46, 39, 32, 40, 24, 31, 38, 45, 23, 16, 8, 15, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ],
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101111111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000000000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111111111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,70,78,86,93,85,92,84,91,83,76,69,77,62,55,47,54,61,68,75,53,46,39,32,40,24,31,38,45,23,16,8,15,2],"lengthInfo":{"length":48,"cut":49,"wedge":0,"DCD":0,"start":1,"end":1},"search_min":48,"search_max":48,"unbalance":2,"n1":43,"n2":42,"pattern":["IJKLKLIJ","IJKL"]}


## Zuchongzhi-83-28-without2couplers

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "12",
    "use00": true,
    "brokenBits": "[0,7,22,30,52,60,82]",
    "part1": "[1,9,17,25,33,41,48,56,63,70,78,86,93,85,92,84,91,83,76,69,77,62,55,47,54,61,68,75,53,46,39,32,40,24,31,38,45,23,16,8,15,2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ],
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101111111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000000000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111111111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,70,78,86,93,85,92,84,91,83,76,69,77,62,55,47,54,61,68,75,53,46,39,32,40,24,31,38,45,23,16,8,15,2],"lengthInfo":{"length":69,"cut":77,"wedge":0,"DCD":6,"start":2,"end":2},"search_min":69.72971580931865,"search_max":69.72971580931865,"unbalance":10,"n1":44,"n2":39,"pattern":["IJKLKLIJ","IJKL"]}


## Zuchongzhi-82-28-without2couplers

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "12",
    "use00": true,
    "brokenBits": "[0,7,22,30,52,60,82,39]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 55, 63, 71, 79, 87, 86, 78, 85, 77, 84, 76, 83, 75, 68, 61, 69, 62, 70, 54, 47, 40, 32, 24, 31, 38, 46, 53, 45, 23, 16, 8, 15, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "1_000111100000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "1_111000011111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "0_000101111100"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "0_111010000011"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,55,63,71,79,87,86,78,85,77,84,76,83,75,68,61,69,62,70,54,47,40,32,24,31,38,46,53,45,23,16,8,15,10,2],"lengthInfo":{"length":65,"cut":77,"wedge":4,"DCD":6,"start":1,"end":3},"search_min":65,"search_max":65,"unbalance":0,"n1":41,"n2":41,"pattern":["IJKLKLIJ","IJKL"]}


## Zuchongzhi-89-28-without5couplers

```json
{
  "type": "prog",
  "xsize": "15",
  "ysize": "13",
  "use00": true,
  "brokenBits": "[0,7,22,30,52,60,82,90,97]",
  "part1": "[1, 9, 17, 25, 33, 41, 48, 55, 63, 71, 79, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 70, 78, 62, 54, 61, 68, 75, 53, 46, 39, 32, 40, 47, 24, 31, 38, 45, 23, 16, 8, 15, 10, 2]",
  "depth": "28",
  "searchPattern": "01232301",
  "errorRates": "[0.0016,0.0062,0.038]",
  "removedEntrances": "[]",
  "balancedRange": 24,
  "search": "notprune",
  "showMark": [
    {
      "type": "markQi"
    }
  ],
  "showPattern": [
    {
      "type": "patternDefine",
      "pattern": "I",
      "bitString": "1_000011100000"
    },
    {
      "type": "patternDefine",
      "pattern": "J",
      "bitString": "1_111100011111"
    },
    {
      "type": "patternDefine",
      "pattern": "K",
      "bitString": "0_000101111000"
    },
    {
      "type": "patternDefine",
      "pattern": "L",
      "bitString": "0_111010000111"
    },
    {
      "type": "patternA",
      "pattern": "I",
      "color": "#ff9900"
    },
    {
      "type": "patternA",
      "pattern": "J",
      "color": "#3333ff"
    },
    {
      "type": "patternC",
      "pattern": "K",
      "color": "#009900"
    },
    {
      "type": "patternC",
      "pattern": "L",
      "color": "#cc0000"
    }
  ],
  "generatingCircuit": [
    {
      "type": "generatingCircuitNone"
    }
  ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,55,63,71,79,86,93,85,92,84,91,83,76,69,77,70,78,62,54,61,68,75,53,46,39,32,40,47,24,31,38,45,23,16,8,15,10,2],"lengthInfo":{"length":72,"cut":84,"wedge":4,"DCD":6,"start":1,"end":3},"search_min":72,"search_max":72,"unbalance":2,"n1":45,"n2":44,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-83-28-without4couplers

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "12",
    "use00": true,
    "brokenBits": "[0,7,22,30,52,60,82]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 55, 63, 71, 79, 86, 78, 85, 77, 84, 76, 83, 75, 68, 61, 69, 62, 70, 54, 47, 40, 32, 39, 46, 53, 45, 38, 31, 24, 16, 23, 15, 8, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.0016,0.0062,0.038]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101111111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000000000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111111111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,55,63,71,79,86,78,85,77,84,76,83,75,68,61,69,62,70,54,47,40,32,39,46,53,45,38,31,24,16,23,15,8,10,2],"lengthInfo":{"length":69,"cut":77,"wedge":0,"DCD":6,"start":2,"end":2},"search_min":69,"search_max":69,"unbalance":2,"n1":42,"n2":41,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-88-28-without4couplers-and-q47

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,30,52,60,82,90,97,49]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 71, 78, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 70, 62, 55, 47, 54, 61, 68, 75, 53, 46, 39, 32, 40, 24, 31, 38, 45, 23, 16, 8, 15, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010011000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101100111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000011000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111100111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,71,78,86,93,85,92,84,91,83,76,69,77,70,62,55,47,54,61,68,75,53,46,39,32,40,24,31,38,45,23,16,8,15,10,2],"lengthInfo":{"length":62,"cut":70,"wedge":0,"DCD":6,"start":2,"end":2},"search_min":62,"search_max":62,"unbalance":0,"n1":44,"n2":44,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-82-28-without3couplers-and-q47

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "12",
    "use00": true,
    "brokenBits": "[0,7,22,30,52,60,82,49]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 71, 78, 86, 85, 77, 84, 76, 83, 75, 68, 61, 69, 62, 70, 55, 47, 54, 46, 53, 45, 38, 31, 24, 32, 40, 39, 16, 23, 15, 8, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101111111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000000000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111111111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,71,78,86,85,77,84,76,83,75,68,61,69,62,70,55,47,54,46,53,45,38,31,24,32,40,39,16,23,15,8,10,2],"lengthInfo":{"length":55.5,"cut":63,"wedge":0,"DCD":6,"start":0,"end":3},"search_min":55.5,"search_max":55.5,"unbalance":0,"n1":41,"n2":41,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-87-28-without3couplers-and-q47-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,30,49,52,60,82,90,94,97]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 70, 78, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 62, 55, 47, 54, 61, 68, 75, 53, 46, 39, 32, 40, 24, 31, 38, 45, 23, 16, 8, 15, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010011000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101100111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000011000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111100111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,70,78,86,93,85,92,84,91,83,76,69,77,62,55,47,54,61,68,75,53,46,39,32,40,24,31,38,45,23,16,8,15,10,2],"lengthInfo":{"length":58.5,"cut":63,"wedge":0,"DCD":3,"start":1,"end":2},"search_min":58.5,"search_max":58.5,"unbalance":2,"n1":44,"n2":43,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-82-28-without5couplers-and-q47

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "12",
    "use00": true,
    "brokenBits": "[0,7,22,30,49,52,60,82]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 71, 78, 86, 85, 77, 84, 76, 83, 75, 68, 69, 62, 70, 55, 47, 54, 61, 53, 46, 39, 32, 40, 38, 45, 31, 24, 16, 23, 15, 8, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010011000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101100111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000111000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111000111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,71,78,86,85,77,84,76,83,75,68,69,62,70,55,47,54,61,53,46,39,32,40,38,45,31,24,16,23,15,8,10,2],"lengthInfo":{"length":55.5,"cut":63,"wedge":0,"DCD":6,"start":2,"end":1},"search_min":55.5,"search_max":55.5,"unbalance":0,"n1":41,"n2":41,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-80-28-without3couplers-and-q30-q47-q64-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "12",
    "use00": true,
    "brokenBits": "[0,7,22,30,32,49,52,60,68,82]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 71, 79, 86, 78, 85, 77, 84, 76, 83, 75, 69, 62, 70, 55, 47, 54, 61, 53, 46, 39, 38, 45, 31, 24, 16, 23, 15, 8, 40, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010011000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101100111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000011000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111100111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,71,79,86,78,85,77,84,76,83,75,69,62,70,55,47,54,61,53,46,39,38,45,31,24,16,23,15,8,40,10,2],"lengthInfo":{"length":52.5,"cut":63,"wedge":0,"DCD":9,"start":1,"end":2},"search_min":52.5,"search_max":52.5,"unbalance":0,"n1":40,"n2":40,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-87-28-without5couplers-and-q47-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,30,49,52,60,82,90,94,97]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 63, 70, 78, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 62, 55, 47, 54, 61, 53, 46, 39, 32, 40, 38, 45, 31, 24, 16, 23, 15, 8, 68, 75, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ],
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010011000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101100111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000011000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111100111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,70,78,86,93,85,92,84,91,83,76,69,77,62,55,47,54,61,53,46,39,32,40,38,45,31,24,16,23,15,8,68,75,10,2],"lengthInfo":{"length":58.5,"cut":63,"wedge":0,"DCD":3,"start":1,"end":2},"search_min":58.5,"search_max":58.5,"unbalance":2,"n1":44,"n2":43,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-85-28-without3couplers-and-q30-q47-q64-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,30,32,49,52,60,82,90,94,97,68]",
    "part1": "[1,9,17,25,33,41,48,56,63,71,78,86,93,85,92,84,91,83,76,69,77,70,62,55,47,54,61,53,46,39,38,45,31,24,16,23,15,8,40,75,10,2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ],
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010011000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101100111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000011000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111100111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,63,71,78,86,93,85,92,84,91,83,76,69,77,70,62,55,47,54,61,53,46,39,38,45,31,24,16,23,15,8,40,75,10,2],"lengthInfo":{"length":55.5,"cut":63,"wedge":0,"DCD":6,"start":2,"end":1},"search_min":55.5,"search_max":55.5,"unbalance":2,"n1":43,"n2":42,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-84-28-without3couplers-and-q30-q47-q64-q76-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0, 7, 22, 30, 32, 52, 60, 68, 80, 82, 90, 94, 97, 49]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 64, 72, 79, 87, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 70, 78, 71, 63, 55, 62, 54, 61, 53, 46, 39, 38, 45, 31, 24, 16, 23, 15, 8, 47, 40, 75, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010010010"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101101101"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_111101111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,64,72,79,87,86,93,85,92,84,91,83,76,69,77,70,78,71,63,55,62,54,61,53,46,39,38,45,31,24,16,23,15,8,47,40,75,10,2],"lengthInfo":{"length":46.5,"cut":56,"wedge":0,"DCD":9,"start":0,"end":1},"search_min":48.002812274596934,"search_max":48.002812274596934,"unbalance":16,"n1":46,"n2":38,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-87-28-without6couplers-and-q47-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0, 7, 22, 30, 52, 60, 82, 90, 94, 97, 49]",
    "part1": "[1, 9, 17, 25, 33, 41, 34, 42, 50, 58, 66, 74, 67, 59, 51, 44, 37, 29, 36, 43, 35, 28, 21, 14, 6, 13, 20, 27, 19, 26, 18, 11, 4, 12, 5, 3, 10, 2, 24, 31, 23, 16, 8, 15]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "1_000011000000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "1_111100111111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "0_001101011100"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "0_110010100011"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,34,42,50,58,66,74,67,59,51,44,37,29,36,43,35,28,21,14,6,13,20,27,19,26,18,11,4,12,5,3,10,2,24,31,23,16,8,15],"lengthInfo":{"length":60.5,"cut":70,"wedge":7,"DCD":0,"start":1,"end":4},"search_min":60.5,"search_max":60.5,"unbalance":2,"n1":44,"n2":43,"pattern":["IJKLKLIJ","IJKL"]}


## Zuchongzhi-82-28-without3couplers-and-q22-q30-q47-q64-q76-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,23,30,32,49,52,60,68,80,82,90,94,97,15]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 64, 72, 79, 87, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 70, 78, 71, 63, 55, 62, 54, 61, 53, 46, 39, 38, 45, 31, 24, 16, 8, 47, 40, 75, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "1_000000000000"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "1_111111111111"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "0_000101001000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "0_111010110111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,64,72,79,87,86,93,85,92,84,91,83,76,69,77,70,78,71,63,55,62,54,61,53,46,39,38,45,31,24,16,8,47,40,75,10,2],"lengthInfo":{"length":45.5,"cut":56,"wedge":4,"DCD":6,"start":0,"end":1},"search_min":46.51118390651422,"search_max":46.51118390651422,"unbalance":12,"n1":44,"n2":38,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-83-28-without3couplers-and-q23-q47-q64-q76-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,24,30,49,52,60,68,75,80,82,90,94,97]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 64, 72, 79, 87, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 70, 78, 71, 63, 55, 62, 54, 61, 53, 46, 39, 32, 40, 47, 38, 45, 31, 23, 16, 8, 15, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ],
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010010010"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101101101"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_1111011111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,64,72,79,87,86,93,85,92,84,91,83,76,69,77,70,78,71,63,55,62,54,61,53,46,39,32,40,47,38,45,31,23,16,8,15,10,2],"lengthInfo":{"length":49.5,"cut":56,"wedge":0,"DCD":6,"start":0,"end":1},"search_min":50.713132377351045,"search_max":50.713132377351045,"unbalance":14,"n1":45,"n2":38,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-83-28-without4couplers-and-q23-q47-q64-q76-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,24,30,49,52,60,68,75,80,82,90,94,97]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 64, 72, 79, 87, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 70, 78, 71, 63, 55, 62, 54, 61, 53, 46, 39, 32, 40, 47, 38, 45, 31, 23, 16, 8, 15, 10, 2]",
    "depth": "28",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ],
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010010010"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101101101"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_1111011111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,64,72,79,87,86,93,85,92,84,91,83,76,69,77,70,78,71,63,55,62,54,61,53,46,39,32,40,47,38,45,31,23,16,8,15,10,2],"lengthInfo":{"length":49.5,"cut":56,"wedge":0,"DCD":6,"start":0,"end":1},"search_min":50.713132377351045,"search_max":50.713132377351045,"unbalance":14,"n1":45,"n2":38,"pattern":["IJKLKLIJ","IJKL"]}

## Zu3-72-34

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "12",
    "use00": true,
    "brokenBits": "[0,7,22,24,30,52,60,68,75,80,82,49,76,83,84,87,88,89]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 64, 72, 79, 86, 78, 85, 77, 70, 63, 71, 55, 62, 69, 61, 54, 47, 40, 32, 39, 46, 53, 45, 38, 31, 23, 16, 8, 15, 10, 3, 2]",
    "depth": "34",
    "searchPattern": "01232301",
    "errorRates": "[0.0009,0.0038,0.014]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010010010"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101101101"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_1111011111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,64,72,79,86,78,85,77,70,63,71,55,62,69,61,54,47,40,32,39,46,53,45,38,31,23,16,8,15,10,3,2],"lengthInfo":{"length":54.5,"cut":61,"wedge":0,"DCD":4,"start":0,"end":5},"search_min":55.51118390651422,"search_max":55.51118390651422,"unbalance":12,"n1":39,"n2":33,"pattern":["IJKLKLIJ","IJKL"]}

## Zu3-72-36

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "12",
    "use00": true,
    "brokenBits": "[0,7,22,24,30,52,60,68,75,80,82,49,76,83,84,87,88,89]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 64, 72, 79, 86, 78, 85, 77, 70, 63, 71, 55, 62, 69, 61, 54, 47, 40, 32, 39, 46, 53, 45, 38, 31, 23, 16, 8, 15, 10, 2]",
    "depth": "36",
    "searchPattern": "01232301",
    "errorRates": "[0.0009,0.0038,0.014]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010010010"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101101101"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_1111011111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ],
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,64,72,79,86,78,85,77,70,63,71,55,62,69,61,54,47,40,32,39,46,53,45,38,31,23,16,8,15,10,2],"lengthInfo":{"length":58.5,"cut":63,"wedge":0,"DCD":4,"start":0,"end":1},"search_min":59.043731420625164,"search_max":59.043731420625164,"unbalance":8,"n1":38,"n2":34,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-83-30-without4couplers-and-q23-q47-q64-q76-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,24,30,49,52,60,68,75,80,82,90,94,97]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 64, 72, 79, 87, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 70, 78, 71, 63, 55, 62, 54, 61, 53, 46, 39, 32, 40, 47, 38, 45, 31, 23, 16, 8, 15, 10, 2]",
    "depth": "30",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ],
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010010010"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101101101"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_1111011111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,64,72,79,87,86,93,85,92,84,91,83,76,69,77,70,78,71,63,55,62,54,61,53,46,39,32,40,47,38,45,31,23,16,8,15,10,2],"lengthInfo":{"length":50.5,"cut":58,"wedge":0,"DCD":7,"start":0,"end":1},"search_min":51.713132377351045,"search_max":51.713132377351045,"unbalance":14,"n1":45,"n2":38,"pattern":["IJKLKLIJ","IJKL"]}

## Zuchongzhi-83-32-without4couplers-and-q23-q47-q64-q76-q88

```json
{
    "type": "prog",
    "xsize": "15",
    "ysize": "13",
    "use00": true,
    "brokenBits": "[0,7,22,24,30,49,52,60,68,75,80,82,90,94,97]",
    "part1": "[1, 9, 17, 25, 33, 41, 48, 56, 64, 72, 79, 87, 86, 93, 85, 92, 84, 91, 83, 76, 69, 77, 70, 78, 71, 63, 55, 62, 54, 61, 53, 46, 39, 32, 40, 47, 38, 45, 31, 23, 16, 8, 15, 10, 2]",
    "depth": "32",
    "searchPattern": "01232301",
    "errorRates": "[0.001,0.004,0.015]",
    "removedEntrances": "[]",
    "balancedRange": 24,
    "search": "notprune",
    "generatingCircuit": [
        {
            "type": "generatingCircuitNone"
        }
    ],
    "showMark": [
        {
            "type": "markQi"
        }
    ],
    "showPattern": [
        {
            "type": "patternDefine",
            "pattern": "I",
            "bitString": "0_000010010010"
        },
        {
            "type": "patternDefine",
            "pattern": "J",
            "bitString": "0_111101101101"
        },
        {
            "type": "patternDefine",
            "pattern": "K",
            "bitString": "1_000010000000"
        },
        {
            "type": "patternDefine",
            "pattern": "L",
            "bitString": "1_1111011111111"
        },
        {
            "type": "patternA",
            "pattern": "I",
            "color": "#ff9900"
        },
        {
            "type": "patternA",
            "pattern": "J",
            "color": "#3333ff"
        },
        {
            "type": "patternC",
            "pattern": "K",
            "color": "#009900"
        },
        {
            "type": "patternC",
            "pattern": "L",
            "color": "#cc0000"
        }
    ]
}
```

"IJKLKLIJ":{"split":[1,9,17,25,33,41,48,56,64,72,79,87,86,93,85,92,84,91,83,76,69,77,70,78,71,63,55,62,54,61,53,46,39,32,40,47,38,45,31,23,16,8,15,10,2],"lengthInfo":{"length":54,"cut":64,"wedge":0,"DCD":7,"start":0,"end":6},"search_min":55.213132377351045,"search_max":55.213132377351045,"unbalance":14,"n1":45,"n2":38,"pattern":["IJKLKLIJ","IJKL"]}