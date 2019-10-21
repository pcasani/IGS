const jwt = require("jsonwebtoken");

const user = require("../../../util/token/user.ums.test");
const tokenPayload = require("../../../util/token/payload.ums.test");

/**
 * Local storing of token constrains
 * @type {string}
 */
const secretKey = process.env.JWT_SECRET;
const JwtExpiration = process.env.JWT_EXPIRATION;

/**
 * Local data structure with JWT token claims
 */
const tokenClaims = require('../../../util/token/token.claims.test');

/**
 * Creates a sample JWT tokens setting claims
 * @param req
 * @param res
 * @returns {Promise<void>}
 * exp and ia take only  NumericDate values
 * NumericDate is defined as the number of seconds (not milliseconds) since Epoch
 */
exports.createTokenSetClaims = async function (req, res) {
    jwt.sign({
        iss: tokenClaims.iss,
        sub: tokenClaims.sub,
        aud: tokenClaims.aud,
        // exp: tokenClaims.exp, // must set correct expiration date in NumericData
        iat: tokenClaims.iat,
        jti: tokenClaims.jti,
        user
    }, secretKey, function (err, token) {
        console.log(token);
        res.json({
            token
        });
    });
};


/**
 * Creates a sample JWT tokens using UMS token
 * @param req
 * @param res
 * @returns {Promise<void>}
 */
exports.createToken = async function (req, res) {
    jwt.sign(user, secretKey, {expiresIn: JwtExpiration}, function (err, token) {
        console.log(token);
        res.json({
            token
        });
    });
};
