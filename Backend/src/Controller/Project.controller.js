const { Project } = require("../Model/Project.model");

const addProject = async (req, res, next) => {
    try {
        let project = new Project(req.body);

        await project.save();

        return res.status(201).send({
            success: true,
            message: "Project saved successfully",
            project,
        });
    } catch (error) {
        console.log("error form add project controller");
        next(error);
    }
};

const getProject = async (req, res, next) => {
    try {
        let project = await Project.find({ authId: req.body.authId });

        if (!project) {
            return res.status(401).send({
                success: false,
                message: "Project not found",
            });
        }

        return res.status(201).send({
            success: true,
            message: "Project found successfully",
            project,
        });
    } catch (error) {
        console.log("error form get project controller");
        next(error);
    }
};

const updateProject = async (req, res, next) => {
    try {
        let { id } = req.params;

        if (!id) {
            return res.status(401).send({
                success: false,
                message: "please provide ID",
            });
        }

        let project = await Project.findById({ _id: id });

        if (req.body.authId !== project.authId) {
            return res.status(401).send({
                success: false,
                message: "you are not the authorized person to do this action ",
            });
        } else {
            let updateProject = await Project.findByIdAndUpdate(
                { _id: id },
                req.body,
                { new: true }
            );

            return res.status(200).send({
                success: true,
                message: "Project updated successfully",
                updateProject,
            });
        }
    } catch (error) {
        console.log("error form update project controller");
        next(error);
    }
};

const deleteProject = async (req, res, next) => {
    try {
        let { id } = req.params;

        if (!id) {
            return res.status(401).send({
                success: false,
                message: "please provide ID",
            });
        }

        let project = await Project.findById({ _id: id });

        if (req.body.authId !== project.authId) {
            return res.status(401).send({
                success: false,
                message: "you are not the authorized person to do this action ",
            });
        } else {
            await Project.findByIdAndDelete({ _id: id });

            return res.status(200).send({
                success: true,
                message: "Project deleted successfully",
            });
        }
    } catch (error) {
        console.log("error form delete project controller");
        next(error);
    }
};

module.exports = { addProject, getProject, updateProject, deleteProject };
