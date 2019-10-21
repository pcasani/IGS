"use strict";

/* jslint unparam: true */

const request = require('request');
const {Buffer} = require('safe-buffer');

// Used for SSL
// const fs = require("fs");

const organisationAddress = process.env.NETWORK_STATUS;
const microServicesAuthorizationKey = process.env.MS_AUTHORIZATION_KEY;
const microServicesAuthorizationValue = process.env.MS_AUTHORIZATION_VALUE;

const apiKeyCode = Buffer.from(`${microServicesAuthorizationKey}: ${microServicesAuthorizationValue}`).toString('base64');

/**
 * Retrieves network device metrics
 * @param req
 * @param res
 */
exports.getOrganisationId = function (req, res) {

    const orgName = req.body.organisation;

    request.get(`${organisationAddress}/api/v1/orgs/${orgName}`, {json: true})
        .headers(apiKeyCode)
        .on("response", function (response) {
            console.log(response.statusCode);
            res.send({
                success: "true",
                message: "Organisation data retrieved successfully",
                health: response
            });
        })
        .on("error", function () {
            res.statusCode();
        });
};

// 20190913: temporarily commented out until implementation is clear
// Adds SSL
// exports.getNetworkDeviceMetrics = function (req, res) {
//
//     const {orgId, deviceId} = req.params;
//
//     request.get(
//         {
//             request.get(`${organisationAddress}/api/v1/orgs/${orgName}`, {json: true})
//             agentOptions: {
//                 key: fs.readFileSync("../../../../config/env/key.pem"),
//                 cert: fs.readFileSync("../../../../config/env/chain.pem")
//             },
//             json: true
//         }
//     )
//         .headers(apiKeyCode)
//         .on("response", function (response) {
//             console.log(response.statusCode);
//             res.send({
//                 success: "true",
//                 message: "Network device groups data retrieve successfully",
//                 health: response
//             });
//         })
//         .on("error", function () {
//             res.statusCode();
//         });
// };
