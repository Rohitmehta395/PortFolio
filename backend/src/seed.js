import dotenv from "dotenv";
dotenv.config(); // ✅ loads MONGO_URI from .env

import mongoose from "mongoose";
import Project from "./models/Project.js";

async function seed() {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("✅ Connected to DB");

    await Project.deleteMany({});
    console.log("🧹 Existing projects cleared");

    await Project.create([
      {
        title: "WonderLust: Rental House",
        shortDescription: "WonderLust is a house rental platform.",
        longDescription: "Long description...",
        techStack: ["React", "Node", "MongoDB"],
        imageUrls: [],
        demoUrl: "",
        repoUrl: "",
      },
      {
        title: "News Aggregator",
        shortDescription: "News Aggregator is a platform where you can see worldwide news.",
        longDescription: "Long description...",
        techStack: ["React", "Node", "MongoDB"],
        imageUrls: [],
        demoUrl: "",
        repoUrl: "",
      },
    ]);

    console.log("🌱 Seeding complete");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
}

// ✅ Call the function
seed();
