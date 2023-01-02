import Item from "./item";
import { IProductItem } from "../../types";

const ProductsList = (items: { items: IProductItem[] }) => {
  return (
    <div className="container content_products">
      {items.items.map((item: IProductItem) => (
        <Item {...item} key={item.id} />
      ))}
    </div>
  );
}

export default ProductsList;
