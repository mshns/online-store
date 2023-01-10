import { IProductItem } from "../../../types";
import storeItems from "../../../storeProducts/storeProducts";
import useSort from "../../../hooks/useSort";
import StockLabel from "./stockLabel";

const StockField = ({ items }: { items: IProductItem[] }) => {
  const minStock = (itemsList: IProductItem[]): number => {
    return Math.min(...itemsList.map((item) => item.stock));
  };
  const maxStock = (itemsList: IProductItem[]): number => {
    return Math.max(...itemsList.map((item) => item.stock));
  };

  const { sort, setSort } = useSort();

  return (
    <fieldset className="aside_fieldset">
      <legend className="fieldset_legend">Stock</legend>
      <StockLabel items={items} />
      <div className="fieldset_item__range">
        <input
          className="range__lower"
          type="range"
          id="lower"
          min={minStock(storeItems)}
          max={maxStock(storeItems)}
          value={minStock(items)}
          onChange={(evt) => {
            if (Number(evt.target.value) < sort.maxStock - 10) {
              setSort((prev) => ({
                ...prev,
                minStock: Number(evt.target.value),
              }));
            } else {
              evt.target.value = (sort.maxStock - 10).toString();
            }
          }}
        />
        <input
          className="range__upper"
          type="range"
          id="upper"
          min={minStock(storeItems)}
          max={maxStock(storeItems)}
          value={maxStock(items)}
          onChange={(evt) => {
            if (Number(evt.target.value) > sort.minStock + 10) {
              setSort((prev) => ({
                ...prev,
                maxStock: Number(evt.target.value),
              }));
            } else {
              evt.target.value = (sort.minStock + 10).toString();
            }
          }}
        />
      </div>
    </fieldset>
  );
};

export default StockField;
