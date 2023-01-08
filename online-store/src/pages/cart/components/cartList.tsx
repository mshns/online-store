import useCart from "../../../hooks/useCart";
import { ICartItem } from "../../../types";
import CartItem from "./cartItem";

const CartList = ({ visibilityItems }: { visibilityItems: ICartItem[] }) => {
  const { cartList } = useCart();
  if (cartList.length) {
    return (
      <div className="cart_list">
        {visibilityItems.map((item, index) => (
          <CartItem item={item} index={index} key={index} />
        ))}
      </div>
    );
  } else {
    return <h2>Nothing</h2>;
  }
};

export default CartList;
