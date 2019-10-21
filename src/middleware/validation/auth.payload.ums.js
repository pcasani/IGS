'use strict';

const claimsSchema = require("../../../util/token/ums.claims.schema");

const Joi = require('joi');

/**
 * Validation of token claims
 * Uses the Joi module
 * @param req
 * @param res
 * @param next
 * @returns {*|void|boolean}
 */
exports.validatePayloadClaims = function (req, res, next) {
    if (req.jwt) {

        const result = Joi.validate(req.jwt, claimsSchema);

        if (result.error !== null) {
            console.log('NOT VALID request');

        } else {
            res.json({message: 'Resource created', data: req.jwt});
            console.log('VALID request');
            next();

        }
    } else {
        return res.status(400).send({errors: 'JWT data missing'});
    }
};

/**
 * Checks the validity of individual claims
 * @param req
 * @param res
 * @param next
 * @returns {*}
 */
exports.checkTokenExpiration = function (req, res, next) {

    /**
     * Check on inspiration date
     * @type {number | registered_claims_schema.exp | {isValid, message} | registeredClaimsSchema.exp}
     */
    let expiration = req.jwt.exp;

    /**
     * Other expiration parameters
     * @type {number | registered_claims_schema.iat | {isValid, message} | registeredClaimsSchema.iat}
     * TODO
     */
    let issuedAt = req.jwt.iat;
    let audience = req.jwt.aud;

    let dateNow = new Date();
    let isExpiredToken = expiration < dateNow.getTime() / 1000;

    // Check expiry date
    if (isExpiredToken) {
        return res.status(400).send({errors: 'Token is expired'});
    } else {
        console.log('Token NOT EXPIRED')
        next();
    }
};

