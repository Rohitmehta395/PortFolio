import dotenv from "dotenv";
dotenv.config({ path: "../.env" });

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
        title: "PortFolio",
        shortDescription:
          "Rohit Mehta's personal portfolio website showcasing projects and skills",
        longDescription:
          "A professional portfolio website built to showcase my projects, skills, and experience in web development.",
        techStack: [
          "JavaScript",
          "HTML/CSS",
          "Tailwind CSS",
          "React",
          "NodeJS",
          "Express.js",
          "REST API",
          "MongoDB",
          "Framer Motion",
        ],
        thumbnailUrl:
          "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?w=1200",
        imageUrls: [],
        demoUrl: "https://github.com/Rohitmehta395/PortFolio",
        repoUrl: "https://github.com/Rohitmehta395/PortFolio",
        featured: true,
        category: "Full-Stack",
        status: "In Progress",
        year: "2025",
      },
      {
        title: "Artisian - Hackathon Project",
        shortDescription:
          "Hackathon project built with Java focusing on art-related solutions",
        longDescription:
          "A hackathon project developed to solve art-related challenges using Java technologies.",
        techStack: [
          "JavaScript",
          "HTML/CSS",
          "Tailwind CSS",
          "React",
          "Java",
          "Spring Boot",
          "MongoDB",
          "OpenAI API",
        ],
        thumbnailUrl:
          "https://images.unsplash.com/photo-1561998338-13ad7883b20f?w=1200",
        imageUrls: [],
        demoUrl: "https://github.com/Rohitmehta395/Art_Java_Hackathon_Project",
        repoUrl: "https://github.com/Rohitmehta395/Art_Java_Hackathon_Project",
        featured: false,
        category: "Full-Stack",
        status: "Completed",
        year: "2025",
      },
      {
        title: "Woo-Commerce Sneakers Hub",
        shortDescription:
          "React-based frontend for a sneakers e-commerce website",
        longDescription:
          "A modern e-commerce frontend showcasing sneakers from different brands with a clean, responsive design and smooth user experience.",
        techStack: ["React", "JavaScript", "CSS"],
        thumbnailUrl:
          "https://images.unsplash.com/photo-1460353581641-37baddab0fa2?w=1200",
        imageUrls: [],
        demoUrl:
          "https://github.com/Rohitmehta395/Woo-Commerce_Sneakers_Hub_React_Frontend",
        repoUrl:
          "https://github.com/Rohitmehta395/Woo-Commerce_Sneakers_Hub_React_Frontend",
        featured: false,
        category: "Full-Stack",
        status: "Completed",
        year: "2025",
      },
      {
        title: "News Today",
        shortDescription:
          "PBL project for real-time news aggregation and display",
        longDescription:
          "A news aggregation platform built as a Project-Based Learning exercise, providing users with up-to-date news from various sources.",
        techStack: [
          "JavaScript",
          "HTML/CSS",
          "Tailwind CSS",
          "React",
          "NodeJS",
          "Express.js",
          "REST API",
          "MongoDB",
        ],
        thumbnailUrl:
          "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1200",
        imageUrls: [],
        demoUrl: "https://news-today-alpha.vercel.app",
        repoUrl: "https://github.com/Rohitmehta395/News-Today",
        featured: true,
        category: "Full-Stack",
        status: "Completed",
        year: "2025",
      },
      {
        title: "Pro-Rental: Property Rental Platform",
        shortDescription:
          "Full-stack MERN travel and accommodation booking platform",
        longDescription:
          "A comprehensive travel platform built with the MERN stack, allowing users to discover and book unique accommodations and experiences.",
        techStack: [
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "EJS",
          "Passport.js",
          "Bootstrap",
          "Cloudinary",
        ],
        thumbnailUrl:
          "https://images.unsplash.com/photo-1759428679273-11d914866394",
        imageUrls: [],
        demoUrl: "https://wanderlust-322o.onrender.com",
        repoUrl: "https://github.com/Rohitmehta395/WanderLust",
        featured: true,
        category: "Full-Stack",
        status: "Live",
        year: "2025",
      },
      {
        title: "Simon Says Game",
        shortDescription:
          "Interactive memory game built with vanilla JavaScript",
        longDescription:
          "A classic Simon Says memory game that challenges players to remember and repeat increasingly complex sequences, helping improve cognitive skills and memory.",
        techStack: ["HTML", "CSS", "JavaScript"],
        thumbnailUrl:
          "https://images.unsplash.com/photo-1511512578047-dfb367046420?w=1200",
        imageUrls: [],
        demoUrl: "https://github.com/Rohitmehta395/Simon-Says-Game",
        repoUrl: "https://github.com/Rohitmehta395/Simon-Says-Game",
        featured: false,
        category: "Frontend",
        status: "Live",
        year: "2025",
      },
      {
        title: "Sharada Education Trust (Internship)",
        shortDescription:
          "Comprehensive web platform for an educational NGO featuring admin dashboard, blog management, and member profiles",
        longDescription:
          "A full-featured educational trust website built with MERN stack, featuring dynamic content management, blog publishing system with rich text editor, team member management, education image galleries, email newsletter integration, and a responsive design. Includes admin authentication, image upload functionality, and SEO optimization.",
        techStack: [
          "React",
          "Node.js",
          "Express.js",
          "MongoDB",
          "Mongoose",
          "JWT Authentication",
          "Tailwind CSS",
          "React Router",
          "Multer",
          "React Quill",
          "Nodemailer",
          "Framer Motion",
          "Axios",
          "bcryptjs",
        ],
        thumbnailUrl:
          "https://ngo-82p8.onrender.com/uploads/blog-1766320536724.webp",
        imageUrls: [],
        demoUrl: "https://ngo-internship.vercel.app",
        repoUrl: "https://github.com/Rohitmehta395/NGO_Internship",
        featured: true,
        category: "Full-Stack",
        status: "In Progress",
        year: "25-26",
      },
    ]);

    console.log("🌱 Seeding complete");
    process.exit();
  } catch (err) {
    console.error("❌ Seeding failed:", err);
    process.exit(1);
  }
}

seed();
