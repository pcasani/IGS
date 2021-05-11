"use strict";

/* jslint unparam: true */

const request = require('request');
const {Buffer} = require('safe-buffer');

const networkStatusAddress = process.env.NETWORK_STATUS;
const microServicesAuthorizationKey = process.env.MS_AUTHORIZATION_KEY;
const microServicesAuthorizationValue = process.env.MS_AUTHORIZATION_VALUE;

const apiKeyCode = Buffer.from(`${microServicesAuthorizationKey}: ${microServicesAuthorizationValue}`).toString('base64');

/**
 * Get network device stats
 * @param req
 * @param res
 */
exports.getNetworkDeviceMetrics = function (req, res) {

    const orgId = req.body.user.organisation_id;
    const {deviceId} = req.params;
    const jwtToken = req.headers.authorization;

    request.get(`${networkStatusAddress}/api/v1/orgs/${orgId}/devices/${deviceId}/metrics`, {json: true})
        .auth(false, false, true, jwtToken)
        .headers(apiKeyCode)
        .on("response", function (response) {
            console.log(response.statusCode);
            res.send({
                success: "true",
                message: "Network device stats data retrieved successfully",
                health: response
            });
        })
        .on("error", function () {
            res.statusCode();
        });
};

/**
 * Get Network device status
 * @param req
 * @param res
 */
exports.getNetworkDeviceStatus = function (req, res) {

    const {orgId} = req.params;
    const jwtToken = req.headers.authorization;

    request.get(`${networkStatusAddress}/api/v1/orgs/${orgId}/status`, {json: true})
        .auth(false, false, true, jwtToken)
        .headers(apiKeyCode)
        .on("response", function (response) {
            console.log(response.statusCode);
            res.send({
                success: "true",
                message: "Network device status retrieved successfully",
                health: response
            });
        })
        .on("error", function () {
            res.statusCode();
        });
};
