const jwt = require("jsonwebtoken");
const dotenv = require("dotenv");
dotenv.config();

const firstMiddleware = async (req, res, next) => {
    try {
        const decode = jwt.verify(
            req.headers.authorization,
            process.env.JWT_SECRET_KEY
        );
        req.body.authId = decode.authId;

        next();
    } catch (error) {
        console.log("Error From Auth Middleware");
        console.log(error.message);
    }
};

module.exports = { firstMiddleware };
