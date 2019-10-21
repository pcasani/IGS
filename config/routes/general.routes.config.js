"use strict";

const AuthTokenGoogle = require("../../src/middleware/validation/auth.token.google.js");

//const AuthTokenUMS = require("../../src/middleware/validation/auth.token.ums.js");
//const AuthPayloadUMS = require("../../src/middleware/validation/auth.payload.ums.js");

const VerityUser = require("../../src/middleware/validation/auth.token.ums.js");
const InitializeToken = require("../../src/middleware/authentication/auth.initialize.token.js");

/**
 * Retrieve userLocalTest permissions
 * TODO
 * //const PermissionUser = require("../src/authorization/controllers/permissions.user.test.jst.js");
 */

exports.routesConfig = function (app) {

    /**
     *  Simple echo call
     */
    app.post("/api/v1/echo", [
        AuthTokenGoogle.handleBodyMessage
    ]);

    /**
     * Creates sample token (used for local testing)
     */
    app.post("/api/v1/auth", [
        //InitializeToken.createToken
        InitializeToken.createTokenSetClaims
    ]);

    /**
     * Retrieves token (used for local testing)
     */
    app.post("/api/v1/posts", [
        VerityUser.displayJWT
    ]);


};



