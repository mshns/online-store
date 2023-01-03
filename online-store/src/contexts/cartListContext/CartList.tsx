import { createContext, ReactNode, useState } from "react";
import { ICartListContext, IProductItem } from "../../types";

const CartListProvider = ({ children }: { children: ReactNode }) => {
  const [cartList, setCartList] = useState<IProductItem[]>([]);
  return (
    <CartListContext.Provider value={{ cartList, setCartList }}>
      {children}
    </CartListContext.Provider>
  );
};

export const CartListContext = createContext<ICartListContext | null>(null);

export default CartListProvider;
