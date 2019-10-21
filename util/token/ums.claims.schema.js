const Joi = require('joi');

/**
 * Claims validation schema
 * Uses Joi
 */
const claimsSchema = Joi.object({
    userUMSTest: Joi.object().required(),
    iss: Joi.string().min(2).max(50).required(),
    sub: Joi.string().min(2).max(50).required(),
    aud: Joi.string().min(2).max(50).required(),
    iat: Joi.number().integer().required(),
    jti: Joi.string().min(2).max(50).required(),
    exp: Joi.number().integer().required()
});

module.exports = claimsSchema;
