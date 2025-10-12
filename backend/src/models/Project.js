import mongoose from "mongoose";

function generateSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "")
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  shortDescription: String,
  longDescription: String,
  techStack: [String],
  imageUrls: { type: [String], default: [] },
  thumbnailUrl: String, // Main project image
  demoUrl: String,
  repoUrl: String,
  featured: { type: Boolean, default: false },
  category: {
    type: String,
    enum: ["AI/ML", "Full-Stack", "Web Design", "Frontend"],
    default: "Full-Stack",
  },
  status: {
    type: String,
    enum: ["Completed", "Live", "In Progress"],
    default: "Completed",
  },
  duration: String,
  year: String,
  tags: [String],
  createdAt: { type: Date, default: Date.now },
});

ProjectSchema.pre("validate", function (next) {
  if (this.isModified("title") || !this.slug) {
    this.slug = generateSlug(this.title);
  }
  next();
});

const projectModel = mongoose.model("Project", ProjectSchema);

export default projectModel;
