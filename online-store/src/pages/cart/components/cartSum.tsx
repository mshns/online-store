import { useEffect, useState } from "react";
import useCart from "../../../hooks/useCart";
import { ICartItem } from "../../../types";

const CartSumBlock = (props: {
  setPaymentVisible: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
  const { cartList } = useCart();
  const getTotalSum = (itemsList: ICartItem[]) =>
    itemsList.reduce((acc, curr) => acc + curr.item.price * curr.amount, 0);
  const getTotalItems = (itemsList: ICartItem[]) =>
    itemsList.reduce((acc, curr) => acc + curr.amount, 0);
  const [totalSum, changeTotalSum] = useState(getTotalSum(cartList));
  const [totalItems, changeTotalItems] = useState(getTotalItems(cartList));

  useEffect(() => {
    changeTotalSum(getTotalSum(cartList));
    changeTotalItems(getTotalItems(cartList));
  }, [cartList]);

  return (
    <section className="cart_sum">
      <h2 className="cart_subtitle">Summary</h2>
      <div className="cart-sum_field">
        <span className="field_title">Products</span>
        <span className="products-count">{totalItems}</span>
      </div>
      <div className="cart-sum_field">
        <span className="field_title">Total price</span>
        <span className="total-price">${totalSum}</span>
      </div>
      <form className="cart-sum_field">
        <label htmlFor="promo-code">Promo code</label>
        <input
          className="cart-sum_input"
          type="text"
          placeholder="Enter code"
          id="promo-code"
        />
        <input className="cart-sum_submit" type="submit" value="Add" />
      </form>
      <button
        className="cart-sum_button"
        onClick={(evt) => {
          props.setPaymentVisible(() => true);
        }}
      >
        Buy now
      </button>
    </section>
  );
};

export default CartSumBlock;
