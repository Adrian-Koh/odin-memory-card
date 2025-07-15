import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Cards from "./components/Cards.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Cards />
  </StrictMode>,
);
