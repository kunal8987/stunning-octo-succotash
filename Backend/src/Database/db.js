const mongoose = require("mongoose");

const connection = async () => {
    try {
        await mongoose.connect();
        console.log("Mongo Db Connected", mongoose.connection.host);
    } catch (error) {
        console.log("Error Form DataBase File:", error);
        console.log(error.message);
    }
};

module.exports = { connection };
