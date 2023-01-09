import { useState } from "react";
import { Link } from "react-router-dom";

import useCart from "../../hooks/useCart";

import { IProductItem } from "../../types";

import "./item.scss";

const Item = (props: { item: IProductItem; tableState: boolean }) => {
  const { cartList, setCartList } = useCart();

  const isAddedToCart = (item: IProductItem): Boolean => {
    return cartList.find((product) => item.id === product.item.id) !== undefined
      ? true
      : false;
  };

  const [isAdded, setAdded] = useState(isAddedToCart(props.item));

  const buttonText = {
    notAdd: "Add to cart",
    added: "Drop",
  };

  return (
    <div className={`product ${isAdded ? "active" : ""} ${props.tableState ? "" : "list"}`}>
      <h3 className={`product_title ${props.tableState ? "" : "list"}`}>
        {props.item.title}
      </h3>
      <img
        className={`product_thumbnail ${props.tableState ? "" : "list"}`}
        src={props.item.thumbnail}
        alt={props.item.title}
      />
      <h3 className={`product_price ${props.tableState ? "" : "list"}`}>
        ${props.item.price}
      </h3>
      <div className={`product_buttons ${props.tableState ? "" : "list"}`}>
        <button
          className={`product_buttons__cart ${isAdded ? "active" : ""} ${
            props.tableState ? "" : "list"
          }`}
          onClick={() => {
            if (!isAdded) {
              setCartList([...cartList, { item: props.item, amount: 1 }]);
            } else {
              setCartList(
                cartList.filter((product) => product.item.id !== props.item.id)
              );
            }
            setAdded(!isAdded);
          }}
        >
          {isAdded ? buttonText.added : buttonText.notAdd}
        </button>
        <Link
          to={`/products/${props.item.category}/${props.item.brand}/${props.item.id}`}
          className="product_buttons__details"
        >
          Details
        </Link>
      </div>
    </div>
  );
};

export default Item;
