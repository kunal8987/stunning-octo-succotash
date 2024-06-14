const express = require("express");

// DEPENDENCY FUNCTION IMPORTS
const {
    registerUser,
    loginUser,
    resetPassword,
} = require("../Controller/Auth.controller");

// CREATING ROUTES
const authRouter = express.Router();

// POST ROUTE FOR REGISTER
authRouter.post("/register", registerUser);

// POST ROUTE FOR LOGIN
authRouter.post("/login", loginUser);

// POST ROUTE FOR RESET PASSWORD
authRouter.post("/reset-password", resetPassword);

module.exports = { authRouter };
