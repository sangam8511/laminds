import React from "react";
// import ConatctImg from "../ico/contact.png";
import "../pages/contactpage.css";
import { motion } from "framer-motion";
export default function PortfolioHero() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.3 }}
      className="mt-5"
    >
      <div className="mt-7 d-flex justify-content-center">
        <div className="container d-flex flex-column align-items-center ">
          <h2 className="text-white fs-1 fw-bolder text-center">
            SUCCESSFULLY COMPLETED <br /> OVER 175+ PROJECTS
          </h2>
          <p className="text-white text-center width-5 mt-2">
            Our pixel perfect sites which Helps in{" "}
            <span className="text-blue fw-bold">Growth</span> of Clients
            Business.
          </p>
          <div className="mt-3">
            <a href="#serve">
              <button className="btn-talk">Contact Us</button>
            </a>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
