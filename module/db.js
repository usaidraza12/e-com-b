const mongoose = require("mongoose");
require("dotenv").config(); // ✅ Make sure .env is loaded

const connectDB = async () => {
  try {
    await mongoose.connect(`${process.env.MONGO_URL}`);
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection error:", err);
    process.exit(1); // ❗ Exit if DB connection fails
  }
};

module.exports = connectDB;
