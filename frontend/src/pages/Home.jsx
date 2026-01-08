import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import {
  FiArrowRight,
  FiCode,
  FiDatabase,
  FiServer,
  FiGithub,
  FiLinkedin,
  FiMail,
  FiDownload,
  FiExternalLink,
} from "react-icons/fi";
import { Typewriter } from "react-simple-typewriter";
import ClickSpark from "../components/ClickSpark";
import profilePic from "../assets/Icon_Rohit.webp";

const Home = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const skills = [
    {
      icon: FiCode,
      name: "Frontend",
      items: ["React.js", "JavaScript", "HTML/CSS", "Tailwind"],
    },
    {
      icon: FiServer,
      name: "Backend",
      items: ["Node.js", "Express.js", "REST APIs", "Passport.js"],
    },
    {
      icon: FiDatabase,
      name: "Database",
      items: ["MongoDB", "MySQL", "Mongoose"],
    },
  ];

  const stats = [
    { number: "450+", label: "Problems Solved" },
    { number: "6+", label: "Projects Built" },
    { number: "9.15", label: "CGPA" },
    { number: "2+", label: "Months Experience (Internship)" },
  ];

  const featuredProjects = [
    {
      title: "Pro-Rental Platform",
      description:
        "Full-stack property rental platform with authentication and cloud storage",
      tech: ["Node.js", "Express.js", "MongoDB", "EJS"],
      image:
        "https://images.unsplash.com/photo-1759428679273-11d914866394?w=800",
      liveUrl: "https://wanderlust-322o.onrender.com",
      githubUrl: "https://github.com/Rohitmehta395/WanderLust",
    },
    {
      title: "News-Today",
      description:
        "News aggregation platform with category filtering and search",
      tech: ["React", "Node.js", "MongoDB", "Bootstrap"],
      image:
        "https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=800",
      liveUrl: "https://news-today-alpha.vercel.app",
      githubUrl: "https://github.com/Rohitmehta395/News-Today",
    },
  ];

  return (
    <ClickSpark
      sparkColor="#fff"
      sparkSize={10}
      sparkRadius={15}
      sparkCount={8}
      duration={400}
    >
      <div className="relative z-10 min-h-screen">
        {/* Hero Section */}
        <section className="min-h-screen flex items-center justify-center px-6 py-20">
          <div className="max-w-7xl mx-auto w-full">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Text Content */}
              <motion.div
                initial={{ opacity: 0, x: -50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
              >
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.2 }}
                  className="inline-block mb-4 px-4 py-2 bg-cyan-500/10 border border-cyan-500/30 rounded-full"
                >
                  <span className="text-cyan-400 text-sm font-semibold">
                    Welcome to my portfolio
                  </span>
                </motion.div>

                <h1 className="text-5xl md:text-7xl font-bold text-white mb-6">
                  Hi, I'm{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600">
                    Rohit Mehta
                  </span>
                </h1>

                <div className="text-2xl md:text-3xl text-gray-300 mb-6 h-12">
                  <span>I'm a </span>
                  <span className="text-cyan-400 font-semibold">
                    <Typewriter
                      words={[
                        "Full-Stack Developer",
                        "MERN Stack Expert",
                        "Problem Solver",
                        "Web Developer",
                      ]}
                      loop={0}
                      cursor
                      cursorStyle="|"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                </div>

                <p className="text-xl text-gray-400 mb-8 leading-relaxed">
                  Passionate about creating beautiful, functional web
                  applications. Currently pursuing BCA at Graphic Era University
                  with 9.15 CGPA and solving 450+ coding problems.
                </p>

                <div className="flex flex-col sm:flex-row gap-4 mb-8">
                  <Link
                    to="/projects"
                    className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105 inline-flex items-center justify-center gap-2"
                  >
                    View My Work
                    <FiArrowRight className="w-5 h-5" />
                  </Link>
                  <a
                    href="/Resume.pdf"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
                  >
                    Download Resume
                    <FiDownload className="w-5 h-5" />
                  </a>
                </div>

                {/* Social Links */}
                <div className="flex gap-4">
                  <a
                    href="https://github.com/Rohitmehta395"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-gray-700 hover:border-transparent rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <FiGithub className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="https://www.linkedin.com/in/rohitmehta395/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-gray-700 hover:border-transparent rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <FiLinkedin className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                  <a
                    href="mailto:rohitmehtaddn@gmail.com"
                    className="w-12 h-12 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-gray-700 hover:border-transparent rounded-lg flex items-center justify-center transition-all duration-300 group"
                  >
                    <FiMail className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                  </a>
                </div>
              </motion.div>

              {/* Profile Image */}
              <motion.div
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="relative"
              >
                <div className="relative max-w-lg mx-auto">
                  {/* Animated Background */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full blur-3xl opacity-20 animate-pulse"></div>

                  {/* Profile Picture */}
                  <div className="relative">
                    <img
                      src={profilePic}
                      alt="Rohit Mehta"
                      className="relative rounded-full border-4 border-white shadow-2xl w-full"
                    />

                    {/* Floating Elements */}
                    <motion.div
                      animate={{ y: [0, -20, 0] }}
                      transition={{ duration: 3, repeat: Infinity }}
                      className="absolute top-10 -right-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 shadow-lg"
                    >
                      <FiCode className="w-8 h-8 text-white" />
                    </motion.div>

                    <motion.div
                      animate={{ y: [0, 20, 0] }}
                      transition={{ duration: 3, repeat: Infinity, delay: 1 }}
                      className="absolute bottom-10 -left-10 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl p-4 shadow-lg"
                    >
                      <FiDatabase className="w-8 h-8 text-white" />
                    </motion.div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="text-center bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300"
                >
                  <div className="text-4xl md:text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-cyan-500 to-blue-600 mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                What I Do
              </h2>
              <p className="text-xl text-gray-400">
                Building full-stack applications with modern technologies
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {skills.map((skill, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                    <skill.icon className="w-8 h-8 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white mb-4">
                    {skill.name}
                  </h3>
                  <ul className="space-y-2">
                    {skill.items.map((item, i) => (
                      <li
                        key={i}
                        className="flex items-center gap-2 text-gray-300"
                      >
                        <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                        {item}
                      </li>
                    ))}
                  </ul>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Featured Projects */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="text-center mb-12">
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-4">
                Featured Projects
              </h2>
              <p className="text-xl text-gray-400">
                Check out some of my recent work
              </p>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
              {featuredProjects.map((project, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl overflow-hidden hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="relative overflow-hidden aspect-video">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-110"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-2xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-gray-400 mb-4">{project.description}</p>
                    <div className="flex flex-wrap gap-2 mb-4">
                      {project.tech.map((tech, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-gray-300"
                        >
                          {tech}
                        </span>
                      ))}
                    </div>
                    <div className="flex gap-3">
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        Code
                      </a>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp} className="text-center">
              <Link
                to="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
              >
                View All Projects
                <FiArrowRight className="w-5 h-5" />
              </Link>
            </motion.div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Work Together
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                I'm currently available for freelance work and exciting
                projects. Let's create something amazing together!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  to="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Get In Touch
                </Link>
                <a
                  href="/resume.pdf"
                  download
                  className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-full transition-all duration-300 inline-flex items-center justify-center gap-2"
                >
                  Download Resume
                  <FiDownload className="w-5 h-5" />
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ClickSpark>
  );
};

export default Home;
