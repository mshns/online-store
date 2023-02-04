import { ISortingList } from "../types";

const sortingList: ISortingList[] = [
  {
    title: "By price (to lower)",
    searchURL: "priceToLower",
  },
  {
    title: "By price (to higher)",
    searchURL: "priceToHigher",
  },
  {
    title: "By rating (to lower)",
    searchURL: "ratingToLower",
  },
  {
    title: "By rating (to higher)",
    searchURL: "ratingToHigher",
  },
];

export default sortingList;
