import Item from "./item";
import React from "react";
import { ProductObject } from "../../types";

function ItemsBlock(items: ProductObject[]) {
  return (
    <>
      {items.map((item: ProductObject) => (
          <Item {...item} key = {item.id} />
      ))}
    </>
  )
}

export default ItemsBlock;
