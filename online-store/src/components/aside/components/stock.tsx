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
        <span className="range-value_stock__min">
          {Math.min(...storeItems.map((item) => item.stock))}
        </span>
        <span className="material-icons">sync_alt</span>
        <span>MAX</span>
        <span className="range-value_stock__max">
          {Math.max(...storeItems.map((item) => item.stock))}
        </span>
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
          defaultValue={maxStock(items)}
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
