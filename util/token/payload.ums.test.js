module.exports = {
    "user": {
        "id": 3,
        "email": "luke.csn@hotmail.co.uk",
        "given_name": "Demo",
        "family_name": "Test.03",
        "access_type": "SERVICE",
        "organisation": "Organization One",
        "organisation_id": 1,
        "application": "igs-local",
        "permissions": {
            "application": {
                "users": {
                    "SLF": [
                        "R",
                        "U"
                    ]
                }
            },
            "application-staging": {
                "devices": {
                    "GBL": [
                        "C",
                        "R",
                        "U"
                    ],
                    "ORG": [
                        "D"
                    ]
                },
                "names": {
                    "GBL": [
                        "C",
                        "R",
                        "U"
                    ],
                    "ORG": [
                        "D"
                    ]
                },
                "firewall": {
                    "GBL": [
                        "C",
                        "R",
                        "U"
                    ],
                    "ORG": [
                        "D"
                    ]
                },
                "policies": {
                    "GBL": [
                        "C",
                        "R",
                        "U"
                    ],
                    "ORG": [
                        "D"
                    ]
                }
            }
        }
    },
    "iss": "test-iss",
    "iat": 1568718470,
    "exp": 1568754470,
    "nbf": 1568718470,
    "jti": "1234567890",
    "sub": "user",
    "aud": "igs-local",
};