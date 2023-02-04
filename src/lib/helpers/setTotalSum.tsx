import { ICartItem } from "../../types";

const setTotalSum = (itemsList: ICartItem[]) =>
  itemsList.reduce(
    (accumulator, current) => accumulator + current.item.price * current.amount,
    0
  );

export default setTotalSum;
