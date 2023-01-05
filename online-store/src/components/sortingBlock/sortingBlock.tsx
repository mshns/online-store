import { useState } from "react";

import ProductsList from "../products/itemsBlock";
import { IProductItem } from "../../types";
import SortingHeader from "../sortingHeader/sortingHeader";
import "./sortingBlock.scss";

function SortingBlock(props: { items: IProductItem[] }) {
  const [tableState, setTableState] = useState(true);

  console.log(tableState);

  return (
    <div className="content">
      <SortingHeader
        items={props.items}
        tableState={tableState}
        setTableState={setTableState}
      />
      <ProductsList
        items={props.items}
        tableState={tableState}
      />
    </div>
  );
}

export default SortingBlock;
