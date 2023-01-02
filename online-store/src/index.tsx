import React, { createContext, ReactNode, useState } from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { SortingProps, ISortContext } from "./types";

const root = ReactDOM.createRoot(
  document.getElementById("root") as HTMLElement
);

const sortingProps: SortingProps = {
  brand: [],
  category: [],
  minPrice: 0,
  maxPrice: 1800,
  minStock: 0,
  maxStock: 150,
  sortBy: "",
};

const SortProvider = ({ children }: { children: ReactNode }) => {
  const [sort, setSort] = useState<SortingProps>(sortingProps);

  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {children}
    </SortContext.Provider>
  );
};

export const SortContext = createContext<ISortContext | null>(null);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <SortProvider>
        <App />
      </SortProvider>
    </BrowserRouter>
  </React.StrictMode>
);
