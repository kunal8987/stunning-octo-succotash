const mongoose = require("mongoose");

const workSchema = new mongoose.Schema(
    {
        workExperience: [
            {
                company: String,
                position: String,
                startDate: String,
                endDate: String,
                description: String,
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Work = mongoose.model("Work", workSchema);

module.exports = { Work };
