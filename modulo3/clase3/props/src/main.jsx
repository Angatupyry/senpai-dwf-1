import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { Cat } from "./Cat.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cat />
  </StrictMode>
);
