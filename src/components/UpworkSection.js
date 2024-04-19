import React from "react";
import "./UpworkSection.css";
import upwork from "./upwork.svg";
import rate from "./rate.svg";
import client from "./client.svg";
import rocket from "./rocket.svg";
import { motion } from "framer-motion";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 200,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export default function UpworkSection() {
  return (
    <motion.div
      variants={fadeInAnimationVariants}
      initial="initial"
      transition={{ duration: 0.6 }}
      whileInView="animate"
      viewport={{
        once: true,
      }}
    >
      <div className="bg-blue mt-60 position-relative d-flex align-items-center">
        <div className="bg-trans container d-flex align-items-center justify-content-between flex-wrap">
          <img src={upwork} alt="" className="bg-trans" />
          <div className="bg-trans d-flex align-items-center flex-column  gap-2">
            <img src={rate} alt="" className="bg-trans" />
            <div className="bg-trans">
              <div className="text-white bg-trans fs-4 text-center poppins-bold">
                Top Rated Plus
              </div>
              <div className="text-white text-center bg-trans">
                100% Job Success
              </div>
            </div>
          </div>
          <div className="bg-trans d-flex align-items-center flex-column">
            <img src={client} alt="" className="bg-trans" width="30px" />
            <div className="bg-trans ">
              <div className="text-white bg-trans fs-4 text-center poppins-bold">
                Client Satisfaction
              </div>
              <div className="text-white text-center bg-trans">
                Happy Client
              </div>
            </div>
          </div>
          <div className="bg-trans d-flex align-items-center flex-column  gap-2">
            <img src={rocket} alt="" className="bg-trans" width="30px" />
            <div className="bg-trans">
              <div className="text-white bg-trans fs-4 text-center poppins-bold">
                Project Delivered
              </div>
              <div className="text-white text-center bg-trans">
                175+ Project
              </div>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
