import React from "react";
import "./quotation.css";
export default function PortfolioTalk() {
  return (
    <div>
      <div className="container h-7 mt-5 mb-5 d-flex  justify-content-around align-items-center">
        <div>
          <h1 className="text-white fs-1 fw-bold">
            Let’s work together on <br /> your next project
          </h1>
          <p className="text-white mt-4">
            Share your requirements with our team, and let our experts transform
            <br />
            your vision into a high-performing business model poised to maximize
            ROI for you
          </p>
        </div>
        <a href="#inqform">
          <button className="tabsc-btn">CONTACT</button>
        </a>
      </div>
    </div>
  );
}
