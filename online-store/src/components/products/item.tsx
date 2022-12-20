import { ProductObject } from "../../types";
import './item.scss'

function Item(item: ProductObject) {
  return (
    <div className="item">
      <h3>{item.title}</h3>
      <p>{item.price}</p>
      <p>{item.description}</p>
      <p>{item.discountPercentage}</p>
      <p>{item.rating}</p>
      <p>{item.brand}</p>
      <p>{item.category}</p>
      <p>{item.description}</p>
      <img src={item.images[0]} alt="product" className="img" />
    </div>
  )
}

export default Item;
