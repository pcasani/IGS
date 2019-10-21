"use strict";

const {Buffer} = require("safe-buffer");

/**
 * TODO token validation with Google Cloud Endpoints
 * @param req
 * @param res
 */
exports.authInfoHandler = function (req, res) {
    let authUser = {id: "anonymous"};
    const encodedInfo = req.get("X-Endpoint-API-UserInfo");

    if (encodedInfo) {
        authUser = JSON.parse(Buffer.from(encodedInfo, "base64"));
    }
    res
        .status(200)
        .json(authUser)
        .end();
};

/**
 * TODO token handle of payload with Google Cloud Endpoints
 * @param req
 * @param res
 */
exports.handleBodyMessage = function (req, res) {
    res
        .status(200)
        .json({message: req.body.message})
        .end();
};
