import React from "react";
import "./footer.css";
import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <div>
      <footer class="footer mt-5">
        <div class="container">
          <div class="row">
            <div class="col-md-4">
              <h3>About Us</h3>
              <p>
                LaMinds is a leading IT solution provider in India & USA. We are
                currently at the forefront of offshore software development to
                serve the people across the world.
              </p>
              <div class="social-icons">
                <a href="/">
                  <i class="fab fa-facebook-f"></i>
                </a>
                <a href="/">
                  <i class="fab fa-twitter"></i>
                </a>
                <a href="/">
                  <i class="fab fa-instagram"></i>
                </a>
                <a href="/">
                  <i class="fab fa-linkedin-in"></i>
                </a>
              </div>
            </div>
            <div class="col-md-4">
              <h3>Quick Links</h3>
              <ul class="list-unstyled ">
                <li>
                  <Link to="/" className="text-decoration-none">
                    Agency
                  </Link>
                </li>
                <li>
                  <Link to="/service" className="text-decoration-none">
                    Services
                  </Link>
                </li>
                <li>
                  <Link to="/portfolio" className="text-decoration-none">
                    Portfolio
                  </Link>
                </li>
                <li>
                  <Link to="/career" className="text-decoration-none">
                    Career
                  </Link>
                </li>
                <li>
                  <Link to="/events" className="text-decoration-none">
                    Events
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-md-4">
              <h3>Newsletter</h3>
              <p>Subscribe to our newsletter for updates.</p>
              <form>
                <div class="form-group d-flex gap-2">
                  <input
                    type="email"
                    class="form-control"
                    id="exampleInputEmail1"
                    placeholder="Enter email"
                  />
                  <button type="submit" class="btn btn-primary " id="submit">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
          </div>
          <hr />
          <div class="row">
            <div class="col-md-12">
              <p class="text-center">
                &copy; 2024 Laminds. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
