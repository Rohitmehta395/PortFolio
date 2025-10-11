import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Navbar from "../components/Navbar";

const RootLayout = () => {
  const location = useLocation();

  return (
    <div className="bg-gray-900 text-white min-h-screen">
      <Navbar />
      <div className="relative overflow-hidden min-h-screen">
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
