import React from "react";
import "./design.css";
import ux from "./x.svg";
import planning from "../ico/planning.png";
import  development from "../ico/development.png";
import  codereveiw from "../ico/codereviewmain.png";
import  testing from "../ico/testing.png";
import website from "../img/website.png";
import { motion } from "framer-motion";
const fadeInAnimationVariants = {
  initial: {
    opacity: 0,
    y: 100,
  },
  animate: {
    opacity: 1,
    y: 0,
  },
};
export default function Design() {
  return (
    <div>
      <div className="text-center mt-4 d-flex flex-column align-items-center container">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6 }}
          viewport={{
            once: true,
          }}
          className="blueline mb-2"
        ></motion.div>
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6 }}
          viewport={{
            once: true,
          }}
          className="text-white fs-3"
        >
          Our design and
        </motion.div>
        <motion.p
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6 }}
          viewport={{
            once: true,
          }}
          className="text-white fs-2 fw-bolder"
        >
          development approach
        </motion.p>
        <motion.div
          className=" d-flex  justify-content-center align-items-center"
          id="flex-column"
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{
            once: true,
          }}
        >
          {/* <div>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 0.2 }}
              viewport={{
                once: true,
              }}
              className="service-box-1  d-flex flex-column align-items-center justify-content-center"
            >
              <div className="d-flex align-items-start gap-3">
                <img src={ux} alt="" />
                <div className="d-flex  flex-column gap-3">
                  <div className="text-white fs-3 text-start">
                    Planning and Discovery
                  </div>
                  <p className="text-white text-start m-width">
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 0.4 }}
              viewport={{
                once: true,
              }}
              className="service-box-1 d-flex flex-column align-items-center justify-content-center"
            >
              <div className="d-flex align-items-start gap-3">
                <img src={ux} alt="" />
                <div className="d-flex flex-column gap-3">
                  <div className="text-white fs-3 text-start">
                    UX Driven Engineering
                  </div>
                  <p className="text-white text-start m-width">
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 0.6 }}
              viewport={{
                once: true,
              }}
              className="service-box-1 d-flex flex-column align-items-center justify-content-center"
            >
              <div className="d-flex align-items-start gap-3">
                <img src={ux} alt="" />
                <div className="d-flex flex-column gap-3">
                  <div className="text-white fs-3 text-start">Development</div>
                  <p className="text-white text-start m-width">
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </motion.div>
          </div> */}
          <div>
            <div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-start gap-3 service-box-1 ">
                  <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.6 }}
                    viewport={{
                      once: true,
                    }}
                    className="d-flex align-items-center flex-column-reverse-1"
                  >
                    <div>
                      <div className="text-white fs-3 text-start text-center-1 fw-bold mt-2">
                        Planning
                      </div>
                      <p className="text-white text-start text-center-1">
                        Unlike other companies, we are a UX first development
                        company. Projects are driven by designers and they make
                        sure design and experiences translate to code.
                      </p>
                    </div>
                    <img src={planning} alt="" height={"100px"} />
                  </motion.div>
                </div>
                <div className="d-flex align-items-start gap-3 service-box-1">
                  <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{duration: 0.6}}
                    viewport={{
                      once: true,
                    }}
                    className="d-flex align-items-center flex-column-reverse-1"
                  >
                    <div>
                      <div className="text-white fs-3 text-start text-center-1 fw-bold mt-2">
                        UI/UX Design
                      </div>
                      <p className="text-white text-start text-center-1">
                        Unlike other companies, we are a UX first development
                        company. Projects are driven by designers and they make
                        sure design and experiences translate to code.
                      </p>
                    </div>
                    <img src={ux} alt="" height={"100px"} />
                  </motion.div>
                </div>
                <div className="d-flex align-items-center gap-3 service-box-1">
                  <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.6 }}
                    viewport={{
                      once: true,
                    }}
                    className="d-flex align-items-center flex-column-reverse-1"
                  >
                    <div>
                      <div className="text-white fs-3 text-start text-center-1 fw-bold mt-2">
                        Development
                      </div>
                      <p className="text-white text-start text-center-1">
                        Unlike other companies, we are a UX first development
                        company. Projects are driven by designers and they make
                        sure design and experiences translate to code.
                      </p>
                    </div>
                    <img src={development} alt="" height={"100px"} />
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          <div>
            <img src={website} alt="" width={"400px"} id="img-2" />
          </div>
          <div>
            <div>
              <div className="d-flex flex-column gap-3">
                <div className="d-flex align-items-start gap-3 service-box-1 mt-3">
                  <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.6 }}
                    viewport={{
                      once: true,
                    }}
                    className="d-flex gap-3 align-items-center flex-column-normal"
                  >
                    <img src={codereveiw} alt="" height={"100px"} />
                    <div>
                      <div className="text-white fs-3 text-start text-center-1 fw-bold mt-2">
                        Code Review
                      </div>
                      <p className="text-white text-start  text-center-1">
                        Unlike other companies, we are a UX first development
                        company. Projects are driven by designers and they make
                        sure design and experiences translate to code.
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="d-flex align-items-start gap-3 service-box-1">
                  <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.6 }}
                    viewport={{
                      once: true,
                    }}
                    className="d-flex gap-3 align-items-center flex-column-normal"
                  >
                    <img src={testing} alt="" height={"100px"} />
                    <div>
                      <div className="text-white fs-3 text-start text-center-1 fw-bold mt-2">
                        Testing and Quality Assurance
                      </div>
                      <p className="text-white text-start text-center-1">
                        Unlike other companies, we are a UX first development
                        company. Projects are driven by designers
                      </p>
                    </div>
                  </motion.div>
                </div>
                <div className="d-flex align-items-start gap-3 service-box-1">
                  <motion.div
                    variants={fadeInAnimationVariants}
                    initial="initial"
                    whileInView="animate"
                    transition={{ duration: 0.6 }}
                    viewport={{
                      once: true,
                    }}
                    className="d-flex gap-3 align-items-center flex-column-normal"
                  >
                    <img src={ux} alt="" height={"100px"} />
                    <div>
                      <div className="text-white fs-3 text-start text-center-1 fw-bold mt-2">
                        Deployment
                      </div>
                      <p className="text-white text-start text-center-1">
                        Unlike other companies, we are a UX first development
                        company. Projects are driven by designers and they make
                        sure design and experiences translate to code.
                      </p>
                    </div>
                  </motion.div>
                </div>
              </div>
            </div>
          </div>
          {/* <div>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 0.8 }}
              viewport={{
                once: true,
              }}
              className="service-box-1 d-flex flex-column align-items-center justify-content-center"
            >
              <div className="d-flex align-items-start gap-3">
                <img src={ux} alt="" />
                <div className="d-flex flex-column gap-3">
                  <div className="text-white fs-3 text-start">Code Review</div>
                  <p className="text-white text-start m-width">
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 1 }}
              viewport={{
                once: true,
              }}
              className="service-box-1 d-flex flex-column align-items-center justify-content-center"
            >
              <div className="d-flex align-items-start gap-3">
                <img src={ux} alt="" />
                <div className="d-flex flex-column gap-3">
                  <div className="text-white fs-3 text-start">
                    Testing and Quailty Assurance
                  </div>
                  <p className="text-white text-start m-width">
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </motion.div>
            <motion.div
              variants={fadeInAnimationVariants}
              initial="initial"
              whileInView="animate"
              transition={{ duration: 0.6, delay: 1.2 }}
              viewport={{
                once: true,
              }}
              className="service-box-1 d-flex flex-column align-items-center justify-content-center"
            >
              <div className="d-flex align-items-start gap-3">
                <img src={ux} alt="" />
                <div className="d-flex  flex-column gap-3">
                  <div className="text-white fs-3 text-start">Deployment</div>
                  <p className="text-white text-start m-width">
                    Unlike other companies, we are a UX first development
                    company. Projects are driven by designers and they make sure
                    design and experiences translate to code.
                  </p>
                </div>
              </div>
            </motion.div>
          </div> */}
        </motion.div>
      </div>
    </div>
  );
}
