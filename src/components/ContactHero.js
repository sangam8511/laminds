import React from "react";
import ConatctImg from "../ico/contact.png";
import "../pages/contactpage.css";
export default function ContactHero() {
  return (
    <div>
      <div className="position-relative d-flex justify-content-center">
        <img src={ConatctImg} alt="Contact" width={"100%"} height={"600px"} />
        <div className="container d-flex flex-column align-items-center position-absolute top-60">
          <h2 className="text-white fs-1 fw-bolder text-center">
            LET'S CONNECT WITH US!
          </h2>
          <p className="text-white text-center width-5">
            If you have any questions regarding our Services or Products, feel
            free to contact us anytime.
          </p>
          <div className="mt-2">
            <button className="btn-talk">Let's Talk</button>
          </div>
        </div>
      </div>
    </div>
  );
}
