"use strict";

const InvalidationModel = require('./model/invalidation.model');

/**
 * Check that the field is present
 * @param req
 * @param res
 * @param next
 * @returns {*|boolean|void}
 */
exports.hasInvalidationValue = function (req, res, next) {
    let errors = [];

    if (req.body) {
        if (!req.body.jti) {
            errors.push('Missing jti field');
        }
        if (errors.length) {
            return res.status(400).send({errors: errors.join(',')});
        } else {
            return next();
        }
    } else {
        return res.status(400).send({errors: 'Missing values value from body'});
    }
};

/**
 * Does the invalidation
 * Retrieves Jti value from the Datastore
 * @param req
 * @param res
 */
exports.doTokenInvalidation = function (req, res, next) {
    InvalidationModel.findByJti(req.params.attributes.jti)
        .then((invalidation) => {
            if (!invalidation[0]) {
                res.status(404).send({});
            } else {
                let jti = req.params.attributes.jti;
                if (InvalidationPubSub === jti) {
                    return res.status(400).send({errors: ['Invalid token']});
                } else {
                    return next();
                }
            }
        });
};

