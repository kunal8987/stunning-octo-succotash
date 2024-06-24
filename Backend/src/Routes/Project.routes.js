const express = require("express");
const {
    addProject,
    getProject,
    updateProject,
    deleteProject,
} = require("../Controller/Project.controller");
const { firstMiddleware } = require("../Middleware/auth.middleware");
const projectRouter = express.Router();

projectRouter.post("/add-project", firstMiddleware, addProject);
projectRouter.get("/get-project", firstMiddleware, getProject);
projectRouter.patch("/update-project/:id", firstMiddleware, updateProject);
projectRouter.delete("/delete-project/:id", firstMiddleware, deleteProject);

module.exports = { projectRouter };
