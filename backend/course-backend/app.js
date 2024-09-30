const express = require("express");
const connectDB = require("./config/db");
const cors = require("cors");
require("dotenv").config();

// Initialize app
const app = express();

// Connect to MongoDB
connectDB();

// Middleware
app.use(cors());
app.use(express.json());

// Routes
app.use("/api/auth", require("./routes/auth"));
app.use("/api/courses", require("./routes/course"));

// Home route
app.get("/", (req, res) => res.send("API is running"));

module.exports = app; // <-- make sure to export app
