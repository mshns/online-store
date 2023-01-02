import ProductsList from "../products/itemsBlock";
import { IProductItem } from "../../types";
import SortingHeader from "../sortingHeader/sortingHeader";
import "./sortingBlock.scss";

function SortingBlock(props: { items: IProductItem[] }) {
  return (
    <div className="container content">
      <SortingHeader items={props.items} />
      <ProductsList items={props.items} />
    </div>
  );
}

export default SortingBlock;
