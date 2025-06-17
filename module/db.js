const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URL);
    console.log("MongoDB is connected");
  } catch (err) {
    console.error("MongoDB connection failed:", err);
    process.exit(1); // Optional: Exit process on failure
  }
};

module.exports = connectDB;
