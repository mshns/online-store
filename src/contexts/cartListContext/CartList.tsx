import { createContext, useState } from "react";

import { ICartItem, ICartListContext, IChildrenReactNode } from "../../types";

const CartListProvider = ({ children }: IChildrenReactNode) => {
  const getCartFromLocalStorage = () => {
    if (localStorage.getItem("cart")) {
      const stringyCart: string = localStorage.getItem("cart") || "";
      return JSON.parse(stringyCart);
    }
    return [];
  };

  const [cartList, setCartList] = useState<ICartItem[]>(
    getCartFromLocalStorage()
  );
  return (
    <CartListContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartListContext.Provider>
  );
};

export const CartListContext = createContext<ICartListContext | null>(null);

export default CartListProvider;
