import { useState } from "react";
import { Link } from "react-router-dom";
import useCart from "../../hooks/useCart";
import { IProductItem } from "../../types";
import "./item.scss";

const Item = (item: IProductItem) => {
  const { cartList, setCartList } = useCart();
  const isAddedToCart = (item: IProductItem): Boolean => {
    return cartList.find((product) => item.id === product.id) !== undefined
      ? true
      : false;
  };
  const [isAdded, setAdded] = useState(isAddedToCart(item));
  const buttonText = {
    notAdd: "Add to cart",
    added: "Drop",
  };
  return (
    <div className="product">
      <h3 className="product_title">{item.title}</h3>
      <img
        className="product_thumbnail"
        src={item.thumbnail}
        alt={item.title}
      />
      <h3 className="product_price">${item.price}</h3>
      <div className="container product_buttons">
        <button
          className="product_buttons__cart"
          onClick={() => {
            if (!isAdded) {
              setCartList([...cartList, item]);
            } else {
              setCartList(cartList.filter((product) => product.id !== item.id));
            }
            setAdded(!isAdded);
          }}
        >
          {isAdded ? buttonText.added : buttonText.notAdd}
        </button>
        <Link
          to={`/products/${item.category}/${item.brand}/${item.id}`}
          className="product_buttons__details"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Item;
