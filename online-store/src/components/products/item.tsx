import { Link } from "react-router-dom";
import { IProductItem } from "../../types";
import "./item.scss";

const Item = (item: IProductItem) => {
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
        <button className="product_buttons__cart">Add to cart</button>
        <Link
          to={`/products/${item.category}/${item.brand}/${item.id}`}
          className="product_buttons__details"
        >
          Details
        </Link>
      </div>
    </div>
  );
}

export default Item;
