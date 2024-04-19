import React from "react";
// import openingsimg from "../img/openings.jpg";
import subj from "../ico/subject.svg";
import "../components/postions.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
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

export default function JrBDE() {
  return (
    <>
      <Navbar></Navbar>
      <div className="container mt-5">
        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          className="d-flex justify-content-center mt-5"
          viewport={{
            once: true,
          }}
        >
          <a href="/">
            <button className="btn-pos px-4 py-2 mt-5">
              Business Development Executive
            </button>
          </a>
        </motion.div>

        <motion.div
          variants={fadeInAnimationVariants}
          initial="initial"
          whileInView="animate"
          className="mt-4 d-flex align-items-start gap-5"
          viewport={{
            once: true,
          }}
        >
          <div>
            <p className="text-white">WE ARE HIRING</p>
            <h2 className="text-white fw-bold">
              Established Your Career With Laminds
            </h2>

            <p className=" mt-2 text-blue">
              LaMinds has an Opening for a B2B sales and marketing expert for a
              candidate with excellent writing skills and creativity. Here’s a
              list of Key Roles and the Ideal candidate we are looking for.
            </p>
            <div className="d-flex align-items-center gap-2">
              <div className="text-white">Share CV On </div>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                x="0px"
                y="0px"
                width="20"
                height="20"
                viewBox="0 0 48 48"
              >
                <path
                  fill="#4caf50"
                  d="M45,16.2l-5,2.75l-5,4.75L35,40h7c1.657,0,3-1.343,3-3V16.2z"
                ></path>
                <path
                  fill="#1e88e5"
                  d="M3,16.2l3.614,1.71L13,23.7V40H6c-1.657,0-3-1.343-3-3V16.2z"
                ></path>
                <polygon
                  fill="#e53935"
                  points="35,11.2 24,19.45 13,11.2 12,17 13,23.7 24,31.95 35,23.7 36,17"
                ></polygon>
                <path
                  fill="#c62828"
                  d="M3,12.298V16.2l10,7.5V11.2L9.876,8.859C9.132,8.301,8.228,8,7.298,8h0C4.924,8,3,9.924,3,12.298z"
                ></path>
                <path
                  fill="#fbc02d"
                  d="M45,12.298V16.2l-10,7.5V11.2l3.124-2.341C38.868,8.301,39.772,8,40.702,8h0 C43.076,8,45,9.924,45,12.298z"
                ></path>
              </svg>
              <div className="text-white">contact@laminds.com</div>
            </div>
            <hr className="text-white" />
            <div>
              <div>
                <div className="d-flex justify-content-between">
                  <div>
                    <h4 className="text-white mt-4 fs-bold">JOB SUMMARY</h4>
                    <div className="bg-gray-2  p-4">
                      <li className="text-white">Department : BDE</li>
                      <li className="text-white">
                        Project Location(s): Surat, IN
                      </li>
                      <li className="text-white">
                        Education: Bachelor’s (Required)
                      </li>
                      <li className="text-white">Work time: Full time</li>
                    </div>
                  </div>
                  <div>
                    <h4 className="text-white mt-4 fs-bold">IDEAL CANDIDATE</h4>
                    <div className="p-4">
                      <li className="text-white">
                        Native English Speaker or Fluent English
                      </li>
                      <li className="text-white">
                        Expert at Lead Generation through LinkedIn
                      </li>
                      <li className="text-white">
                        Expert at Bidding and Bringing Business from It
                      </li>
                      <li className="text-white">
                        Experiance in Freelance Portals
                      </li>
                    </div>
                  </div>
                </div>
                <div className="mt-5">
                  <h4 className="text-white">Responsibility Includes:</h4>
                  <div className="mt-5">
                    <div className="d-flex ">
                      <li className="text-white"></li>
                      <p className="text-white">
                        Candidate should be able to provide the brand a Firm
                        exposure to online bidding platforms like Upwork,
                        PeoplePerHour, Freelancer.com, etc.
                      </p>
                    </div>
                    <div className="d-flex mt-2">
                      <li className="text-white"></li>
                      <p className="text-white">
                        Should be able to quickly catch up and understand our
                        company’s business process model and bid on projects
                        that align with it.
                      </p>
                    </div>
                    <div className="d-flex mt-2">
                      <li className="text-white"></li>
                      <p className="text-white">
                        Will be in constant touch with international clients
                        from the UK, North American, and Australian clients.
                      </p>
                    </div>
                    <div className="d-flex mt-2">
                      <li className="text-white"></li>
                      <p className="text-white">
                        Must be skillful in Proposal writing, keeping
                        follow-ups, Setting up Email Marketing Campaigns for
                        cold email, and knowledge of Linked In Sales Navigator
                      </p>
                    </div>
                    <div className="d-flex mt-2">
                      <li className="text-white"></li>
                      <p className="text-white">
                        Cold calling when required and communicating with
                        prospects through chat and video calls via Skype.
                      </p>
                    </div>
                    <div className="d-flex mt-2">
                      <li className="text-white"></li>
                      <p className="text-white">
                        Understand and obtain clients’ needs and prepare various
                        presentations/case studies to showcase our work.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="d-flex flex-column gap-3 mt-4">
              <div>
                <form>
                  <h4 className="text-white mt-5 mb-5">Apply Job Now:</h4>
                  <div className="d-flex justify-content-between">
                    <div class="form-group">
                      <label for="fullName">Full Name:</label>
                      <input
                        type="text"
                        className="form-control"
                        id="fullName"
                        placeholder="Enter your full name"
                      />
                    </div>
                    <div className="form-group">
                      <label for="email">Email Address:</label>
                      <input
                        type="email"
                        className="form-control"
                        id="email"
                        placeholder="Enter your email address"
                      />
                    </div>
                  </div>
                  <div className="form-group mt-4">
                    <label for="phone">Phone Number:</label>
                    <input
                      type="tel"
                      className="form-control"
                      id="phone"
                      placeholder="Enter your phone number"
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label for="address">Address:</label>
                    <input
                      type="text"
                      className="form-control"
                      id="address"
                      placeholder="Enter your address"
                    />
                  </div>
                  <div className="form-group mt-4">
                    <label for="resume">Resume/CV:</label>
                    <input
                      type="file"
                      className="form-control-file"
                      id="resume"
                    />
                  </div>
                  <div className="form-group mt-4 ">
                    <label for="position">Position Applying For:</label>
                    <select className="form-control" id="position" required>
                      <option value="" disabled selected>
                        Select Position
                      </option>
                      <option value="Software Engineer">
                        Junior Business Devlopment Executive
                      </option>
                      <option value="Data Analyst">
                        Senior Dot Net Developer
                      </option>
                      <option value="Marketing Manager">
                        MS-SQL Developer
                      </option>
                    </select>
                  </div>

                  <button type="submit" className="btn btn-apply mt-4">
                    Apply Now
                  </button>
                </form>
              </div>
              <div className="d-flex gap-5 align-items-center border-blue visiblilty-0">
                <div>
                  <h4 className="text-white">Senior Dot Net Developer</h4>
                  <p className="text-white">
                    Develops scalable solutions .NET technologies in a highly
                    collaborative agile environment with strong experience in
                    C#,ASP.NET Core,Web API BE / B Tech / MCA or equivalent
                    professional degree C#,modern UI technologies and
                    database\ORM technologies
                  </p>
                </div>
                <button className="btn-apply">Apply Now</button>
              </div>
            </div>
          </div>
          <div className="p-2 bg-gray-2 box-2">
            <div>
              <div className="">
                <div className="d-flex flex-wrap align-items-center gap-2 justify-content-around">
                  <h4 className="text-white mt-5 mb-5">Company Overview</h4>
                  <div className="d-flex align-items-center gap-2 ">
                    <a href="/" className="text-decoration-none text-center">
                      <div className="text-white hr-btn ove-box d-flex justify-content-center align-items-center">
                        About <br />
                        Us
                      </div>
                    </a>
                    <a href="/" className="text-decoration-none text-center">
                      <div className="text-white hr-btn ove-box d-flex justify-content-center align-items-center">
                        Our <br />
                        Team
                      </div>
                    </a>
                  </div>
                  <div className="d-flex align-items-center gap-2 ">
                    <a href="/" className="text-decoration-none text-center">
                      <div className="text-white hr-btn ove-box d-flex justify-content-center align-items-center">
                        Price <br />
                        Plans
                      </div>
                    </a>
                    <a href="/" className="text-decoration-none text-center">
                      <div className="text-white hr-btn ove-box d-flex justify-content-center align-items-center">
                        Contact <br /> Us
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h3 className="text-white fw-bolder text-center mt-5">Laminds</h3>
              <div className="mt-5 d-flex flex-column align-items-center">
                <div className="text-white fs-4 text-center">
                  Best Solution For
                </div>
                <div className="text-blue fs-4 text-center fw-bolder">
                  Software Development
                </div>
                <p className="text-white text-center mt-3">
                  Build Your Website with Laminds
                </p>
                <button className="btn-apply">CONTACT US TODAY</button>
              </div>
              <img src={subj} alt="" width={"400px"} className="mt-5" />
            </div>
          </div>
        </motion.div>
      </div>
      <Footer></Footer>
    </>
  );
}
