import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Inspector } from "react-dev-inspector";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router-dom";

// When the application starts, i18n.ts is launched and executed, and consequently: i18n.use(...).init(...)
import "./i18n";
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
