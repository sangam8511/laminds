import React from "react";
import "../pages/contactpage.css";
import { motion } from "framer-motion";
export default function CareerHero() {
  return (
    <div className="mt-5">
      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.3 }}
        className="mt-7 d-flex justify-content-center"
      >
        <div className="container d-flex flex-column align-items-center ">
          <h2 className="text-white fs-1 fw-bolder text-center">
            JOIN OUR <span className="text-blue">WINNING</span> TEAM.
          </h2>
          <p className="text-white text-center width-5 mt-2">
            Have a zeal to contribute to the real world and create a visible
            impact in business and lives of consumers? We are transforming
            business and consumer experience everyday using technology
          </p>
          <div className="mt-3">
            <a href="#serve">
              <button className="btn-talk">Join Us</button>
            </a>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
