import { SortingProps } from "../../types";

const defaultSort = {
  brand: [],
  category: [],
  minPrice: 0,
  maxPrice: 1800,
  minStock: 0,
  maxStock: 150,
  sortBy: "",
  search: "",
  itemsView: "table",
};

const resetSort = (
  setSort: (arg0: SortingProps) => void
) => {
  setSort(defaultSort);
};

export default resetSort;
