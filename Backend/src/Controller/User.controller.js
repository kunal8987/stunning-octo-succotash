const { User } = require("../Model/User.model");

// CREATE USER FUNCTION
const createUser = async (req, res, next) => {
    try {
        // ADDING USER TO DATABASE
        let newUser = new User(req.body);

        await newUser.save();

        res.status(201).send({
            success: true,
            message: "User Created Successfully",
            newUser,
        });
    } catch (error) {
        console.log("Error From Create User Controller");
        next(error);
    }
};

// UPDATE USER FUNCTION
const updateUser = async (req, res, next) => {
    try {
        //GET ID
        let { userId } = req.params;

        // VALIDATE ID
        if (!userId) {
            return res.status(404).send({
                success: false,
                message: "Please Provide ID",
            });
        }

        // FINDING DATA IN THE DATABASE
        let user = await User.findOne({ _id: userId });

        // AUTHENTIC THE USER AND THE DATA
        if (req.body.authId !== user.authId) {
            res.status(401).send({
                success: false,
                message: "You Are Not A Authorize Person To Do This Action",
            });
        }

        // UPDATING
        let updatedUser = await User.findByIdAndUpdate(
            { _id: userId },
            req.body,
            { new: true }
        );

        res.status(201).send({
            success: true,
            message: "User Updated Successfully",
            updatedUser,
        });
    } catch (error) {
        console.log("Error From Update User Controller");
        next(error);
    }
};

// GET USER FUNCTION
const getUser = async (req, res, next) => {
    try {
        // FINDING THE DATA IN THE DATABASE
        let user = await User.findOne({ authId: req.body.authId });

        // VALIDATE
        if (!user) {
            res.status(400).send({
                success: false,
                message: "User Not Found",
            });
        }

        res.status(200).send({
            success: true,
            message: "User Found Successfully",
            user,
        });
    } catch (error) {
        console.log("Error From Get User Controller");
        next(error);
    }
};

module.exports = { createUser, updateUser, getUser };
