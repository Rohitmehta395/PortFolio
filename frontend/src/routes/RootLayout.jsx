import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";
import AnimatedBackground from "../components/AnimatedBackground";

const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="relative min-h-screen">
      {/* Animated Background */}
      <AnimatedBackground />

      {/* Navbar */}
      <Navbar />

      {/* Content with top padding to account for fixed navbar */}
      <div className="relative z-10 pt-20">
        <AnimatePresence mode="wait" initial={false}>
          <div key={location.pathname}>
            <Outlet />
          </div>
        </AnimatePresence>
      </div>
    </div>
  );
};

export default RootLayout;
