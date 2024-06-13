const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema(
    {
        name: {
            type: String,
            required: true,
        },
        title: {
            type: String,
            required: true,
        },
        date: {
            type: String,
            required: true,
        },
        about: {
            type: String,
            required: true,
        },
        link: {
            type: String,
            required: true,
        },
        authId: {
            type: String,
            required: true,
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Achievement = mongoose.model("Achievement", achievementSchema);

module.exports = { Achievement };
