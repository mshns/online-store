import { createContext, useState } from "react";
import { useSearchParams } from "react-router-dom";

import sortingProps from "../../constants/sortingProps";

import { IChildrenReactNode, ISortContext, SortingProps } from "../../types";

const SortProvider = ({ children }: IChildrenReactNode) => {
  const [searchParams] = useSearchParams();

  const brandsQueryParams = searchParams.get("brand");
  if (brandsQueryParams) {
    const brandsParams = brandsQueryParams.split("%");
    sortingProps.brand = brandsParams;
  }

  const categoriesQueryParams = searchParams.get("category");
  if (categoriesQueryParams) {
    const categoriesParams = categoriesQueryParams.split("%");
    sortingProps.category = categoriesParams;
  }

  const searchQueryParams = searchParams.get("search");
  if (searchQueryParams) {
    sortingProps.search = searchQueryParams;
  }

  const sortByQueryParams = searchParams.get("sortBy");
  if (sortByQueryParams) {
    sortingProps.sortBy = sortByQueryParams;
  }

  const itemsViewQueryParams = searchParams.get("itemsView");
  if (itemsViewQueryParams) {
    sortingProps.itemsView = itemsViewQueryParams;
  }

  const minPriceQueryParams = searchParams.get("minPrice");
  if (minPriceQueryParams) {
    sortingProps.minPrice = Number(minPriceQueryParams);
  }

  const maxPriceQueryParams = searchParams.get("maxPrice");
  if (maxPriceQueryParams) {
    sortingProps.maxPrice = Number(maxPriceQueryParams);
  }

  const minStockQueryParams = searchParams.get("minStock");
  if (minStockQueryParams) {
    sortingProps.minStock = Number(minStockQueryParams);
  }

  const maxStockQueryParams = searchParams.get("maxStock");
  if (maxStockQueryParams) {
    sortingProps.maxStock = Number(maxStockQueryParams);
  }

  const [sort, setSort] = useState<SortingProps>(sortingProps);

  return (
    <SortContext.Provider value={{ sort, setSort }}>
      {children}
    </SortContext.Provider>
  );
};

export const SortContext = createContext<ISortContext | null>(null);

export default SortProvider;
