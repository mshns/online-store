import { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";

import storeItems from "../../StoreProducts/StoreProducts";
import ThumbnailList from "./components/thumbnailList";
import useCart from "../../hooks/useCart";

import { IPaymentVisible, IProductItem } from "../../types";

import "./productPage.scss";
import buttonText from "../../constants/productButtonText";

function ProductPage({ setPaymentVisible }: IPaymentVisible) {
  const { id } = useParams();

  const [product] = [...storeItems.filter((item) => item.id === Number(id))];

  const { cartList, setCartList } = useCart();

  const isAddedToCart = (item: IProductItem): Boolean => {
    return cartList.find((product) => item.id === product.item.id) !== undefined
      ? true
      : false;
  };

  const [isAdded, setAdded] = useState(isAddedToCart(product));

  const navigate = useNavigate();

  const handlerAddToCart = () => {
    if (!isAdded) {
      setCartList([...cartList, { item: product, amount: 1 }]);
    } else {
      setCartList(cartList.filter((item) => product.id !== item.item.id));
    }
    setAdded(!isAdded);
  };

  const handlerBuyNow = () => {
    navigate("/cart");
    if (!isAdded) {
      setCartList([...cartList, { item: product, amount: 1 }]);
    }
    setPaymentVisible(true);
  };

  return (
    <main className="card">
      <section className="card_breadcrumbs">
        <span className="breadcrumbs-item">Store</span>
        <span className="breadcrumbs-item">{product.category}</span>
        <span className="breadcrumbs-item">{product.brand}</span>
      </section>
      <section className="card_wrapper">
        <ThumbnailList product={product} />
        <div className="card-info">
          <h1 className="card_title">{product.title}</h1>
          <h2 className="card_price">
            <span className="card_price__subtitle">Price: </span>
            <span className="card_info__value">${product.price}</span>
          </h2>
          <div className="card_buttons">
            <button
              className={`card-button_cart ${isAdded && "active"}`}
              onClick={handlerAddToCart}
            >
              {isAdded ? buttonText.added : buttonText.notAdd}
            </button>
            <button className="card-button_buy" onClick={handlerBuyNow}>
              Buy now
            </button>
          </div>
          <p className="card_discription">
            <span className="card_discription__value">
              {product.description}
            </span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Category: </span>
            <span className="card_info__value">{product.category}</span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Brand: </span>
            <span className="card_info__value">{product.brand}</span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Discount: </span>
            <span className="card_info__value">
              {product.discountPercentage}%
            </span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Rating: </span>
            <span className="card_info__value">{product.rating}</span>
          </p>
          <p className="card_info">
            <span className="card_info__subtitle">Stock: </span>
            <span className="card_info__value">{product.stock}</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
