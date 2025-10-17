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

// Security middleware
app.use(helmet());
app.use(express.json());

// ✅ CORS setup
const allowedOrigins = [
  process.env.FRONTEND_URL,
  "http://localhost:5173",
  "http://localhost:3000"
].filter(Boolean);

app.use(
  cors({
    origin: (origin, callback) => {
      // allow requests with no origin (e.g. mobile apps, curl)
      if (!origin) return callback(null, true);
      if (allowedOrigins.includes(origin)) return callback(null, true);
      console.warn("❌ Blocked by CORS:", origin);
      return callback(new Error("Not allowed by CORS"));
    },
    credentials: true,
  })
);

// Logging
if (process.env.NODE_ENV !== "production") {
  app.use(morgan("dev"));
}

// Connecting Database - MongoDB
await connectDB();

// Routes
app.use("/projects", projectsRoute);

// Health check
app.get("/", (req, res) => {
  res.json({ 
    message: "Rohit Mehta Portfolio API",
    status: "running",
    timestamp: new Date().toISOString()
  });
});

app.get("/api/health", (req, res) => {
  res.json({ 
    ok: true, 
    database: "connected",
    timestamp: new Date().toISOString()
  });
});

// 404 handler
app.use((req, res) => {
  res.status(404).json({ error: "Route not found" });
});

// Error handler
app.use((err, req, res, next) => {
  console.error(err.stack);
  res.status(500).json({ 
    error: "Something went wrong!",
    message: process.env.NODE_ENV === "production" ? "Internal server error" : err.message
  });
});

app.listen(port, () => {
  console.log(`✅ Server is listening on port: ${port}`);
  console.log(`✅ Environment: ${process.env.NODE_ENV || "development"}`);
});