const mongoose = require("mongoose");

const connectDB = async () => {
    try {
        mongoose.connect(process.env.Database_URL);
        console.log("MongoDB connected");
    } catch (error) {
        console.error("MongoDB connection failed:", error);
        process.exit(1);
    }
};

module.exports = connectDB;
