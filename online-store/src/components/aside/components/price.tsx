import storeItems from "../../../storeProducts/storeProducts";
import { IProductItem } from "../../../types";
import useSort from "../../../hooks/useSort";
import PriceLabel from "./priceLabel";

const PriceSlider = ({ items }: { items: IProductItem[] }) => {
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
      <PriceLabel items={items} />
      <div className="fieldset_item__range">
        <input
          className="range__lower"
          type="range"
          id="lower"
          min={minPrice(storeItems)}
          max={maxPrice(storeItems)}
          value={minPrice(items)}
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
          value={maxPrice(items)}
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
