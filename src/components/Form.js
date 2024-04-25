import React from "react";
import "./form.css";

export default function Form() {
  return (
    <div id="inqform">
      <div class="container mt-5 d-flex justify-content-center">
        <div className="bg-darkblue px-5 py-5">
          <h2 className="text-white text-center">For Project Inquiry</h2>
          <form>
            <div class="form-group  mt-5">
              <input
                type="text"
                class="form-control"
                id="exampleInputName"
                placeholder="Enter your name"
              />
            </div>
            <div class="form-group mt-4">
              <input
                type="email"
                class="form-control"
                id="exampleInputEmail"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
            </div>
            <div class="form-group mt-4">
              <input
                type="tel"
                class="form-control"
                id="examplePhone"
                aria-describedby="examplePhone"
                placeholder="+91 1234567890"
              />
            </div>
            <div class="form-group mt-4">
              <input
                type="text"
                class="form-control"
                id="exampleInputHire"
                aria-describedby="emailHire"
                placeholder="I Want To Hire For"
              />
            </div>
            <div class="form-group mt-4">
              <textarea
                type="text"
                class="form-control"
                id="exampleInputPassword"
                placeholder="Message"
              />
            </div>
            <div className="d-flex justify-content-center mt-4">
              <button type="submit" class="submitbtn">
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
