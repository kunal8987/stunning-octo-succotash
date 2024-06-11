const express = require("express");
const {
    createUser,
    updateUser,
    getUser,
} = require("../Controller/User.controller");

const { firstMiddleware } = require("../Middleware/auth.middleware");

const userRouter = express.Router();

userRouter.post("/create-user", firstMiddleware, createUser);
userRouter.patch("/update-user/:userId", firstMiddleware, updateUser);
userRouter.get("/get-user", firstMiddleware, getUser);

module.exports = { userRouter };
