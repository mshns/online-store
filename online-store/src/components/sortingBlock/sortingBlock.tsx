import { useEffect, useState } from "react";

import ProductsList from "../products/itemsBlock";
import { IProductItem } from "../../types";
import SortingHeader from "../sortingHeader/sortingHeader";
import "./sortingBlock.scss";
import useSort from "../../hooks/useSort";

function SortingBlock(props: { items: IProductItem[] }) {
  const {sort} = useSort();
  const [tableState, setTableState] = useState(sort.itemsView === 'table' ? true: false);
  useEffect(() => {
    setTableState(sort.itemsView === 'table' ? true: false);
  }, [sort])

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
