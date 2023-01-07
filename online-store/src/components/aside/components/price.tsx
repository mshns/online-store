import storeItems from "../../../storeProducts/storeProducts";
import { IProductItem } from "../../../types";
import useSort from "../../../hooks/useSort";

const PriceSlider = ({ items }: { items: IProductItem[] }) => {
  const minPrice = (itemsList: IProductItem[]): number => {
    return Math.min(...itemsList.map((item) => item.price));
  };

  const maxPrice = (itemsList: IProductItem[]): number => {
    return Math.max(...itemsList.map((item) => item.price));
  };

  const minPriceValue = minPrice(items);
  const maxPriceValue = maxPrice(items);

  const { sort, setSort } = useSort();

  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Price</legend>
      <div className="container range-value">
        <span>MIN</span>
        <span className="range-value_price__min">${minPriceValue}</span>
        <span className="material-icons">sync_alt</span>
        <span>MAX</span>
        <span className="range-value_price__max">${maxPriceValue}</span>
      </div>
      <div className="fieldset_item__range">
        <input
          className="range__lower"
          type="range"
          id="lower"
          min={minPrice(storeItems)}
          max={maxPrice(storeItems)}
          defaultValue={minPriceValue}
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
          defaultValue={maxPriceValue}
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

export default PriceSlider;
