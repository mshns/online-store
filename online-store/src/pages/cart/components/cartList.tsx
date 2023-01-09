import { Link } from "react-router-dom";
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
    return (
      <div className="notice">
        <h2 className="notice_title">Cart is empty</h2>
        <span className="notice_image ">production_quantity_limits</span>
        <Link to="/" className="notice_button">
          Back to store
        </Link>
      </div>
    );
  }
};

export default CartList;
