const mongoose = require("mongoose");

const projectSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    gitUrl: {
        type: String,
        required: true,
    },
    deploy: {
        type: String,
        required: true,
    },
    feature: {
        type: String,
        required: true,
    },
    teamSize: {
        type: Number,
    },
    responsibility: {
        type: String,
    },
});

const Project = mongoose.model("Project", projectSchema);

module.exports = { Project };
