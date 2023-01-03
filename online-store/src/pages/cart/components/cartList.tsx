import useCart from "../../../hooks/useCart";
import CartItem from "./cartItem";

const CartList = () => {
  const { cartList } = useCart();
  return (
    <div className="cart_list">
      {cartList.map((item, index) => (
        <CartItem item={item} index={index} key={index} />
      ))}
    </div>
  );
};

export default CartList;
