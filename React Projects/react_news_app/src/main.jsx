import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./styles/index.css";
import App from "./App.jsx";
import { RouterProvider } from "react-router-dom";
import Routing from "./routing/Routing.jsx";
import { NewsContextProvider } from "./context/NewsContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <NewsContextProvider>
      <RouterProvider router={Routing} />
    </NewsContextProvider>
  </StrictMode>,
);
