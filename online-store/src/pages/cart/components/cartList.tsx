import useCart from "../../../hooks/useCart";

const CartList = () => {
  const { cartList } = useCart();
  return (
    <div className="cart_list">
      {cartList.map((item, index) => (
        <div className="cart-item" key={index}>
          <span className="cart-item_number">{index + 1}</span>
          <img
            className="cart-item_image"
            src={item.thumbnail}
            alt="Product Name"
          ></img>
          <div className="cart-item_info">
            <h3 className="item-info_title">{item.title}</h3>
            <p className="item-info_description">{item.description}</p>
            <div className="item-info_rating">Rating: {item.rating}</div>
            <div className="item-info_discount">
              Discount: {item.discountPercentage}%
            </div>
          </div>
          <div className="cart-item_amount">
            <div className="item-amount_stock">Stock: {item.stock}</div>
            <div className="item-amount_count">
              <span className="amount-count_button__remove">
                remove_circle_outline
              </span>
              <span className="amount-count_value">1</span>
              <span className="amount-count_button__add">
                add_circle_outline
              </span>
            </div>
            <div className="item-amount_sum">${item.price}</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default CartList;
