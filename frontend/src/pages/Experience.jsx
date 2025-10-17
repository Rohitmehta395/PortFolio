import { motion } from "framer-motion";
import {
  FiBriefcase,
  FiCode,
  FiUsers,
  FiAward,
  FiTrendingUp,
  FiCheckCircle,
  FiGithub,
  FiExternalLink,
} from "react-icons/fi";
import ClickSpark from "../components/ClickSpark";
import ShinyText from "../components/ShinyText";
import GradientText from "../components/GradientText";

const Experience = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
  };

  const workExperience = [
    {
      title: "Web Development Intern",
      company: "Sharadha Educational Trust NGO",
      location: "Remote",
      period: "2024 - Present",
      type: "Internship",
      status: "Current",
      description:
        "Contributing to meaningful projects that combine technology with social impact, focusing on web development solutions for educational initiatives.",
      responsibilities: [
        "Developing responsive web applications using React.js and Node.js",
        "Building RESTful APIs and integrating with MongoDB databases",
        "Collaborating with the team to design and implement new features",
        "Writing clean, maintainable code following best practices",
        "Optimizing application performance and user experience",
      ],
      technologies: [
        "React.js",
        "Node.js",
        "MongoDB",
        "Express.js",
        "JavaScript",
        "HTML/CSS",
      ],
      achievements: [
        "Successfully deployed multiple full-stack applications",
        "Improved code efficiency and reduced load times",
        "Contributed to impactful educational technology solutions",
      ],
    },
  ];

  const projects = [
    {
      title: "Pro-Rental: Property Rental Platform",
      type: "Full-Stack Project",
      description:
        "Developed a comprehensive property rental platform with user authentication, property listings, reviews, and cloud storage integration.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "Mongoose",
        "EJS",
        "Passport.js",
        "Bootstrap",
        "Cloudinary",
      ],
      highlights: [
        "Implemented secure user authentication with Passport.js",
        "Integrated Cloudinary for optimized image management",
        "Built RESTful API for property and user management",
        "Deployed on Render with MongoDB Atlas",
      ],
      liveUrl: "https://wanderlust-322o.onrender.com",
      githubUrl: "https://github.com/Rohitmehta395/WanderLust",
    },
    {
      title: "News-Today: News Aggregation Platform",
      type: "Full-Stack Project",
      description:
        "Built a dynamic news aggregation platform that fetches and displays latest articles with category filtering and search functionality.",
      technologies: [
        "Node.js",
        "Express.js",
        "MongoDB",
        "EJS",
        "JavaScript",
        "Bootstrap",
      ],
      highlights: [
        "Developed secure backend with data pagination",
        "Implemented category-based filtering system",
        "Created responsive frontend with dynamic rendering",
        "Integrated news API for real-time updates",
      ],
      liveUrl: "https://news-today-alpha.vercel.app",
      githubUrl: "https://github.com/Rohitmehta395/News-Today",
    },
    {
      title: "Artisian - Hackathon Project",
      type: "Hackathon",
      description:
        "Hackathon project focused on art-related solutions using modern web technologies and AI integration.",
      technologies: [
        "JavaScript",
        "React",
        "Java",
        "Spring Boot",
        "MongoDB",
        "OpenAI API",
      ],
      highlights: [
        "Built full-stack application within hackathon timeline",
        "Integrated OpenAI API for AI-powered features",
        "Collaborated with team under tight deadlines",
        "Implemented responsive design with Tailwind CSS",
      ],
      githubUrl: "https://github.com/Rohitmehta395/Art_Java_Hackathon_Project",
    },
  ];

  const leadership = {
    role: "Vice Head Boy & Captain",
    organization: "Hilton's School",
    period: "2024",
    responsibilities: [
      "Organized and coordinated extracurricular activities, fostering participation and teamwork",
      "Acted as a liaison between students and faculty to address concerns and implement improvements",
      "Led school events and competitions, motivating peers and ensuring smooth execution",
      "Developed leadership and communication skills through various initiatives",
    ],
  };

  const skills = {
    technical: [
      {
        name: "Problem Solving",
        value: 90,
        description: "450+ problems solved on LeetCode & GFG",
      },
      {
        name: "Full-Stack Development",
        value: 85,
        description: "MERN stack expertise",
      },
      {
        name: "Database Management",
        value: 80,
        description: "MongoDB & MySQL proficiency",
      },
      {
        name: "API Development",
        value: 85,
        description: "RESTful API design & implementation",
      },
    ],
    soft: [
      { name: "Communication", icon: FiUsers },
      { name: "Teamwork", icon: FiUsers },
      { name: "Leadership", icon: FiAward },
      { name: "Adaptability", icon: FiTrendingUp },
    ],
  };

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
        <section className="min-h-[80vh] flex flex-col items-center justify-center px-6 relative overflow-hidden">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-center"
          >
            <GradientText
              colors={["#40ffaa", "#4079ff", "#40ffaa", "#4079ff", "#40ffaa"]}
              animationSpeed={8}
              showBorder={false}
              className="text-[3rem] md:text-[8rem] lg:text-[13rem] font-black text-white leading-none mb-8"
            >
              <h1 className="font-bold font-poppins">EXPERIENCE</h1>
            </GradientText>

            <ShinyText
              text="Building Solutions, Solving Problems"
              disabled={false}
              speed={3}
              className="text-2xl md:text-3xl text-gray-400 font-light tracking-wider"
            />
          </motion.div>
        </section>

        {/* Work Experience Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
                WORK EXPERIENCE
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500"></div>
            </motion.div>

            <div className="space-y-8">
              {workExperience.map((exp, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gray-800/50 border-2 border-cyan-500/50 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300 relative overflow-hidden"
                >
                  {/* Background Gradient */}
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500/5 to-blue-600/5 opacity-0 hover:opacity-100 transition-opacity duration-300"></div>

                  <div className="relative z-10">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between mb-6">
                      <div className="flex items-start gap-4 mb-4 md:mb-0">
                        <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                          <FiBriefcase className="w-7 h-7 text-white" />
                        </div>
                        <div>
                          <h3 className="text-2xl font-bold text-white mb-1">
                            {exp.title}
                          </h3>
                          <p className="text-cyan-400 font-semibold text-lg">
                            {exp.company}
                          </p>
                          <p className="text-gray-400 text-sm">
                            {exp.location}
                          </p>
                        </div>
                      </div>
                      <div className="flex flex-col items-start md:items-end gap-2">
                        <span className="px-4 py-2 bg-green-500/10 border border-green-500/30 rounded-full text-green-400 text-sm font-semibold">
                          {exp.status}
                        </span>
                        <span className="text-gray-400 text-sm">
                          {exp.period}
                        </span>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-gray-300 text-lg mb-6 leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Responsibilities */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <FiCode className="text-cyan-400" />
                        Key Responsibilities
                      </h4>
                      <ul className="space-y-2">
                        {exp.responsibilities.map((resp, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <FiCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                            <span>{resp}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    {/* Technologies */}
                    <div className="mb-6">
                      <h4 className="text-white font-semibold mb-3">
                        Technologies Used
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {exp.technologies.map((tech, i) => (
                          <span
                            key={i}
                            className="px-4 py-2 bg-gray-700/50 border border-gray-600 rounded-lg text-sm text-gray-300 hover:border-cyan-500/50 transition-colors"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>

                    {/* Achievements */}
                    <div>
                      <h4 className="text-white font-semibold mb-3 flex items-center gap-2">
                        <FiAward className="text-cyan-400" />
                        Key Achievements
                      </h4>
                      <ul className="space-y-2">
                        {exp.achievements.map((achievement, i) => (
                          <li
                            key={i}
                            className="flex items-start gap-3 text-gray-300"
                          >
                            <div className="w-2 h-2 bg-cyan-500 rounded-full mt-2 flex-shrink-0"></div>
                            <span>{achievement}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
                NOTABLE PROJECTS
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {projects.map((project, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 group"
                >
                  <div className="flex items-start justify-between mb-4">
                    <div>
                      <h3 className="text-xl font-bold text-white mb-1 group-hover:text-cyan-400 transition-colors">
                        {project.title}
                      </h3>
                      <span className="inline-block px-3 py-1 bg-cyan-500/10 border border-cyan-500/30 rounded-full text-cyan-400 text-xs font-semibold">
                        {project.type}
                      </span>
                    </div>
                  </div>

                  <p className="text-gray-300 mb-4 leading-relaxed">
                    {project.description}
                  </p>

                  {/* Highlights */}
                  <div className="mb-4">
                    <h4 className="text-white font-semibold text-sm mb-2">
                      Highlights
                    </h4>
                    <ul className="space-y-1">
                      {project.highlights.map((highlight, i) => (
                        <li
                          key={i}
                          className="flex items-start gap-2 text-gray-400 text-sm"
                        >
                          <span className="text-cyan-500">•</span>
                          <span>{highlight}</span>
                        </li>
                      ))}
                    </ul>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.technologies.slice(0, 4).map((tech, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-gray-300"
                      >
                        {tech}
                      </span>
                    ))}
                    {project.technologies.length > 4 && (
                      <span className="px-2 py-1 bg-gray-700/50 border border-gray-600 rounded text-xs text-gray-300">
                        +{project.technologies.length - 4}
                      </span>
                    )}
                  </div>

                  {/* Links */}
                  <div className="flex gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FiExternalLink className="w-4 h-4" />
                        Live Demo
                      </a>
                    )}
                    {project.githubUrl && (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-300 transition-colors"
                      >
                        <FiGithub className="w-4 h-4" />
                        View Code
                      </a>
                    )}
                  </div>
                </motion.div>
              ))}
            </div>

            <motion.div {...fadeInUp} className="text-center mt-12">
              <a
                href="/projects"
                className="inline-flex items-center gap-2 px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
              >
                View All Projects
                <FiExternalLink className="w-5 h-5" />
              </a>
            </motion.div>
          </div>
        </section>

        {/* Leadership Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
                LEADERSHIP & RESPONSIBILITY
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500"></div>
            </motion.div>

            <motion.div
              {...fadeInUp}
              className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-2xl p-8 hover:border-cyan-500 transition-all duration-300"
            >
              <div className="flex items-start gap-4 mb-6">
                <div className="w-14 h-14 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-xl flex items-center justify-center flex-shrink-0">
                  <FiAward className="w-7 h-7 text-white" />
                </div>
                <div>
                  <h3 className="text-2xl font-bold text-white mb-1">
                    {leadership.role}
                  </h3>
                  <p className="text-cyan-400 font-semibold text-lg">
                    {leadership.organization}
                  </p>
                  <p className="text-gray-400 text-sm">{leadership.period}</p>
                </div>
              </div>

              <ul className="space-y-3">
                {leadership.responsibilities.map((resp, i) => (
                  <li key={i} className="flex items-start gap-3 text-gray-300">
                    <FiCheckCircle className="text-cyan-400 mt-1 flex-shrink-0" />
                    <span>{resp}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </section>

        {/* Skills & Expertise */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
                SKILLS & EXPERTISE
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500"></div>
            </motion.div>

            {/* Technical Skills */}
            <div className="mb-12">
              <h3 className="text-xl font-bold text-white mb-6">
                Technical Proficiency
              </h3>
              <div className="space-y-6">
                {skills.technical.map((skill, index) => (
                  <motion.div key={index} {...fadeInUp} className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="text-white font-semibold">
                        {skill.name}
                      </span>
                      <span className="text-cyan-400 text-sm">
                        {skill.description}
                      </span>
                    </div>
                    <div className="h-3 bg-gray-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        whileInView={{ width: `${skill.value}%` }}
                        viewport={{ once: true }}
                        transition={{ duration: 1, delay: 0.2 }}
                        className="h-full bg-gradient-to-r from-cyan-500 to-blue-600 rounded-full"
                      />
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Soft Skills */}
            <div>
              <h3 className="text-xl font-bold text-white mb-6">Soft Skills</h3>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {skills.soft.map((skill, index) => (
                  <motion.div
                    key={index}
                    {...fadeInUp}
                    className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 hover:border-cyan-500/50 transition-all duration-300 text-center"
                  >
                    <skill.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                    <span className="text-white font-semibold">
                      {skill.name}
                    </span>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Stats Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
              {[
                { number: "450+", label: "Problems Solved", icon: FiCode },
                {
                  number: "6+",
                  label: "Projects Completed",
                  icon: FiBriefcase,
                },
                { number: "9.15", label: "Current CGPA", icon: FiTrendingUp },
                {
                  number: "2+",
                  label: "Months Experience (Internship)",
                  icon: FiAward,
                },
              ].map((stat, index) => (
                <motion.div
                  key={index}
                  {...fadeInUp}
                  className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-6 text-center hover:border-cyan-500 transition-all duration-300"
                >
                  <stat.icon className="w-8 h-8 text-cyan-400 mx-auto mb-3" />
                  <div className="text-3xl font-bold text-white mb-2">
                    {stat.number}
                  </div>
                  <div className="text-gray-400 text-sm">{stat.label}</div>
                </motion.div>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Ready to Work Together?
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                I'm currently open to new opportunities and exciting projects.
                Let's create something amazing!
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Get In Touch
                </a>
                <a
                  href="/Resume.pdf"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-full transition-all duration-300"
                >
                  Download Resume
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ClickSpark>
  );
};

export default Experience;
