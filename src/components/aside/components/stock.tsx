import useSort from "../../../hooks/useSort";

import StockLabel from "./stockLabel";

import getMinMax from "../../../lib/helpers/getMinMax";

import storeItems from "../../../StoreProducts/StoreProducts";

import { IProductItem } from "../../../types";

const StockField = ({ items }: { items: IProductItem[] }) => {
  const { sort, setSort } = useSort();

  const handlerSetMinStock = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) < sort.maxStock - 10) {
      setSort((prev) => ({
        ...prev,
        minStock: Number(event.target.value),
      }));
    } else {
      event.target.value = (sort.maxStock - 10).toString();
    }
  };

  const handlerSetMaxStock = (event: React.ChangeEvent<HTMLInputElement>) => {
    if (Number(event.target.value) > sort.minStock + 10) {
      setSort((prev) => ({
        ...prev,
        maxStock: Number(event.target.value),
      }));
    } else {
      event.target.value = (sort.minStock + 10).toString();
    }
  };

  return (
    <fieldset className="aside_fieldset">
      <legend className="fieldset_legend">Stock</legend>
      <StockLabel items={items} />
      <div className="fieldset_item__range">
        <input
          className="range__lower"
          type="range"
          id="lower"
          min={getMinMax("min", "stock", storeItems)}
          max={getMinMax("max", "stock", storeItems)}
          value={getMinMax("min", "stock", items)}
          onChange={handlerSetMinStock}
        />
        <input
          className="range__upper"
          type="range"
          id="upper"
          min={getMinMax("min", "stock", storeItems)}
          max={getMinMax("max", "stock", storeItems)}
          value={getMinMax("max", "stock", items)}
          onChange={handlerSetMaxStock}
        />
      </div>
    </fieldset>
  );
};

export default StockField;
