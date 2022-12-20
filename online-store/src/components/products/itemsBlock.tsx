import Item from "./item";
import { ProductObject } from "../../types";

function ItemsBlock(items: ProductObject[]) {
  console.log(items);
  return (
    <>
      {items.map((item: ProductObject) => (
          <Item {...item} key = {item.id} />
      ))}
    </>
  )
}

export default ItemsBlock;
