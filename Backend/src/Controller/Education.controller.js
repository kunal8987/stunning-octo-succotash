const { Education } = require("../Model/Education.model");

// CREATE EDUCATION FUNCTION
const createEducation = async (req, res, next) => {
    try {
        //ADDING EDUCATION
        let newEducation = new Education(req.body);

        await newEducation.save();

        return res.status(201).send({
            success: true,
            message: "Education saved successfully",
            newEducation,
        });
    } catch (error) {
        console.log("error Form Create Education Controller");
        next(error);
    }
};

// GET EDUCATION FUNCTION
const getEducation = async (req, res, next) => {
    try {
        // FINDING DATA IN DATABASE
        let education = await Education.find({ authId: req.body.authId });

        // VALIDATION
        if (!education) {
            return res.status(404).send({
                success: false,
                message: "Education Not Found",
            });
        }

        return res.status(200).send({
            success: true,
            message: "Education Found successfully",
            count: education.length,
            education,
        });
    } catch (error) {
        console.log("error Form Get Education Controller");
        next(error);
    }
};

// EDIT EDUCATION FUNCTION
const editEducation = async (req, res, next) => {
    try {
        // GET ID
        let { id } = req.params;

        // VALIDATE ID
        if (!id) {
            return res.status(404).send({
                success: false,
                message: "Please Provide ID",
            });
        }

        // FINDING DATA IN DATABASE
        let education = await Education.findById({ _id: id });

        // AUTHENTICATE THE USER WITH THE DATA
        if (req.body.authId !== education.authId) {
            res.status(401).send({
                success: false,
                message: "You Are Not A Authorize Person To Do This Action",
            });
        } else {
            // UPDATING
            let updateEducation = await Education.findByIdAndUpdate(
                { _id: id },
                req.body,
                { new: true }
            );

            return res.status(200).send({
                success: true,
                message: "Education Updated successfully",
                updateEducation,
            });
        }
    } catch (error) {
        console.log("error Form Edit Education Controller");
        next(error);
    }
};

// DELETE EDUCATION FUNCTION
const deleteEducation = async (req, res, next) => {
    try {
        // VALIDATE ID
        if (!req.params.id) {
            return res.status(404).send({
                success: false,
                message: "Please Provide ID",
            });
        }

        // FINDING DATA IN DATABASE
        let education = await Education.findById({ _id: req.params.id });

        // AUTHENTICATE THE USER WITH THE DATA
        if (req.body.authId !== education.authId) {
            res.status(401).send({
                success: false,
                message: "You Are Not A Authorize Person To Do This Action",
            });
        } else {
            // DELETION
            await Education.findByIdAndDelete({ _id: req.params.id });

            return res.status(200).send({
                success: true,
                message: "Education Deleted successfully",
            });
        }
    } catch (error) {
        console.log("error Form Delete Education Controller");
        next(error);
    }
};

module.exports = {
    createEducation,
    getEducation,
    editEducation,
    deleteEducation,
};
