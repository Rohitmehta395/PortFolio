import { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import FeaturedProjectCard from "../components/FeaturedProjectCard";
import ProjectCard from "../components/ProjectCard";
import ClickSpark from "../components/ClickSpark";
import ShinyText from "../components/ShinyText";
import GradientText from "../components/GradientText";

const Projects = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(import.meta.env.VITE_API_URL + "/projects")
      .then((res) => {
        setProjects(res.data);
        setLoading(false);
      })
      .catch((err) => {
        console.log(err);
        setLoading(false);
      });
  }, []);

  const featuredProjects = projects.filter((p) => p.featured);
  const otherProjects = projects.filter((p) => !p.featured);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="animate-spin w-12 h-12 border-4 border-cyan-500 border-t-transparent rounded-full"></div>
      </div>
    );
  }

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
              className="text-[3rem] md:text-[8rem] lg:text-[15rem] font-black text-white leading-none mb-8"
            >
              <h1 className="font-bold">PROJECTS</h1>
            </GradientText>

            <ShinyText
              text="Let's take a look at my projects"
              disabled={false}
              speed={3}
              className="text-2xl md:text-3xl text-gray-400 font-light tracking-wider"
            />
          </motion.div>
        </section>

        {/* Featured Projects */}
        {featuredProjects.length > 0 && (
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                  FEATURED PROJECTS
                </h2>
                <div className="w-12 h-0.5 bg-cyan-500"></div>
              </motion.div>

              <div className="space-y-32">
                {featuredProjects.map((project, index) => (
                  <FeaturedProjectCard
                    key={project._id}
                    project={project}
                    index={index}
                    reversed={index % 2 !== 0}
                  />
                ))}
              </div>
            </div>
          </section>
        )}

        {/* More Projects */}
        {otherProjects.length > 0 && (
          <section className="py-20 px-6">
            <div className="max-w-7xl mx-auto">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="mb-12"
              >
                <h2 className="text-sm uppercase tracking-widest text-gray-500 mb-2">
                  MORE PROJECTS
                </h2>
                <div className="w-12 h-0.5 bg-cyan-500"></div>
              </motion.div>

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {otherProjects.map((project, index) => (
                  <ProjectCard
                    key={project._id}
                    project={project}
                    index={index}
                  />
                ))}
              </div>
            </div>
          </section>
        )}
      </div>
    </ClickSpark>
  );
};

export default Projects;
