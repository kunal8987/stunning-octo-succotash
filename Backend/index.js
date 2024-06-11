// IMPORT THE DEPENDENCY
const express = require("express");
const cookieParser = require("cookie-parser");
const cors = require("cors");
const { connection } = require("./src/Database/db");
const dotenv = require("dotenv");
const { authRouter } = require("./src/Routes/Auth.routes");
const { userRouter } = require("./src/Routes/User.routes");

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

// ERROR HANDLING MIDDLEWARE
app.use((error, req, res, next) => {
    let statusCode = error.statusCode || 500;
    let message = error.message || "Internal Server Error";
    return res.status(statusCode).send({
        success: false,
        statusCode: statusCode,
        message,
    });
});

// API ROUTES

app.use("/api/v1/auth", authRouter);
app.use("/api/v1/user", userRouter);

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
