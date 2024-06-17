const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
    {
        institution: {
            type: String,
            required: true,
        },
        degree: {
            type: String,
            required: true,
        },
        country: {
            type: String,
            required: true,
        },
        state: {
            type: String,
            required: true,
        },
        start: {
            type: String,
            required: true,
        },
        finish: {
            type: String,
            required: true,
        },
        authId: {
            type: String,
            required: true,
        },
        userId: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Education = mongoose.model("Education", educationSchema);

module.exports = { Education };
