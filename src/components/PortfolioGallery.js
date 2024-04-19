import React from "react";
import "../pages/contactpage.css";
import ymca from "./ymca.jpg";
import youfit from "./youfit.jpg";
// import { motion } from "framer-motion";

export default function PortfolioGallery() {
  return (
    <div>
      <div className="container">
        <div className="d-flex bg-trans mt-5 gap-3 flex-wrap">
          <div>
            <div className="p-6 bg-gray iamg-hover">
              <a href="/">
                <img src={ymca} alt="" width={"500px"} className="" />
              </a>
            </div>
            <h4 className="text-white mt-3">YMCA SOUTH OF FLORIDA</h4>
            <a href="/" className="text-blue text-decoration-none">
              KNOW MORE
            </a>
          </div>
          <div>
            <div className="p-6 bg-gray iamg-hover">
              <a href="/">
                <img src={youfit} alt="" width={"500px"} className="" />
              </a>
            </div>
            <h4 className="text-white mt-3">YouFit Gym</h4>
            <a href="/" className="text-blue text-decoration-none">
              KNOW MORE
            </a>
          </div>
          <div>
            <div className="p-6 bg-gray iamg-hover">
              <a href="/">
                <img src={ymca} alt="" width={"500px"} className="" />
              </a>
            </div>
            <h4 className="text-white mt-3">YMCA SOUTH OF FLORIDA</h4>
            <a href="/" className="text-blue text-decoration-none">
              KNOW MORE
            </a>
          </div>
          <div>
            <div className="p-6 bg-gray iamg-hover">
              <a href="/">
                <img src={youfit} alt="" width={"500px"} className="" />
              </a>
            </div>
            <h4 className="text-white mt-3">YouFit Gym</h4>
            <a href="/" className="text-blue text-decoration-none">
              KNOW MORE
            </a>
          </div>
          <div>
            <div className="p-6 bg-gray iamg-hover">
              <a href="/">
                <img src={ymca} alt="" width={"500px"} className="" />
              </a>
            </div>
            <h4 className="text-white mt-3">YMCA SOUTH OF FLORIDA</h4>
            <a href="/" className="text-blue text-decoration-none">
              KNOW MORE
            </a>
          </div>
          <div>
            <div className="p-6 bg-gray iamg-hover">
              <a href="/">
                <img src={youfit} alt="" width={"500px"} className="" />
              </a>
            </div>
            <h4 className="text-white mt-3">YouFit Gym</h4>
            <a href="/" className="text-blue text-decoration-none">
              KNOW MORE
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
