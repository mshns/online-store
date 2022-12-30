import { IProductItem } from "../../types";
import "./item.scss";

function Item(item: IProductItem) {
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
        <button className="product_buttons__details">Details</button>
      </div>
    </div>
  );
}

export default Item;
