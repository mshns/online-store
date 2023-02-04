import Item from "./Item";

import { IBlockItem, IProductItem } from "../../types";

const ProductsList = ({ items, tableState }: IBlockItem) => {
  return !!items.length ? (
    <div className={`content_products ${tableState ? "" : "list"}`}>
      {items.map((item: IProductItem) => (
        <Item item={item} key={item.id} tableState={tableState} />
      ))}
    </div>
  ) : (
    <div className="notice">
      <h2 className="notice_title">Products not found</h2>
      <span className="notice_image ">production_quantity_limits</span>
    </div>
  );
};

export default ProductsList;
