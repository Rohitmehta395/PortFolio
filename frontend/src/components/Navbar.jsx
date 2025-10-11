import React from "react";
import logo from "../assets/new_rohit_circle.png";
import { NavLink, useNavigate } from "react-router-dom";
import { motion } from "framer-motion";

const Navbar = () => {
  const navigate = useNavigate();

  return (
    <nav className="bg-gray-900 border-b border-gray-800 px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        {/* Logo Section */}
        <div className="flex items-center space-x-3">
          <img
            src={logo}
            alt="logo"
            className="h-10 w-10 cursor-pointer hover:opacity-80 transition-opacity rounded-full"
            onClick={() => navigate("/")}
          />
          <div
            className="text-white cursor-pointer"
            onClick={() => navigate("/")}
          >
            <h2 className="text-lg font-bold">Rohit Mehta</h2>
            <p className="text-sm text-gray-400">Software Developer</p>
          </div>
        </div>

        {/* Navigation Links */}
        <ul className="hidden md:flex items-center space-x-1 bg-gray-800/50 rounded-lg p-1">
          <NavLink
            to="/"
            className={({ isActive }) =>
              `relative px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/30 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">Home</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/projects"
            className={({ isActive }) =>
              `relative px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/30 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">Projects</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/about"
            className={({ isActive }) =>
              `relative px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/30 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">About</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/experience"
            className={({ isActive }) =>
              `relative px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/30 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">Experience</span>
              </>
            )}
          </NavLink>

          <NavLink
            to="/contact"
            className={({ isActive }) =>
              `relative px-5 py-2 text-sm font-medium transition-colors duration-200 rounded-lg ${
                isActive ? "text-cyan-400" : "text-gray-300 hover:text-white"
              }`
            }
          >
            {({ isActive }) => (
              <>
                {isActive && (
                  <motion.div
                    layoutId="activeBackground"
                    className="absolute inset-0 bg-cyan-500/20 border border-cyan-500/30 rounded-lg"
                    initial={false}
                    transition={{
                      type: "spring",
                      stiffness: 500,
                      damping: 30,
                    }}
                  />
                )}
                <span className="relative z-10">Contact</span>
              </>
            )}
          </NavLink>
        </ul>

        {/* Resume Button */}
        <button
          onClick={() => navigate("/resume")}
          className="bg-cyan-500 hover:bg-cyan-600 text-white px-6 py-2 rounded-lg font-medium transition-colors duration-200 flex items-center space-x-2"
        >
          <span>Resume</span>
          <svg
            className="w-4 h-4"
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M9 5l7 7-7 7"
            />
          </svg>
        </button>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button className="text-gray-300 hover:text-white">
            <svg
              className="w-6 h-6"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
