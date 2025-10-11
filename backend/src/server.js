import dotenv from "dotenv";
dotenv.config();
import express from "express";
import helmet from "helmet";
import cors from "cors";
import morgan from "morgan";
import projectsRoute from "./routes/projects.js";
import connectDB from "../db/connectDB.js";

const app = express();
const port = process.env.PORT || 8000;

app.use(helmet());
app.use(express.json());
app.use(cors({ origin: process.env.FRONTEND_URL || "http://localhost:5173" }));
if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

//Connecting Database - MongoDB
await connectDB();

//Routes
app.use("/projects", projectsRoute);

//Health
app.get("/api/health", (req, res) => res.json({ ok: true }));

app.listen(port, () => {
  console.log(`Server is listening on port: ${port}`);
});
