import { ICartItem } from "../../types";

const setTotalItems = (itemsList: ICartItem[]) =>
    itemsList.reduce((accumulator, current) => accumulator + current.amount, 0);

export default setTotalItems;
