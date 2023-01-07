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
      <div>
        <h1>Nothing</h1>
      </div>
    );
  }
};

export default ProductsList;
