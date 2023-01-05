import Item from "./item";
import { IProductItem } from "../../types";

const ProductsList = (props: {
  items: IProductItem[];
  tableState: boolean;
}) => {
  return (
    <div className={`content_products ${props.tableState ? "" : "list"}`}>
      {props.items.map((item: IProductItem) => (
        <Item item={item} key={item.id} tableState={props.tableState} />
      ))}
    </div>
  );
};

export default ProductsList;
