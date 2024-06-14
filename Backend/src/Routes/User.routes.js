const express = require("express");

// DEPENDENCY FUNCTION IMPORTS
const {
    createUser,
    updateUser,
    getUser,
} = require("../Controller/User.controller");

//MIDDLEWARE FUNCTION IMPORTS
const { firstMiddleware } = require("../Middleware/auth.middleware");

// CREATING ROUTES
const userRouter = express.Router();

// POST ROUTE
userRouter.post("/create-user", firstMiddleware, createUser);

// PATCH ROUTE
userRouter.patch("/update-user/:userId", firstMiddleware, updateUser);

// GET ROUTE
userRouter.get("/get-user", firstMiddleware, getUser);

module.exports = { userRouter };
