const express = require("express");
const { firstMiddleware } = require("../Middleware/auth.middleware");
const { createWork } = require("../Controller/Workexperiance.controller");
const workRoute = express.Router();

workRoute.post("/create-work", firstMiddleware, createWork);

module.exports = { workRoute };
