import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { FilterDataProvider } from "./Context/FilterDataContext";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <FilterDataProvider>
      <App />
    </FilterDataProvider>
  </React.StrictMode>
);
