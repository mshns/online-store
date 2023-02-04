import { ICartItem } from "../../types";

const getVisibleItems = (
  items: ICartItem[],
  amountOfVisibleItems: number,
  pageNumber: number
) => {
  return items.filter(
    (_, index) =>
      index >= amountOfVisibleItems * (pageNumber - 1) &&
      index < amountOfVisibleItems * pageNumber
  );
};

export default getVisibleItems;
