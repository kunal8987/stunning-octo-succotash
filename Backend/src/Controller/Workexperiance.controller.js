const { Work } = require("../Model/WorkExpreiance.model");

const createWork = async (req, res, next) => {
    try {
        let newWork = new Work(req.body);

        await newWork.save();

        return res.status(201).send({
            success: true,
            message: "Work Experience Created Successfully",
            newWork,
        });
    } catch (error) {
        console.log("Error From Create Work Controller");
        next(error);
    }
};

module.exports = { createWork };
