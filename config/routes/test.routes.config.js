"use strict";
/* jslint es6 */

const NetworkHealth = require("../../src/api/nms/controllers/nms.controller");
const Organizations = require("../../src/api/versa-service/controllers/versa.service.controller");

const VerityUser = require("../../src/middleware/validation/auth.token.ums.js");
const InitializeToken = require("../../src/middleware/authentication/auth.initialize.token.js");

exports.routesConfig = function (app) {
    /**
     *  Retrieves network status from NMS
     */
    app.get("/api/v1/networkstatus/health/local/test", [
        NetworkHealth.getStatusTest
    ]);

    /**
     * Retrieves organisations from Versa Server
     */
    app.get("/api/v1/organisations/open", [
        Organizations.retrieveOrganizationSingle
    ]);

    /**
     * Retrieves organisations from Versa Server (without token)
     */
    app.get("/api/v1/organisations/open", [
        Organizations.retrieveOrganization
    ]);

    /**
     * Retrieves organisations from Versa Server with token
     */
    app.get("/api/v1/organisations", [
        AuthTokenUMS.displayJWT,
        Organizations.retrieveOrganizations
    ]);

    /**
     * Retrieves network models version with token
     */
    app.get("/api/v1/networkstatus/models/version", [
        AuthTokenUMS.displayJWT,
        NetworkHealth.getModelVersion
    ]);

    /**
     * Retrieves network status with token
     */
    app.get("/api/v1/networkstatus/healthTest", [
        AuthTokenUMS.displayJWT,
        NetworkHealth.getNetworkStatus
    ]);
};
