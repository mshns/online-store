import storeItems from "../../../storeProducts/storeProducts";
import { IProductItem } from "../../../types";
import useSort from "../../../hooks/useSort";

const PriceField = ({ items }: { items: IProductItem[] }) => {
  const minPrice = (itemsList: IProductItem[]): number => {
    return Math.min(...itemsList.map((item) => item.price));
  };
  const maxPrice = (itemsList: IProductItem[]): number => {
    return Math.max(...itemsList.map((item) => item.price));
  };

  const { sort, setSort } = useSort();

  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Price</legend>
      <div className="container range-value">
        <span>MIN</span>
        <span className="range-value_price__min">${minPrice(storeItems)}</span>
        <span className="material-icons">sync_alt</span>
        <span>MAX</span>
        <span className="range-value_price__max">${maxPrice(storeItems)}</span>
      </div>
      <div className="fieldset_item__range">
        <input
          className="range__lower"
          type="range"
          id="lower"
          min={minPrice(storeItems)}
          max={maxPrice(storeItems)}
          defaultValue={minPrice(items)}
          onChange={(evt) => {
            if (Number(evt.target.value) < sort.maxPrice - 100) {
              setSort((prev) => ({
                ...prev,
                minPrice: Number(evt.target.value),
              }));
            } else {
              evt.target.value = (sort.maxPrice - 100).toString();
            }
          }}
        />
        <input
          className="range__upper"
          type="range"
          id="upper"
          min={minPrice(storeItems)}
          max={maxPrice(storeItems)}
          defaultValue={maxPrice(items)}
          onChange={(evt) => {
            if (Number(evt.target.value) > sort.minPrice + 100) {
              setSort((prev) => ({
                ...prev,
                maxPrice: Number(evt.target.value),
              }));
            } else {
              evt.target.value = (sort.minPrice + 100).toString();
            }
          }}
        />
      </div>
    </fieldset>
  );
};

export default PriceField;
