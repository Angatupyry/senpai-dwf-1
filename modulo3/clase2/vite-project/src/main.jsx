import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { HolaMundo } from "./HolaMundo";
import { Greetings } from "./Greetings";
import { MiReceta } from "./MiReceta";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    {/* <HolaMundo />
    <Greetings nombre='Juanpa' apellido='Duarte' /> */}
    <MiReceta />
  </StrictMode>
);
