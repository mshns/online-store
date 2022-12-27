import Item from "./item";
import { ProductObject } from "../../types";

const ProductsList = (items: { items: ProductObject[] }) => {
  return (
    <div className="container content_products">
      {items.items.map((item: ProductObject) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductsList;
