const mongoose = require("mongoose");

const skillsSchema = new mongoose.Schema(
    {
        techSkills: [
            {
                type: String,
            },
        ],
        softSkills: [
            {
                type: String,
                required: true,
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Skills = mongoose.model("skills", skillsSchema);

module.exports = { Skills };
