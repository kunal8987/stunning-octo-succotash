// IMPORT THE DEPENDENCY
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connection } = require("./Database/db");
const dotenv = require("dotenv");

// ENV CONFIGURATION
dotenv.config();

//DEFINE THE EXPRESS APP
const app = express();

//MIDDLEWARE CONFIGURATION

app.use(cors());

app.use(
    express.json({
        limit: "20kb",
    })
);

app.use(
    express.urlencoded({
        extended: true,
        limit: "20kb",
    })
);

app.use(express.static("Public"));

app.use(cookieParser());

//LISTING THE SERVER
let port = process.env.PORT || 4500;
app.listen(port, async () => {
    try {
        await connection();
        console.log("Server Is Listing On Port ", port);
    } catch (error) {
        console.log("Error Form Server Listen", error);
    }
});
