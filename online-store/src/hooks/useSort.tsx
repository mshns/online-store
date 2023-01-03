import { useContext } from "react";
import { SortContext } from "../contexts/sortContext/SortContext";
import { ISortContext } from "../types";

const useSort = (): ISortContext => {
  const ctx = useContext(SortContext);
  if (ctx === null) {
    throw new Error("Context not avalible");
  }
  return ctx;
};

export default useSort;
