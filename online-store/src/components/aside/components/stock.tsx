import { IProductItem } from "../../../types";
import storeItems from "../../../storeProducts/storeProducts";
import useSort from "../../../hooks/useSort";

const StockField = ({ items }: { items: IProductItem[] }) => {
  const minStock = (itemsList: IProductItem[]): number => {
    return Math.min(...itemsList.map((item) => item.stock));
  };
  const maxStock = (itemsList: IProductItem[]): number => {
    return Math.max(...itemsList.map((item) => item.stock));
  };

  const { sort, setSort } = useSort();

  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Stock</legend>
      <div className="container range-value">
        <span>MIN</span>
        <span className="range-value_stock__min">2</span>
        <span className="material-icons">sync_alt</span>
        <span>MAX</span>
        <span className="range-value_stock__max">140</span>
      </div>
      <div className="fieldset_item__range">
        <input
          className="range__lower"
          type="range"
          id="lower"
          min={minStock(storeItems)}
          max={maxStock(storeItems)}
          defaultValue={minStock(items)}
          onChange={(evt) => {
            if (Number(evt.target.value) <= sort.maxStock) {
              setSort((prev) => ({
                ...prev,
                minStock: Number(evt.target.value),
              }));
            } else {
              evt.target.value = sort.maxStock.toString();
            }
          }}
        />
        <input
          className="range__upper"
          type="range"
          id="upper"
          min={minStock(storeItems)}
          max={maxStock(storeItems)}
          defaultValue={maxStock(items)}
          onChange={(evt) => {
            if (Number(evt.target.value) >= sort.minStock) {
              setSort((prev) => ({
                ...prev,
                maxStock: Number(evt.target.value),
              }));
            } else {
              evt.target.value = sort.minStock.toString();
            }
          }}
        />
      </div>
    </fieldset>
  );
};

export default StockField;
