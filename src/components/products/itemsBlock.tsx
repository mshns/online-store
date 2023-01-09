import Item from "./item";
import { IProductItem } from "../../types";

const ProductsList = (props: {
  items: IProductItem[];
  tableState: boolean;
}) => {
  const items = props.items;
  if (items.length) {
    return (
      <div className={`content_products ${props.tableState ? "" : "list"}`}>
        {items.map((item: IProductItem) => (
          <Item item={item} key={item.id} tableState={props.tableState} />
        ))}
      </div>
    );
  } else {
    return (
      <div className="notice">
        <h2 className="notice_title">Products not found</h2>
        <span className="notice_image ">production_quantity_limits</span>
      </div>
    );
  }
};

export default ProductsList;
