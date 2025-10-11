import Project from "../models/Project.js";

const allProjects = async (req, res) => {
  try {
    const projects = await Project.find().sort({ createdAt: -1 });
    res.json(projects);
  } catch (error) {
    console.error(`Error fetching projects: ${error.message}`);
    res
      .status(500)
      .json({ message: "Server error. Could not fetch projects." });
  }
};

const projectSlug = async (req, res) => {
  try {
    const project = await Project.findOne({ slug: req.params.slug });

    if (!project) {
      return res.status(404).json({ error: "Project not found" });
    }

    res.json(project);
  } catch (error) {
    console.error(`Error fetching project: ${error.message}`);
    res.status(500).json({ error: "Server error" });
  }
};

export { allProjects, projectSlug};
