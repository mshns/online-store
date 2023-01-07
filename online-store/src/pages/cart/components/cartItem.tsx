import { useState } from "react";
import useCart from "../../../hooks/useCart";
import { ICartItem } from "../../../types";

const CartItem = ({
  item,
  index,
}: {
  item: ICartItem;
  index: number;
}) => {
  const [amount, setAmount] = useState(item.amount);
  const { cartList, setCartList } = useCart();

  return (
    <div className="cart-item">
      <span className="cart-item_number">{index + 1}</span>
      <img
        className="cart-item_image"
        src={item.item.thumbnail}
        alt="Product Name"
      ></img>
      <div className="cart-item_info">
        <h3 className="item-info_title">{item.item.title}</h3>
        <p className="item-info_description">{item.item.description}</p>
        <div className="item-info_rating">Rating: {item.item.rating}</div>
        <div className="item-info_discount">
          Discount: {item.item.discountPercentage}%
        </div>
      </div>
      <div className="cart-item_amount">
        <div className="item-amount_stock">Stock: {item.item.stock}</div>
        <div className="item-amount_count">
          <span
            className="amount-count_button__remove"
            onClick={() => {
              if (amount === 1) {
                setCartList(
                  cartList.filter((product) => product.item.id !== item.item.id)
                );
              } else {
                setAmount(amount - 1);
                item.amount -= 1;
                setCartList([...cartList]);
              }
            }}
          >
            remove_circle_outline
          </span>
          <span className="amount-count_value">{amount}</span>
          <span
            className="amount-count_button__add"
            onClick={() => {
              if (amount < item.item.stock) {
                setAmount(amount + 1);
                item.amount += 1;
                setCartList([...cartList]);
              }
            }}
          >
            add_circle_outline
          </span>
        </div>
        <div className="item-amount_sum">${item.item.price * amount}</div>
      </div>
    </div>
  );
};

export default CartItem;
