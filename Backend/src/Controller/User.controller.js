const { User } = require("../Model/User.model");

const createUser = async (req, res, next) => {
    try {
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

const updateUser = async (req, res, next) => {
    try {
        let { userId } = req.params;
        console.log("userId", userId);

        let user = await User.findOne({ _id: userId });
        console.log(req.body.authId);
        if (req.body.authId !== user.authId) {
            res.status(401).send({
                success: false,
                message: "You Are Not A Authorize Person To Do This Action",
            });
        }

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

const getUser = async (req, res, next) => {
    try {
        let user = await User.findOne({ authId: req.body.authId });
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
