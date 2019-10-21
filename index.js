"use strict";

const dotenv = require("dotenv/config");
const configPort = process.env.PORT;

// [START setup]
const express = require("express");
const app = express();
const router = new express.Router();
const bodyParser = require("body-parser");

// Adds SSL
// const https = require("https");
// const fs = require("fs");
//
// const options = {
//     key: fs.readFileSync("./config/env/key.pem"),
//     cert: fs.readFileSync("./config/env/chain.pem")
// };

// Test routes
const TestRouter = require("./config/routes/test.routes.config");
const ServicesRouter = require("./config/routes/general.routes.config");

const VersaRouter = require("./src/api/versa-service/versa.routes.config");
const NmsRouter = require("./src/api/nms/nms.routes.config");
const NetworkStatusRouter = require("./src/api/network-status-service/network.service.routes.config");

app.set("case sensitive routing", true);
app.use(bodyParser.json());
//[END setup]

TestRouter.routesConfig(app);
ServicesRouter.routesConfig(app);

VersaRouter.routesConfig(app, router);
NmsRouter.routesConfig(app, router);
NetworkStatusRouter.routesConfig(app, router);

// Adds SSL
// https.createServer(options, app).listen(configPort);
//
// if (module === require.main) {
//     https.createServer(options, app).listen(configPort, function () {
//         console.log("server running on port %s", configPort);
//     });
// }

if (module === require.main) {
    app.listen(configPort, function () {
        console.log("server running on port %s", configPort);
    });
}