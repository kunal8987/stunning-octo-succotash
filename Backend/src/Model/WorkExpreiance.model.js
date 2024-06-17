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
            default: "Present",
        },
        description: {
            type: String,
            required: true,
        },
        authId: {
            type: String,
            required: true,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
          
        },
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Work = mongoose.model("Work", workSchema);

module.exports = { Work };
