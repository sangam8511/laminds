import React from "react";
import openingsimg from "../img/openings.jpg";
import subj from "../ico/subject.svg";
import "../components/postions.css";

export default function Postions() {
  return (
    <div className="container">
      <div className="d-flex justify-content-center">
        <a href="/">
          <button className="btn-pos px-4 py-2">OPEN POSITIONS</button>
        </a>
      </div>

      <div className="mt-4 d-flex align-items-start gap-5">
        <div>
          <p className="text-white">WE ARE HIRING</p>
          <h2 className="text-white fw-bold">Current Job Openings</h2>
          <img src={openingsimg} alt="" width={"500px"} className="mt-3" />
          <p className=" mt-5 text-blue">IF YOU ARE LOOKING FOR JOB</p>
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
          <h2 className="text-white mt-4 fs-bold">Open Posisions</h2>
          <div className="d-flex flex-column gap-3 mt-4">
            <div className="d-flex gap-5 align-items-center border-blue">
              <div>
                <h4 className="text-white">
                  Junior Business Devlopment Executive
                </h4>
                <p className="text-white">
                  We are looking for Business Development Executive for
                  maintaining customer relationships and ensuring customer
                  loyalty through excellent customer service.
                </p>
              </div>
              <a href="/jrbde">
                <button className="btn-apply">Apply Now</button>
              </a>
            </div>
            <div className="d-flex gap-5 align-items-center border-blue">
              <div>
                <h4 className="text-white">Senior Dot Net Developer</h4>
                <p className="text-white">
                  Develops scalable solutions .NET technologies in a highly
                  collaborative agile environment with strong experience in
                  C#,ASP.NET Core,Web API BE / B Tech / MCA or equivalent
                  professional degree C#,modern UI technologies and database\ORM
                  technologies
                </p>
              </div>
              <button className="btn-apply">Apply Now</button>
            </div>
            <div className="d-flex gap-5 align-items-center border-blue">
              <div>
                <h4 className="text-white">MS-SQL Developer</h4>
                <p className="text-white">
                  As an SQL Developer, you will develop MS-SQL queries and
                  procedures, create custom reports, and modify ERP user forms
                  to enhance organizational productivity. You will also be
                  responsible for designing databases and ensuring their
                  stability, reliability, and performance.
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
      </div>
    </div>
  );
}
