import React from "react";
import { href, Link } from "react-router-dom";
import { motion } from "framer-motion";
import logo from "../assets/new_rohit_circle.webp";
import {
  FiGithub,
  FiLinkedin,
  FiTwitter,
  FiInstagram,
  FiMail,
  FiMapPin,
  FiArrowUp,
} from "react-icons/fi";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const navLinks = [
    { to: "/", label: "Home" },
    { to: "/projects", label: "Projects" },
    { to: "/about", label: "About" },
    { to: "/experience", label: "Experience" },
    { to: "/contact", label: "Contact" },
  ];

  const socialLinks = [
    {
      icon: FiGithub,
      href: "https://github.com/Rohitmehta395",
      label: "GitHub",
    },
    {
      icon: FiLinkedin,
      href: "https://www.linkedin.com/in/rohitmehta395/",
      label: "LinkedIn",
    },
    {
      icon: FiInstagram,
      href: "https://www.instagram.com/rohit_._mehta/",
      label: "Instagram",
    },
    {
      icon: FiTwitter,
      href: "https://x.com/Mehta395",
      label: "X",
    },
    {
      icon: FiMail,
      href: "mailto:rohitmehtaddn@gmail.com",
      label: "Email",
    },
  ];

  return (
    <footer className="relative z-10 bg-gray-900/80 backdrop-blur-md border-t border-gray-800/50 mt-20">
      <div className="max-w-7xl mx-auto px-6 py-12">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-8">
          {/* Brand Section */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="lg:col-span-2"
          >
            <div className="flex items-center space-x-3">
              <img
                src={logo}
                alt="Rohit Mehta"
                className="w-10 h-10 rounded-full object-cover border-2 border-cyan-500/50 hover:border-cyan-500 transition-colors"
              />
              <h3 className="text-2xl font-bold text-white">Rohit Mehta</h3>
            </div>

            <p className="text-gray-400 mb-4 max-w-md">
              Full-stack developer passionate about creating beautiful and
              functional web experiences. Always learning, always building.
            </p>
            <div className="flex items-center gap-2 text-gray-400 mb-4">
              <FiMapPin className="w-4 h-4 text-cyan-500" />
              <span className="text-sm">Dehra Dūn, Uttarakhand, India</span>
            </div>
            <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-green-500/10 border border-green-500/30 rounded-full">
              <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
              <span className="text-sm text-green-400">Available for work</span>
            </div>
          </motion.div>

          {/* Quick Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
          >
            <h4 className="text-white font-semibold mb-4">Quick Links</h4>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <Link
                    to={link.to}
                    className="text-gray-400 hover:text-cyan-400 transition-colors duration-200 text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Social Links */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.2 }}
          >
            <h4 className="text-white font-semibold mb-4">Connect</h4>
            <div className="flex flex-wrap gap-3">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 flex items-center justify-center bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-gray-700 hover:border-transparent rounded-lg transition-all duration-300 group"
                  aria-label={social.label}
                >
                  <social.icon className="w-5 h-5 text-gray-400 group-hover:text-white transition-colors" />
                </a>
              ))}
            </div>
          </motion.div>
        </div>
        {/* Divider */}
        <div className="border-t border-gray-800/50 my-8"></div>

        {/* Bottom Bar */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="flex flex-col md:flex-row items-center justify-between gap-4"
        >
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Rohit Mehta. All rights reserved. Built with{" "}
            <span className="text-cyan-400">React</span> &{" "}
            <span className="text-cyan-400">Tailwind CSS</span>
          </p>

          {/* Back to Top Button */}
          <button
            onClick={scrollToTop}
            className="flex items-center gap-2 px-4 py-2 bg-gray-800/50 hover:bg-gradient-to-r hover:from-cyan-500 hover:to-blue-600 border border-gray-700 hover:border-transparent rounded-lg transition-all duration-300 group"
            aria-label="Back to top"
          >
            <span className="text-sm text-gray-400 group-hover:text-white transition-colors">
              Back to top
            </span>
            <FiArrowUp className="w-4 h-4 text-gray-400 group-hover:text-white transition-colors" />
          </button>
        </motion.div>
      </div>
    </footer>
  );
};

export default Footer;
