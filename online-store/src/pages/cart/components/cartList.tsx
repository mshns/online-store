import { ICartItem } from "../../../types";
import CartItem from "./cartItem";

const CartList = ({ items }: { items: ICartItem[] }) => {
  return (
    <div className="cart_list">
      {items.map((item, index) => (
        <CartItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default CartList;
