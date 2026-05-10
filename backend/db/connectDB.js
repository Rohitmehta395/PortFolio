import mongoose from "mongoose";
const connectDB = async () => {
  const MONGO_URI = process.env.MONGO_URI;
  try {
    await mongoose.connect(MONGO_URI);
    console.log("✅ Database (MongoDB) successfully connected...");
  } catch (err) {
    console.log("❌ MongoDB connection error:", err);
  }
};

export default connectDB;
