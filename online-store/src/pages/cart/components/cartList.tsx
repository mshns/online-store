import { ICartItem } from "../../../types";
import CartItem from "./cartItem";

const CartList = ({ visibilityItems }: { visibilityItems: ICartItem[] }) => {
  return (
    <div className="cart_list">
      {visibilityItems.map((item, index) => (
        <CartItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default CartList;
