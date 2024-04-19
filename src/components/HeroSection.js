import React, { useEffect, useState } from "react";
import "./HeroSection.css";
import ellipseImage from "./Ellipse 192.svg";
import hero from "./herogroup.svg";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [typedText, setTypedText] = useState("");
  const textToType = "Software Development"; // Text to type out
  const typingSpeed = 200; // Typing speed in milliseconds

  useEffect(() => {
    let currentIndex = 0;
    const interval = setInterval(() => {
      if (currentIndex <= textToType.length) {
        setTypedText(textToType.substring(0, currentIndex));
        currentIndex++;
      } else {
        clearInterval(interval);
      }
    }, typingSpeed);
    return () => clearInterval(interval);
  }, []);

  return (
    <>
      <div className="d-flex justify-content-end position-absolute z-index right ">
        <img src={ellipseImage} alt="" />
      </div>
      <div className="d-flex container container-fluid mt-5 position-relative bg-trans align-items-start flx-wrap pt  ">
        <div className="left-hero-section d-flex flex-column gap-4 bg-trans">
          <motion.div
            initial={{ x: "50%" }}
            whileInView={{ x: "0%" }}
            transition={{ duration: 1 }}
            className="bg-trans"
            viewport={{
              once: true,
            }}
          >
            <h6 className="text-white fs-1 fw-lighter bg-trans">
              We are Top-Notch
            </h6>
            <h1 className="text-blue fs-1 fw-bolder bg-trans" id="text-effect">
              {typedText}
            </h1>
            <h6 className="text-white fs-1 fw-lighter bg-trans">Agency</h6>
          </motion.div>
          <div className="bg-trans">
            <motion.p
              initial={{ y: "200%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1 }}
              className="text-white bg-trans w-60 "
            >
              LaMinds is a leading IT solution provider in India & USA. We are
              currently at the forefront of offshore software development to
              serve the people across the world.
            </motion.p>
            <motion.div
              initial={{ y: "200%" }}
              animate={{ y: "0%" }}
              transition={{ duration: 1 }}
              className="d-flex gap-3 bg-trans mb-5"
            >
              <a href="/" className="bg-trans">
                <button className="contact-bttn bg-trans">Contact Us</button>
              </a>
              <a href="/" className="bg-trans">
                <button className="service-btn">Our Services</button>
              </a>
            </motion.div>
          </div>
        </div>
        <div className="bg-trans">
          <div className="bg-trans position-relative">
            <motion.img
              initial={{ x: "-50%" }}
              animate={{ x: "0" }}
              transition={{ duration: 1 }}
              src={hero}
              alt=""
              className="bg-trans z-index-1 position-relative img-fluid"
              // width="500px"
            />
          </div>
        </div>
      </div>
    </>
  );
}
