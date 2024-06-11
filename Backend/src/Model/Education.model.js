const mongoose = require("mongoose");

const educationSchema = new mongoose.Schema(
    {
        education: [
            {
                institution: { type: String, required: true },
                degree: { type: String, required: true },
                major: { type: String, required: true },
                graduationDate: { type: String, required: true },
            },
        ],
    },
    {
        timestamps: true,
        versionKey: false,
    }
);

const Education = mongoose.model("Education", educationSchema);

module.exports = { Education };
