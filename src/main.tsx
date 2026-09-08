import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Inspector } from "react-dev-inspector";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Inspector>
      {" "}
      <BrowserRouter>
      <App />
      </BrowserRouter>
    </Inspector>
  </StrictMode>,
);
