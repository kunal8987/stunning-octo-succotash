const { Work } = require("../Model/WorkExpreiance.model");

// CREATE WORK FUNCTION
const createWork = async (req, res, next) => {
    try {
        // ADDING WORK TO DATABASE
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

// GET WORK FUNCTION
const getWork = async (req, res, next) => {
    try {
        // FINDING DATA IN DATABASE
        let work = await Work.find({ authId: req.body.authId });

        // VALIDATE
        if (!work) {
            return res.status(400).send({
                success: false,
                message: "Work Experience Not Found",
            });
        }

        return res.status(201).send({
            success: true,
            message: "Work Experience Found Successfully",
            count: work.length,
            work,
        });
    } catch (error) {
        console.log("Error From Get Work Controller");
        next(error);
    }
};

// UPDATE WORK FUNCTION
const updateWork = async (req, res, next) => {
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
        let work = await Work.findById({ _id: id });

        // AUTHENTICATE THE USER WITH THE DATA
        if (req.body.authId !== work.authId) {
            res.status(401).send({
                success: false,
                message: "You Are Not A Authorize Person To Do This Action",
            });
        } else {
            // UPDATING
            let updatedWork = await Work.findByIdAndUpdate(
                { _id: id },
                req.body,
                {
                    new: true,
                }
            );

            return res.status(200).send({
                success: true,
                message: "Work Updated successfully",
                updatedWork,
            });
        }
    } catch (error) {
        console.log("Error From Update Work Controller");
        next(error);
    }
};

// DELETE WORK FUNCTION
const deleteWork = async (req, res, next) => {
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
        let work = await Work.findById({ _id: id });

        // AUTHENTICATE THE USER WITH THE DATA
        if (req.body.authId !== work.authId) {
            res.status(401).send({
                success: false,
                message: "You Are Not A Authorize Person To Do This Action",
            });
        } else {
            // DELETING
            await Work.findByIdAndDelete({ _id: id });

            return res.status(200).send({
                success: true,
                message: "Work Deleted successfully",
            });
        }
    } catch (error) {
        console.log("Error From Update Work Controller");
        next(error);
    }
};

module.exports = { createWork, getWork, updateWork, deleteWork };
