import React from "react";
import data from "./webdev.jpg";
export default function Blog() {
  return (
    <div>
      <div className="container mt-5">
        <div className="d-flex  justify-content-between">
          <h2 className="text-white">Latest News & Blogs</h2>
          {/* <button className="viewbtn">View All</button> */}
        </div>

        <div>
          <div className="mt-4 d-flex flex-wrap justify-content-center gap-5">
            <div>
              <img
                src={data}
                alt=""
                className="img-fluid"
                style={{ width: "400px" }}
              />
              <h5 className="text-white mt-2 fs-5">APP DESIGN</h5>
              <div className="text-white fs-6">
                Complete Guid to boost your App
              </div>
              <p className="text-muted fs-6">App Development, UI Design</p>
            </div>
            <div>
              <img
                src={data}
                alt=""
                className="img-fluid"
                style={{ width: "400px" }}
              />
              <h5 className="text-white mt-2 fs-5">APP DESIGN</h5>
              <div className="text-white fs-6">
                Complete Guid to boost your App
              </div>
              <p className="text-muted fs-6">App Development, UI Design</p>
            </div>
            <div>
              <img
                src={data}
                alt=""
                className="img-fluid"
                style={{ width: "400px" }}
              />
              <h5 className="text-white mt-2 fs-5">APP DESIGN</h5>
              <div className="text-white fs-6">
                Complete Guid to boost your App
              </div>
              <p className="text-muted fs-6">App Development, UI Design</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
