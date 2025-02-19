// backend/server.js
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const swaggerUi = require("swagger-ui-express");
const swaggerSpecs = require("./config/swaggerConfig");
const flashcardRoutes = require("./routes/flashcardRoutes");
const authRoutes = require("./routes/authRoutes");
const authMiddleware = require("./middlewares/authMiddleware");
const connectDB = require("./config/dbConfig");

const app = express();
app.use(bodyParser.json());
app.use(cors());
require("dotenv").config();
const PORT = process.env.PORT || 3000;

connectDB();

app.use("/auth", authRoutes);
app.use("/flashcards", authMiddleware, flashcardRoutes);
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpecs));

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
