const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
    {
        company: {
            type: String,
            required: true,
        },
        position: {
            type: String,
            required: true,
        },
        startDate: {
            type: String,
            required: true,
        },
        endDate: {
            type: String,
            required: true,
        },
        description: {
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

const Work = mongoose.model("Work", workSchema);

module.exports = { Work };
