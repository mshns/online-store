import { useEffect, useState } from "react";

import SortingHeader from "../sortingHeader/sortingHeader";
import useSort from "../../hooks/useSort";

import "./sortingBlock.scss";

import ProductsList from "../products/itemsBlock";

import { IProductItem } from "../../types";

function SortingBlock(props: { items: IProductItem[] }) {
  const { sort } = useSort();
  const [tableState, setTableState] = useState(
    sort.itemsView === "table" ? true : false
  );
  useEffect(() => {
    setTableState(sort.itemsView === "table" ? true : false);
  }, [sort]);

  return (
    <div className="content">
      <SortingHeader
        items={props.items}
        tableState={tableState}
        setTableState={setTableState}
      />
      <ProductsList items={props.items} tableState={tableState} />
    </div>
  );
}

export default SortingBlock;
