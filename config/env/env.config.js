module.exports = {
    server: {
        "port": 3600,
        "appEndpoint": "http://localhost:3600",
        "apiEndpoint": "http://localhost:3600"
    },
    jwt: {
        "jwtSecret": "Secre7",
        "jwtExpirationInSeconds": 3600000,
        "jwtSecretTmp": "foobarbaz",
        "jwtExpirationInSecondsTmp": 3600
    },
    mongoDatabase: {
        "host": "127.0.0.1",
        "db": "pubsub"
    },
    microServices: {
        "nms": "",
        "versaService": "",
        "networkStatus": ""
    },
    userPermissionLevels: {
        "publicUser": 1,
        "privateUser": 4,
        "admin": 2048
    },
};
