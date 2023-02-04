import { ICartItem } from "../../types";

const getPagesAmount = (items: ICartItem[], itemsAmount: number) => {
  return Math.ceil(items.length / itemsAmount);
};

export default getPagesAmount;
