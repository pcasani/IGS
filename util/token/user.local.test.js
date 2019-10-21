const userLocalTest = {
    "id": 1,
    "email": "john@hotmail.com",
    "given_name": "John",
    "family_name": "Brown",
    "access_type": "internal",
    "organization": "VMB",
    "application": "application",
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

export default userLocalTest;
