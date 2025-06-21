require("dotenv").config();
const express = require("express");
const cors = required("cors");
const path = require("path");
const connectDB = require("./config")

const app = express();

//Middle to handle CORS
app.use (
    cors({
        origin: process.env.CLIENT_URL || "*",
        methods: ["GET", "POST", "PUT", "DELETE"],
        allowedHeaders: ["Content-Type", "Authorization"],
    })
);

app.use(express.json());

connectDB();

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));