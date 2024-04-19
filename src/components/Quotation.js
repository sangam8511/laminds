import React from "react";
import "./quotation.css";
export default function Quotation() {
  return (
    <div>
      <div className="container h-6 mt-5 mb-5 d-flex flex-column justify-content-center align-items-center">
        <h1 className="text-white">
          <span className="text-blue fs-h fw-bold">Let's Discuss</span> Your
          Project
        </h1>
        <p className="text-white">
          Share your requirements with our team, and let our experts transform
          your vision into a high-performing business model poised to maximize
          ROI for you
        </p>
        <a href="#inqform">
          <button className="tabs-btn">Get Quote</button>
        </a>
      </div>
    </div>
  );
}
