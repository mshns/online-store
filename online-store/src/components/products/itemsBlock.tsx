import Item from "./item";
import { ProductObject } from "../../types";

function ItemsBlock(items: { items: ProductObject[] }) {
  return (
    <>
      {items.items.map((item: ProductObject) => (
        <Item {...item} key={item.id} />
      ))}
    </>
  );
}

export default ItemsBlock;
