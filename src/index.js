// package
import React from "react";
import ReactDOM from "react-dom/client";
// styles
import "./index.css";
// components
import App from "./App";
import { AppContext } from "./context/contextApi";

// Root
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <AppContext>
    <App />
  </AppContext>
);