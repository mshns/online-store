import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";

import SortProvider from "./contexts/sortContext/SortContext";
import App from "./App";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SortProvider>
        <App />
      </SortProvider>
    </BrowserRouter>
  </React.StrictMode>
);
