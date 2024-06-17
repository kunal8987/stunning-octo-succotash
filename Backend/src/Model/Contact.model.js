const mongoose = require("mongoose");

const contactSchema = new mongoose.Schema(
    {
        phone: {
            type: Number,
            required: true,
        },
        twitter: {
            type: String,
        },
        email: {
            type: String,
            required: true,
        },
        linkedIn: {
            type: String,
        },
        github: {
            type: String,
        },
        portfolio: {
            type: String,
        },
        user: {
            type: mongoose.Schema.Types.ObjectId,
            ref: "User",
           
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

const Contact = mongoose.model("Contact", contactSchema);

module.exports = { Contact };
