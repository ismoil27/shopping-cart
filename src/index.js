import React from "react";
import Root from "./components/root";
import "./index.css";
import "bootstrap/dist/css/bootstrap.min.css";
// import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <React.StrictMode>
    <Root />
  </React.StrictMode>
);
