import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import Contact from "./pages/ContactPage";
import Service from "./pages/ServicePage";
import Portfolio from "./pages/PortfolioPage";
import Career from "./pages/CareerPage";
import JrBDE from "./components/JrBDE";
import reportWebVitals from "./reportWebVitals";

import { createBrowserRouter, RouterProvider } from "react-router-dom";
const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
  },
  {
    path: "contact",
    element: <Contact />,
  },
  {
    path: "service",
    element: <Service />,
  },
  {
    path: "portfolio",
    element: <Portfolio />,
  },
  {
    path: "Career",
    element: <Career />,
  },
  {
    path: "jrbde",
    element: <JrBDE />,
  },
]);

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<RouterProvider router={router} />);

reportWebVitals();
