import React from "react";
import ReactDOM from "react-dom/client";

import "./index.css";

import AnimationWrapper from "./AnimationWrapper";

import { BrowserRouter as Router } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <Router>
      <AnimationWrapper />
    </Router>
  </React.StrictMode>
);
