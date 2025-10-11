import dotenv from "dotenv";
dotenv.config();
import mongoose from "mongoose";
const MONGO_URI = process.env.MONGO_URI;

const connectDB = async () => {
  try {
    await mongoose.connect(MONGO_URI, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    console.log("✅ Database (MongoDB) successfully connected...");
  } catch (err) {
    console.log("❌ MongoDB connection error:", err);
  }
};

export default connectDB;
