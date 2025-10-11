import express from "express";
const router = express.Router();

import { allProjects, projectSlug } from "../controllers/project.js";

router.get("/", allProjects);

router.get("/:slug", projectSlug);

export default router;
