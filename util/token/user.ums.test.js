const userUmsTest = {
    "id": 1,
    "username": "heathrow@heathrow.com",
    "email": "heathrow@heathrow.com",
    "firstname": "Heathrow",
    "lastname": "User",
    "access_type": "internal",
    "organization": "VMB",
    "application": "application",
    "twoFactorAuthEnabled": false,
    "twoFactorAuthEnforced": false,
    "twoFactorAuthSecret": "",
    "group": {
        "id": 2,
        "handle": "external"
    },
    "roles": {
        "5": [
            "SwarmDashboard User",
            "Cognos Reporting",
            "Captive Portal Page Editor",
            "Captive Portal Page Scheduler",
            "Registrations Viewer",
            "Campaign Manager",
            "Message Reader"
        ]
    },
    "permissions":
        {
            "ums":
                {
                    "users":
                        {
                            "self":
                                ["r", "u"]
                        }
                }
            ,
            "application":
                {
                    "devices":
                        {
                            "gbl":
                                ["c", "r", "u"],
                            "org":
                                ["d"]
                        }
                    ,
                    "names":
                        {
                            "gbl":
                                ["c", "r", "u"],
                            "org":
                                ["d"]
                        }
                    ,
                    "firewall":
                        {
                            "gbl":
                                ["c", "r", "u"],
                            "org":
                                ["d"]
                        }
                    ,
                    "policies":
                        {
                            "gbl":
                                ["c", "r", "u"],
                            "org":
                                ["d"]
                        }
                }
        }

};

module.exports = userUmsTest;
