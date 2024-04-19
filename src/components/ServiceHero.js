import React from "react";
// import ConatctImg from "../ico/contact.png";
import "../pages/contactpage.css";
export default function ServiceHero() {
  return (
    <div className="mt-5">
      <div className="mt-7 d-flex justify-content-center">
        <div className="container d-flex flex-column align-items-center ">
          <h2 className="text-white fs-1 fw-bolder text-center">
            WE GOT IT COVERD WITH <br /> THE SERVICES YOU NEED!
          </h2>
          <p className="text-white text-center width-5 mt-2">
            We help you achieve qualities in your IT strategy by providing you
            system integration, testing, application{" "}
            <span className="text-blue">development</span> and{" "}
            <span className="text-blue">management</span> services and
            solutions.
          </p>
          <div className="mt-3">
            <a href="#serve">
              <button className="btn-talk">Our Services</button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
