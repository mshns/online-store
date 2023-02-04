import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

import "./Item.scss";

import useCart from "../../hooks/useCart";

import { ITableItem, IProductItem } from "../../types";

const Item = ({ item, tableState }: ITableItem) => {
  const { cartList, setCartList } = useCart();

  const isAddedToCart = (item: IProductItem): Boolean => {
    return cartList.find((product) => item.id === product.item.id) !== undefined
      ? true
      : false;
  };

  const [isAdded, setAdded] = useState(isAddedToCart(item));

  const buttonText = {
    notAdd: "Add to cart",
    added: "Drop",
  };

  useEffect(() => {
    localStorage.setItem("cart", JSON.stringify(cartList));
  }, [cartList]);

  const addToCartButtonHandler = () => {
    if (!isAdded) {
      setCartList([...cartList, { item: item, amount: 1 }]);
    } else {
      setCartList(cartList.filter((product) => product.item.id !== item.id));
    }
    setAdded(!isAdded);
  };

  return (
    <div
      className={`product ${isAdded ? "active" : ""} ${
        tableState ? "" : "list"
      }`}
    >
      <h3 className={`product_title ${tableState ? "" : "list"}`}>
        {item.title}
      </h3>
      <img
        className={`product_thumbnail ${tableState ? "" : "list"}`}
        src={item.thumbnail}
        alt={item.title}
      />
      <h3 className={`product_price ${tableState ? "" : "list"}`}>
        ${item.price}
      </h3>
      <div className={`product_buttons ${tableState ? "" : "list"}`}>
        <button
          className={`product_buttons__cart ${isAdded ? "active" : ""} ${
            tableState ? "" : "list"
          }`}
          onClick={addToCartButtonHandler}
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
