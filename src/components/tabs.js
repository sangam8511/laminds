import React from "react";
import "./portfolio.css";

const Tabs = ({ activeTab, setActiveTab }) => {
  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <div className="tabs d-flex justify-content-center gap-2 flex-wrap">
      <button
        className={
          activeTab === "All"
            ? "active tabs-btn text-white fs-5 px-3 rounded-pill bf"
            : "text-white fs-5 px-3 rounded-pill bg-trans"
        }
        onClick={() => handleTabClick("All")}
      >
        All
      </button>
      <button
        className={
          activeTab === "Web Development"
            ? "active  tabs-btn text-white fs-5 px-3 rounded-pill"
            : "text-white fs-5 px-3 rounded-pill bg-trans"
        }
        onClick={() => handleTabClick("Web Development")}
      >
        Web Development
      </button>
      <button
        className={
          activeTab === "App Development"
            ? "active tabs-btn text-white fs-5 px-3 rounded-pill"
            : "text-white fs-5 px-3 rounded-pill bg-trans"
        }
        onClick={() => handleTabClick("App Development")}
      >
        App Development
      </button>
      <button
        className={
          activeTab === "Database Development"
            ? "active tabs-btn text-white fs-5 px-3 rounded-pill"
            : "text-white fs-5 px-3 rounded-pill bg-trans"
        }
        onClick={() => handleTabClick("Database Development")}
      >
        Database Development
      </button>
    </div>
  );
};

export default Tabs;
