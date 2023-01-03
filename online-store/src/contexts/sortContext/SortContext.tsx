import { createContext, ReactNode, useState } from "react";
import { ISortContext, SortingProps } from "../../types";

const SortProvider = ({ children }: { children: ReactNode }) => {
  const sortingProps: SortingProps = {
    brand: [],
    category: [],
    minPrice: 0,
    maxPrice: 1800,
    minStock: 0,
    maxStock: 150,
    sortBy: "",
    search: "",
  };

  const [sort, setSort] = useState<SortingProps>(sortingProps);

  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {children}
    </SortContext.Provider>
  );
};

export const SortContext = createContext<ISortContext | null>(null);

export default SortProvider;
