import "./productPage.scss";
import storeItems from "../../storeProducts/storeProducts";
import { useParams } from "react-router-dom";
import ThumbnailList from "./components/thumbnailList";
import useCart from "../../hooks/useCart";
import { useState } from "react";
import { IProductItem } from "../../types";

function ProductPage() {
  const { id } = useParams();
  const [product] = [...storeItems.filter((item) => item.id === Number(id))];
  const { cartList, setCartList } = useCart();
  const isAddedToCart = (item: IProductItem): Boolean => {
    return cartList.find((product) => item.id === product.id) !== undefined
      ? true
      : false;
  };
  const [isAdded, setAdded] = useState(isAddedToCart(product));
  const buttonText = {
    notAdd: "Add to cart",
    added: "Drop",
  };
  return (
    <main className="card">
      <section className="card_breadcrumbs">
        <span className="breadcrumbs-item">Store</span>
        <span className="breadcrumbs-item">{product.category}</span>
        <span className="breadcrumbs-item">{product.brand}</span>
      </section>
      <section className="card_wrapper">
        <div className="card-info">
          <h1 className="card_title">{product.title}</h1>
          <h2 className="card_price">
            <span className="card_price__subtitle">Price: </span>
            <span className="card_price__value">${product.price}</span>
          </h2>
          <div className="card_buttons">
            <button
              className="card-button_cart"
              onClick={() => {
                if (!isAdded) {
                  setCartList([...cartList, product]);
                } else {
                  setCartList(
                    cartList.filter((item) => product.id !== item.id)
                  );
                }
                setAdded(!isAdded);
              }}
            >
              {isAdded ? buttonText.added : buttonText.notAdd}
            </button>
            <button className="card-button_buy">Buy now</button>
          </div>
          <ThumbnailList product={product} />
          <p className="card_discription">
            <span className="card_discription__value">
              {product.description}
            </span>
          </p>
          <p className="card_discount">
            <span className="card_discount__subtitle">Discount: </span>
            <span className="card_discount__value">
              {product.discountPercentage}%
            </span>
          </p>
          <p className="card_rating">
            <span className="card_rating__subtitle">Rating: </span>
            <span className="card_rating__value">{product.rating}</span>
          </p>
          <p className="card_stock">
            <span className="card_stock__subtitle">Stock: </span>
            <span className="card_stock__value">{product.stock}</span>
          </p>
        </div>
      </section>
    </main>
  );
}

export default ProductPage;
