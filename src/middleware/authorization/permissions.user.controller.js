module.exports = {
    validateAuthorization,
    handlePayload
};

/**
 * TODO implement user type permissions - validate authorization
 * @param roles
 * @returns {Promise<Function[]>}
 */
async function validateAuthorization(roles = []) {
    if (typeof roles === "string") {
        roles = [roles];
    }
    return [
        // authorize based on userLocalTest role
        function (req, res, next) {
            if (roles.length && !roles.includes(req.user.role)) {

                // userLocalTest"s role is not authorized
                return res.status(401).json({message: "Unauthorized"});
            }
            // authorization successful
            next();
        }
    ];
}

/**
 * TODO implement user type permissions - check authorization values in payload
 * @param req
 * @param res
 * @param next
 */
function handlePayload(req, res, next) {
    const bearerBody = req.body["user"];
    const bearerHeader = req.header;

    if (typeof bearerHeader !== "undefined") {
        const bearer = bearerHeader.split(" ");
        const bearerToken = bearer[1];
        req.token = bearerToken;

        // handle permissions
        next();
    } else {
        // Forbidden
        res.sendStatus(403);
    }
}