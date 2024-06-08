const mongoose = require("mongoose");

const authSchema = new mongoose.Schema(
    {
        userName: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        email: {
            type: String,
            required: true,
            unique: true,
            lowercase: true,
        },
        password: {
            type: String,
            required: true,
        },
    },
    { timestamps: true, versionKey: false }
);

const Auth = mongoose.model("Auth", authSchema);

module.exports = {Auth};
