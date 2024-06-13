const express = require("express");
const {
    createEducation,
    getEducation,
} = require("../Controller/Education.controller");
const { firstMiddleware } = require("../Middleware/auth.middleware");

const educationRoutes = express.Router();

educationRoutes.post("/create-education", firstMiddleware, createEducation);
educationRoutes.get("/get-education", firstMiddleware, getEducation);

module.exports = { educationRoutes };
