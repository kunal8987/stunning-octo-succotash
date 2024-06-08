const { Auth } = require("../Model/Auth.model");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

//REGISTER USER FUNCTION
const registerUser = async (req, res, next) => {
    try {
        let { userName, email, password } = req.body;

        let existingUser = await Auth.findOne({ userName, email });

        if (existingUser) {
            res.status(200).send({
                success: true,
                message: "User Already Registered",
            });
        }

        // HASH AND SALT THE PASSWORD
        const hashedPassword = await bcrypt.hash(password, 7);

        // SAVE AUTH DETAILS TO THE DATABASE
        const newUser = new Auth({
            userName,
            email,
            password: hashedPassword,
        });

        await newUser.save();

        res.status(200).send({
            success: true,
            message: "User Registered Successfully.",
        });
    } catch (error) {
        next(error);
        console.log("Error From Register User Controller");
    }
};

// LOGIN USER FUNCTION

const loginUser = async (req, res, next) => {
    try {
        let { email, password } = req.body;

        //FINDING THE EXISTING USER
        const user = await Auth.findOne({ email });

        if (!user) {
            return res
                .status(404)
                .send({ success: false, message: "User Not Found" });
        }

        //COMPARING THE PASSWORD
        const match = await bcrypt.compare(password, user.password);
        if (!match) {
            return res.status(404).send({
                success: false,
                message: "Invalid Password",
            });
        }
        // GENERATE A JWT TOKEN (CUSTOMIZE THIS PART)
        const token = jwt.sign(
            { authId: user._id },
            process.env.JWT_SECRET_KEY,
            {
                expiresIn: "1d",
            }
        );
        user.password = undefined;
        res.status(200).send({
            success: true,
            message: "Login Successful",
            token,
            user,
        });
    } catch (error) {
        next(error);
        console.log("Error From Login User Controller ");
    }
};
module.exports = { registerUser, loginUser };
