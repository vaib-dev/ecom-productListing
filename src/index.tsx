import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterProvider } from "Context/SelectedFilterContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
       <FilterProvider>
      <App />
      </FilterProvider>
  </React.StrictMode>
);
