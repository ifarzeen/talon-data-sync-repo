let response = {
    "data": [
    {
        "id": 170,
        "created": "2023-10-13T16:50:38.255445Z",
        "userId": 42,
        "rules": [
            {
                "id": "2c24d635-f756-4790-9175-0e2ce4a33962",
                "title": "Farzeen testing",
                "condition": [
                    "always"
                ],
                "effects": [
                    [
                        "catch",
                        [
                            "noop"
                        ],
                        [
                            "setDiscount",
                            [
                                "concat",
                                "10% off"
                            ],
                            [
                                "*",
                                [
                                    ".",
                                    "Session",
                                    "Total"
                                ],
                                [
                                    "/",
                                    10,
                                    100
                                ]
                            ],
                            [
                                "kv"
                            ]
                        ]
                    ]
                ]
            }
        ],
        "bindings": [],
        "rbVersion": "v2",
        "campaignId": 79
    }
    ],
"totalResultSize": 6
}

module.exports= {response}