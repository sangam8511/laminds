import React, { useState } from "react";
import "./portfolio.css";
import Tabs from "./tabs.js";
import ymca from "./ymca.jpg";
import youfit from "./youfit.jpg";
export default function Portfolio() {
  const [activeTab, setActiveTab] = useState("All");

  return React.createElement(
    "div",
    null,
    React.createElement(
      "div",
      { className: "mt-5 d-flex flex-column align-items-center" },
      React.createElement("div", { className: "blueline mb-2" }),
      React.createElement(
        "div",
        { className: "text-white fs-3" },
        "Our recent"
      ),
      React.createElement(
        "p",
        { className: "text-white fs-2 fw-bolder" },
        "Portfolio"
      )
    ),
    React.createElement(Tabs, {
      activeTab: activeTab,
      setActiveTab: setActiveTab,
    }),
    React.createElement(
      "div",
      { className: "tab-content, text-white container" },
      activeTab === "All" &&
        React.createElement(
          "div",
          { className: "d-flex justify-content-around flex-wrap" }, // Moved the comma here
          React.createElement(
            "div",
            { className: "portfolio-card mt-4" },
            React.createElement("img", {
              src: ymca,
              alt: "Portfolio Image",
              style: { width: "600px" },
            }),
            React.createElement(
              "h6",
              { className: "mt-4" }, // Corrected className to be a string
              "YMCA OF SOUTH FLORIDA"
            ),
            React.createElement(
              "p",
              { style: { width: "500px" } },
              "The YMCA is the leading nonprofit committed to strengthening individuals and communities across the country."
            )
          ),
          React.createElement(
            "div",
            { className: "portfolio-card mt-4" },
            React.createElement("img", {
              src: youfit,
              alt: "Portfolio Image",
              style: { width: "600px" },
            }),
            React.createElement(
              "h6",
              { className: "mt-4" }, // Corrected className to be a string
              "YouFit GYMS"
            ),
            React.createElement(
              "p",
              { style: { width: "500px" } },
              "YouFit Gyms starting at $9.99. No crowds! Access to new strength equipment, group classes, Personal Training for $25. "
            )
          )
        ),

      activeTab === "Web Development" &&
        React.createElement(
          "div",
          null,
          React.createElement("p", null, "Web development projects")
        ),
      activeTab === "App Development" &&
        React.createElement(
          "div",
          null,
          React.createElement("p", null, "App development projects")
        ),
      activeTab === "Database Development" &&
        // React.createElement(
        //   "div",
        //   null,
        //   React.createElement("p", null, "Database development projects")
        // ),
        React.createElement(
          "div",
          { className: "portfolio-card mt-4" },
          React.createElement("img", {
            src: ymca,
            alt: "Portfolio Image",
            style: { width: "500px" },
            className: "hover-opacity",
          }),
          React.createElement(
            "h6",
            { className: { width: "500px" } },
            null,
            "YMCA OF SOUTH FLORIDA"
          ),
          React.createElement(
            "p",
            { style: { width: "500px" } },
            null,
            "The YMCA is the leading nonprofit committed to strengthening individuals and communities across the country."
          )
        )
    )
  );
}
