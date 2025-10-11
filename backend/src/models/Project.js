import mongoose from "mongoose";

// Optional: You can use a helper function to create slugs
function generateSlug(text) {
  return text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9\s-]/g, "") // remove special characters
    .replace(/\s+/g, "-") // replace spaces with hyphens
    .replace(/-+/g, "-"); // remove multiple consecutive hyphens
}

const ProjectSchema = new mongoose.Schema({
  title: { type: String, required: true },
  slug: { type: String, required: true, unique: true },
  shortDescription: String,
  longDescription: String,
  techStack: [String],
  imageUrls: { type: [String], default: [] },
  demoUrl: String,
  repoUrl: String,
  featured: { type: Boolean, default: false },
  createdAt: { type: Date, default: Date.now },
});

// ✅ Middleware to generate slug before saving
ProjectSchema.pre("validate", function (next) {
  if (this.isModified("title") || !this.slug) {
    this.slug = generateSlug(this.title);
  }
  next();
});


const projectModel = mongoose.model("Project", ProjectSchema);

export default projectModel;
