const mongoose = require("mongoose");

const achievementSchema = new mongoose.Schema(
    {
        achievements: [
            {
                title: String,
                date: String,
                description: String,
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Achievement = mongoose.model("Achievement", achievementSchema);

module.exports = { Achievement };
