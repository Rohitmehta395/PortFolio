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

app.use(
  helmet({
    crossOriginResourcePolicy: false,
    crossOriginOpenerPolicy: false,
  })
);

app.use(express.json());

const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:3000",
].filter(Boolean);

app.use(
  cors({
    origin: allowedOrigins,
    credentials: true,
  })
);

if (process.env.NODE_ENV !== "production") app.use(morgan("dev"));

await connectDB();

app.use("/projects", projectsRoute);

app.get("/", (req, res) => {
  res.json({ message: "Rohit Mehta Portfolio API", status: "running" });
});

app.listen(port, () => {
  console.log(`✅ Server running on port: ${port}`);
});
