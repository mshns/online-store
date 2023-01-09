import { useContext } from "react";
import { CartListContext } from "../contexts/cartListContext/CartList";
import { ICartListContext } from "../types";

const useCart = (): ICartListContext => {
  const ctx = useContext(CartListContext);
  if (ctx === null) {
    throw new Error("Context not avalible");
  }
  return ctx;
};

export default useCart;
