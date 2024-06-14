const express = require("express");

// DEPENDENCY FUNCTION IMPORTS
const {
    createEducation,
    getEducation,
    editEducation,
    deleteEducation,
} = require("../Controller/Education.controller");

//MIDDLEWARE FUNCTION IMPORTS
const { firstMiddleware } = require("../Middleware/auth.middleware");

// CREATING THE ROUTES
const educationRoutes = express.Router();

//POST ROUTES
educationRoutes.post("/create-education", firstMiddleware, createEducation);

//GET ROUTES
educationRoutes.get("/get-education", firstMiddleware, getEducation);

//PATCH ROUTES
educationRoutes.patch("/update-education/:id", firstMiddleware, editEducation);

//DELETE ROUTES
educationRoutes.delete(
    "/delete-education/:id",
    firstMiddleware,
    deleteEducation
);

module.exports = { educationRoutes };
