const { Education } = require("../Model/Education.model");

const createEducation = async (req, res, next) => {
    try {
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

const getEducation = async (req, res, next) => {
    try {
        let education = await Education.find({ authId: req.body.authId });
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

module.exports = { createEducation, getEducation };
