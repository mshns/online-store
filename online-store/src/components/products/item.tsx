import { ProductObject } from "../../types";

function Item(item: ProductObject) {
  return (
    <div>
      <p>{item['title']}</p>
      <span>{item['price']}</span>
    </div>
  )
}

export default Item;
