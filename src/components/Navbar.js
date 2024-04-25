import React from "react";
import logo from "./logo.svg";
import { Link } from "react-router-dom";
// import { animate } from "framer-motion";
export default function Navbar() {
  window.addEventListener("scroll", function () {
    const navbar = document.querySelector(".navbar");
    if (window.scrollY > 0) {
      navbar.classList.add("navbar-scrolled");
    } else {
      navbar.classList.remove("navbar-scrolled");
    }
  });
  return (
    <>
      <nav class="navbar navbar-expand-lg navbar-light bg-primary-nav border-bottom border-1 br-trans container-fulid x-hidden ">
        <div class="container-fluid container bg-trans x-hidden ">
          <Link class="navbar-brand bg-trans" to="/">
            <img src={logo} alt="Logo" className="bg-trans" />
          </Link>
          <button
            class="navbar-toggler bg-blue-2"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            class="collapse navbar-collapse bg-trans"
            id="navbarSupportedContent"
          >
            <ul class="navbar-nav me-auto mb-2 mb-lg-0 gap-4 bg-trans">
              <li class="nav-item bg-trans">
                <a
                  class="nav-link  text-white poppins-regular bg-trans text-center"
                  aria-current="page"
                  href="/"
                >
                  AGENCY
                </a>
              </li>
              <li class="nav-item bg-trans ">
                <Link
                  class="nav-link text-white poppins-regular bg-trans text-center"
                  to="/service"
                >
                  SERVICES
                </Link>
              </li>
              <li class="nav-item bg-trans">
                <Link
                  class="nav-link text-white poppins-regular  bg-trans text-center"
                  to="/portfolio"
                >
                  PORTFOLIO
                </Link>
              </li>
              <li class="nav-item bg-trans">
                <Link
                  class="nav-link text-white poppins-regular bg-trans text-center "
                  to="/Career"
                >
                  CAREER
                </Link>
              </li>
              <li class="nav-item bg-trans">
                <a
                  class="nav-link text-white poppins-regular bg-trans text-center"
                  href="/"
                >
                  EVENTS
                </a>
              </li>
              <Link
                to="/contact"
                className="d-flex justify-content-center text-decoration-none"
              >
                <button type="button" class="contact-btn poppins-regular ">
                  CONTACT
                </button>
              </Link>
            </ul>
          </div>
        </div>
      </nav>
    </>
  );
}
