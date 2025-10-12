import { FiExternalLink, FiGithub } from "react-icons/fi";
import { motion } from "framer-motion";

const FeaturedProjectCard = ({ project, index, reversed }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: index * 0.2 }}
      className={`grid grid-cols-1 lg:grid-cols-2 gap-8 items-center ${
        reversed ? "lg:grid-flow-dense" : ""
      }`}
    >
      {/* Image */}
      <div className={`${reversed ? "lg:col-start-2" : ""} group relative`}>
        <div className="relative overflow-hidden rounded-lg border-2 border-white bg-gray-900">
          <img
            src={
              project.thumbnailUrl ||
              "https://via.placeholder.com/800x600?text=Project"
            }
            alt={project.title}
            className="w-full h-auto grayscale group-hover:grayscale-0 transition-all duration-500 group-hover:scale-105"
          />
        </div>
      </div>

      {/* Content */}
      <div className={reversed ? "lg:col-start-1 lg:row-start-1" : ""}>
        <h3 className="text-4xl md:text-5xl font-bold text-white mb-4">
          {project.title}
        </h3>

        <p className="text-gray-400 text-lg leading-relaxed mb-6">
          {project.shortDescription}
        </p>

        {/* Tech Stack */}
        <div className="flex flex-wrap gap-3 mb-6">
          {project.techStack.slice(0, 4).map((tech, i) => (
            <span
              key={i}
              className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded text-sm text-gray-300"
            >
              {tech}
            </span>
          ))}
          {project.techStack.length > 4 && (
            <span className="px-4 py-2 bg-gray-800/50 border border-gray-700 rounded text-sm text-gray-300">
              +{project.techStack.length - 4}
            </span>
          )}
        </div>

        {/* Links */}
        <div className="flex gap-4">
          {project.demoUrl && (
            <a
              href={project.demoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white rounded transition-all duration-300 flex items-center gap-2"
            >
              <span>View Demo</span>
              <FiExternalLink className="w-4 h-4" />
            </a>
          )}
          {project.repoUrl && (
            <a
              href={project.repoUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3 bg-transparent border-2 border-white hover:bg-white hover:text-black text-white rounded transition-all duration-300 flex items-center gap-2"
            >
              <span>View Code</span>
              <FiGithub className="w-4 h-4" />
            </a>
          )}
        </div>
      </div>
    </motion.div>
  );
};

export default FeaturedProjectCard;
