"use strict";

const jwt = require("jsonwebtoken");

/**
 * Local storing of token constrains
 * @type {string}
 */
const secretKey = process.env.JWT_SECRET;

    /**
 * Checks the rendering of the json data in token
 * @param req
 * @param res
 * @param next
 */
exports.validateTokenUMS = function (req, res, next) {
    let authorization = req.headers.authorization;

    if (authorization) {

        //console.log(`Authorization: ${authorization}`);

        let bearerKey = authorization.split(" ")[0];
        let token = authorization.split(" ")[1];

        try {
            if (bearerKey === 'Bearer') {
                req.jwt = jwt.verify(token, secretKey);
                return next();
            }
        } catch (err) {
            return res.status(403).send();
        }
    } else {
        return res.status(401).send();
    }
};

/**
 * Displays the json data in token (testing purposes)
 * @param req
 * @param res
 * @param next
 * @returns {*|void}
 */
exports.displayJWT = function (req, res) {
    try {
        let token = req.headers.authorization.split(" ")[1];
        jwt.verify(token, secretKey, function (err, authData) {
            if (err) {
                return res.sendStatus(403);
            } else {
                console.log(secretKey);
                console.log(token);
                res.json({
                    message: "Post created...",
                    authData
                });
            }
        });
    } catch (err) {
        return res.sendStatus(403);
    }
};
