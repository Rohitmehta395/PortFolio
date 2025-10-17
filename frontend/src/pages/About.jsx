import { motion } from "framer-motion";
import {
  FiCode,
  FiDatabase,
  FiServer,
  FiGithub,
  FiAward,
  FiBookOpen,
} from "react-icons/fi";
import ClickSpark from "../components/ClickSpark";
import ShinyText from "../components/ShinyText";
import GradientText from "../components/GradientText";
import profilePic from "../assets/new_rohit_circle.webp";

const About = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 30 },
    whileInView: { opacity: 1, y: 0 },
    viewport: { once: true },
    transition: { duration: 0.6 },
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
              <h1 className="font-bold font-poppins">ABOUT ME</h1>
            </GradientText>

            <ShinyText
              text="Full-Stack Developer & Problem Solver"
              disabled={false}
              speed={3}
              className="text-2xl md:text-3xl text-gray-400 font-light tracking-wider"
            />
          </motion.div>
        </section>

        {/* My Journey Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
                MY JOURNEY
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500"></div>
            </motion.div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              {/* Profile Image */}
              <motion.div {...fadeInUp} className="order-2 lg:order-1">
                <div className="relative max-w-md mx-auto">
                  <div className="absolute inset-0 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-2xl blur-2xl opacity-30"></div>
                  <img
                    src={profilePic}
                    alt="Rohit Mehta"
                    className="relative rounded-2xl border-4 border-white shadow-2xl w-full"
                  />
                </div>
              </motion.div>

              {/* Journey Text */}
              <motion.div
                {...fadeInUp}
                className="order-1 lg:order-2 space-y-6"
              >
                <h3 className="text-4xl md:text-5xl font-bold text-white mb-6">
                  Hello, I'm Rohit
                </h3>

                <p className="text-gray-300 text-lg leading-relaxed">
                  I'm a 19-year-old full-stack developer from{" "}
                  <span className="text-cyan-400 font-semibold">
                    Dehradun, India
                  </span>
                  , currently pursuing my Bachelor of Computer Application at
                  Graphic Era University with a stellar
                  <span className="text-cyan-400 font-semibold">
                    {" "}
                    9.15 CGPA
                  </span>
                  .
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  My passion lies in creating beautiful, functional web
                  applications using the
                  <span className="text-cyan-400 font-semibold">
                    {" "}
                    MERN stack
                  </span>
                  . I've built scalable platforms like property rental systems
                  and news aggregation apps, always focusing on user experience
                  and clean code.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Currently, I'm gaining real-world experience as an intern at
                  <span className="text-cyan-400 font-semibold">
                    {" "}
                    Sharadha Educational Trust NGO
                  </span>
                  , where I'm applying my technical skills to make a social
                  impact.
                </p>

                <p className="text-gray-300 text-lg leading-relaxed">
                  Beyond coding, I'm a problem-solving enthusiast with
                  <span className="text-cyan-400 font-semibold">
                    {" "}
                    450+ coding challenges
                  </span>{" "}
                  solved across LeetCode and GeeksforGeeks. I believe in
                  continuous learning and pushing boundaries to become better
                  every day.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Education Section */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
                EDUCATION
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500"></div>
            </motion.div>

            <div className="space-y-8">
              {/* Current Education */}
              <motion.div
                {...fadeInUp}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Bachelor of Computer Application
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      Graphic Era University, Dehradun
                    </p>
                  </div>
                  <div className="text-gray-400 mt-4 md:mt-0">
                    <p className="font-semibold">2024 - 2027</p>
                    <p className="text-cyan-400">CGPA: 9.15</p>
                  </div>
                </div>
                <p className="text-gray-300 leading-relaxed">
                  Pursuing comprehensive computer science education with focus
                  on full-stack development, data structures, algorithms, and
                  software engineering principles.
                </p>
              </motion.div>

              {/* 12th Grade */}
              <motion.div
                {...fadeInUp}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Senior Secondary (12th Grade)
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      Hilton's School, Dehradun
                    </p>
                  </div>
                  <div className="text-gray-400 mt-4 md:mt-0">
                    <p className="font-semibold">2023 - 2024</p>
                    <p className="text-cyan-400">Aggregate: 70%</p>
                  </div>
                </div>
              </motion.div>

              {/* 10th Grade */}
              <motion.div
                {...fadeInUp}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                  <div>
                    <h3 className="text-2xl font-bold text-white mb-2">
                      Secondary School (10th Grade)
                    </h3>
                    <p className="text-cyan-400 font-semibold">
                      Hilton's School, Dehradun
                    </p>
                  </div>
                  <div className="text-gray-400 mt-4 md:mt-0">
                    <p className="font-semibold">2021 - 2022</p>
                    <p className="text-cyan-400">Aggregate: 80%</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Skills Section */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
                SKILLS
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {/* Frontend */}
              <motion.div
                {...fadeInUp}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <FiCode className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Frontend</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "React.js",
                    "JavaScript",
                    "HTML/CSS",
                    "Bootstrap",
                    "EJS/Handlebars",
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Backend */}
              <motion.div
                {...fadeInUp}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <FiServer className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">Backend</h3>
                </div>
                <div className="space-y-3">
                  {[
                    "Node.js",
                    "Express.js",
                    "REST APIs",
                    "Passport.js",
                    "Git & GitHub",
                  ].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>

              {/* Database & Languages */}
              <motion.div
                {...fadeInUp}
                className="bg-gray-800/50 border border-gray-700 rounded-xl p-8 hover:border-cyan-500/50 transition-all duration-300"
              >
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-12 h-12 bg-gradient-to-r from-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
                    <FiDatabase className="w-6 h-6 text-white" />
                  </div>
                  <h3 className="text-2xl font-bold text-white">
                    Other Skills
                  </h3>
                </div>
                <div className="space-y-3">
                  {["MongoDB", "MySQL", "Java", "C++", "C"].map((skill, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-2 h-2 bg-cyan-500 rounded-full"></div>
                      <span className="text-gray-300">{skill}</span>
                    </div>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        {/* Career Timeline */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
                CAREER JOURNEY
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500"></div>
            </motion.div>

            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 h-full w-0.5 bg-gradient-to-b from-cyan-500 to-blue-600"></div>

              <div className="space-y-12">
                {/* Current Role */}
                <motion.div {...fadeInUp} className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12">
                      <div className="inline-block mb-2 px-3 py-1 bg-green-500/10 border border-green-500/30 rounded-full">
                        <span className="text-sm text-green-400 font-semibold">
                          Present
                        </span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 border border-cyan-500/50 rounded-xl p-6 md:ml-12">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Software Development Intern
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-4">
                        Sharadha Educational Trust NGO
                      </p>
                      <p className="text-gray-300">
                        Contributing to impactful projects that combine
                        technology with social good, developing solutions to
                        help educational initiatives reach more students.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 w-4 h-4 bg-cyan-500 rounded-full border-4 border-gray-900"></div>
                </motion.div>

                {/* Education Started */}
                <motion.div {...fadeInUp} className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12 order-2 md:order-1 mt-4 md:mt-0">
                      <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6">
                        <h3 className="text-xl font-bold text-white mb-2">
                          Started BCA Journey
                        </h3>
                        <p className="text-cyan-400 font-semibold mb-4">
                          Graphic Era University
                        </p>
                        <p className="text-gray-300">
                          Began comprehensive computer science education, diving
                          deep into programming, algorithms, and software
                          development.
                        </p>
                      </div>
                    </div>
                    <div className="order-1 md:order-2 md:ml-12">
                      <div className="inline-block mb-2 px-3 py-1 bg-gray-800 border border-gray-700 rounded-full">
                        <span className="text-sm text-gray-400 font-semibold">
                          2024
                        </span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900"></div>
                </motion.div>

                {/* Leadership Role */}
                <motion.div {...fadeInUp} className="relative">
                  <div className="md:grid md:grid-cols-2 gap-8">
                    <div className="md:text-right md:pr-12">
                      <div className="inline-block mb-2 px-3 py-1 bg-gray-800 border border-gray-700 rounded-full">
                        <span className="text-sm text-gray-400 font-semibold">
                          2024
                        </span>
                      </div>
                    </div>
                    <div className="bg-gray-800/50 border border-gray-700 rounded-xl p-6 md:ml-12">
                      <h3 className="text-xl font-bold text-white mb-2">
                        Vice Head Boy & Captain
                      </h3>
                      <p className="text-cyan-400 font-semibold mb-4">
                        Hilton's School
                      </p>
                      <p className="text-gray-300">
                        Led school events, coordinated extracurricular
                        activities, and acted as a bridge between students and
                        faculty to improve school environment.
                      </p>
                    </div>
                  </div>
                  <div className="absolute left-0 md:left-1/2 transform md:-translate-x-1/2 -translate-y-4 w-4 h-4 bg-blue-600 rounded-full border-4 border-gray-900"></div>
                </motion.div>
              </div>
            </div>
          </div>
        </section>

        {/* Achievements */}
        <section className="py-20 px-6">
          <div className="max-w-6xl mx-auto">
            <motion.div {...fadeInUp} className="mb-12">
              <h2 className="text-sm uppercase tracking-widest text-cyan-500 mb-2">
                ACHIEVEMENTS
              </h2>
              <div className="w-12 h-0.5 bg-cyan-500"></div>
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <motion.div
                {...fadeInUp}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500 transition-all duration-300"
              >
                <FiAward className="w-12 h-12 text-cyan-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  450+ Problems Solved
                </h3>
                <p className="text-gray-300">
                  Successfully solved over 450 coding challenges across LeetCode
                  (180+) and GeeksforGeeks (290+), strengthening problem-solving
                  and algorithmic thinking.
                </p>
              </motion.div>

              <motion.div
                {...fadeInUp}
                className="bg-gradient-to-br from-cyan-500/10 to-blue-600/10 border border-cyan-500/30 rounded-xl p-8 hover:border-cyan-500 transition-all duration-300"
              >
                <FiBookOpen className="w-12 h-12 text-cyan-500 mb-4" />
                <h3 className="text-2xl font-bold text-white mb-2">
                  Academic Excellence
                </h3>
                <p className="text-gray-300">
                  Maintaining a stellar 9.15 CGPA while actively building
                  real-world projects and contributing to open-source
                  development.
                </p>
              </motion.div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-6 bg-gray-900/30">
          <div className="max-w-4xl mx-auto text-center">
            <motion.div {...fadeInUp}>
              <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
                Let's Build Something Amazing Together
              </h2>
              <p className="text-xl text-gray-300 mb-8">
                I'm always open to discussing new projects, creative ideas, or
                opportunities to be part of your vision.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <a
                  href="/contact"
                  className="px-8 py-4 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-600 hover:to-blue-700 text-white font-semibold rounded-full transition-all duration-300 shadow-lg shadow-cyan-500/25 hover:shadow-cyan-500/40 hover:scale-105"
                >
                  Get In Touch
                </a>
                <a
                  href="/projects"
                  className="px-8 py-4 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white font-semibold rounded-full transition-all duration-300"
                >
                  View My Work
                </a>
              </div>
            </motion.div>
          </div>
        </section>
      </div>
    </ClickSpark>
  );
};

export default About;
