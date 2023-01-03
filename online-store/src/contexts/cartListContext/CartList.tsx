import { createContext, ReactNode, useState } from "react";
import { ICartItem, ICartListContext } from "../../types";

const CartListProvider = ({ children }: { children: ReactNode }) => {
  const [cartList, setCartList] = useState<ICartItem[]>([]);
  return (
    <CartListContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartListContext.Provider>
  );
};

export const CartListContext = createContext<ICartListContext | null>(null);

export default CartListProvider;
