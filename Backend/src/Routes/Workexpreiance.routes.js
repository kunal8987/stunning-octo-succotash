const express = require("express");

// MIDDLEWARE FUNCTION IMPORTS
const { firstMiddleware } = require("../Middleware/auth.middleware");

//DEPENDENCY FUNCTION IMPORTS
const {
    createWork,
    getWork,
    updateWork,
    deleteWork,
} = require("../Controller/Workexperiance.controller");

// CREATING ROUTES
const workRoute = express.Router();

// POST ROUTE
workRoute.post("/create-work", firstMiddleware, createWork);

// GET ROUTE
workRoute.get("/get-work", firstMiddleware, getWork);

//PATCH ROUTE
workRoute.patch("/update-work/:id", firstMiddleware, updateWork);

// DELETE ROUTE
workRoute.delete("/delete-work/:id", firstMiddleware, deleteWork);

module.exports = { workRoute };
