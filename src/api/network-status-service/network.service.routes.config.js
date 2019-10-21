"use strict";

const AuthTokenUMS = require("../../middleware/validation/auth.token.ums");
const AuthPayloadUMS = require("../../middleware/validation/auth.payload.ums");
const NetworkModelService = require("./controllers/network.status.controller");
const InvalidateToken = require("../../middleware/invalidation/invalidation.controller");

exports.routesConfig = function (app, router) {

    app.use("/api/v1/nss", router);

    /**
     * Retrieves device metrics from Network Model Services
     */
    router.get("/devices/:deviceId/metrics", [
        AuthTokenUMS.validateTokenUMS,
        AuthPayloadUMS.validatePayloadClaims,
        AuthPayloadUMS.checkTokenExpiration,
        InvalidateToken.hasInvalidationValue,
        InvalidateToken.doTokenInvalidation,
        NetworkModelService.getNetworkDeviceMetrics
    ]);

    /**
     * Retrieves device stats flow from Network Model Services
     */
    router.get("/orgs/:orgId/devices/status", [
        AuthTokenUMS.validateTokenUMS,
        AuthPayloadUMS.validatePayloadClaims,
        AuthPayloadUMS.checkTokenExpiration,
        InvalidateToken.hasInvalidationValue,
        InvalidateToken.doTokenInvalidation,
        NetworkModelService.getNetworkDeviceStatus
    ]);

};