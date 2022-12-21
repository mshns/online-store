import ItemsBlock from "../products/itemsBlock";
import { ProductObject } from "../../types";
import SortingHeader from "../sortingHeader/sortingHeader";
import "./sortingBlock.scss";

function SortingBlock(props: {
  items: ProductObject[];
  sortType: string;
  onChangeType: (search: string) => void;
}) {
  return (
    <div className="container content">
      <SortingHeader
        sortType={props.sortType}
        onChangeType={props.onChangeType}
        items={props.items}
      />
      <ItemsBlock items={props.items} />
    </div>
  );
}

export default SortingBlock;
