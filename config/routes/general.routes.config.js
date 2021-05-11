"use strict";

const AuthTokenGoogle = require("../../src/middleware/validation/auth.token.google.js")
const VerityUser = require("../../src/middleware/validation/auth.token.ums.js");
const InitializeToken = require("../../src/middleware/authentication/auth.initialize.token.js");

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



