import { BrowserRouter as Router } from "react-router-dom";
import { ClickToComponent } from "click-to-react-component";

import React from "react";
import ReactDOM from "react-dom/client";

import App from "./App.jsx";
import "./style.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <ClickToComponent />
    <Router>
      <App />
    </Router>
  </React.StrictMode>
);
