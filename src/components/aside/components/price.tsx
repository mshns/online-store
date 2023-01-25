import useSort from "../../../hooks/useSort";
import PriceLabel from "./priceLabel";

import storeItems from "../../../StoreProducts/StoreProducts";

import getMinMax from "../../../lib/helpers/getMinMax";

import { IProductsList } from "../../../types";

const PriceSlider = ({ items }: IProductsList) => {
  const { sort, setSort } = useSort();

  const handleSetMinPrice = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (Number(event.target.value) < sort.maxPrice - 100) {
      setSort((prev) => ({
        ...prev,
        minPrice: Number(event.target.value),
      }));
    } else {
      event.target.value = (sort.maxPrice - 100).toString();
    }
  };

  const handleSetMaxPrice = (
    event: React.ChangeEvent<HTMLInputElement>
  ): void => {
    if (Number(event.target.value) > sort.minPrice + 100) {
      setSort((prev) => ({
        ...prev,
        maxPrice: Number(event.target.value),
      }));
    } else {
      event.target.value = (sort.minPrice + 100).toString();
    }
  };

  return (
    <fieldset className="aside_fieldset">
      <legend className="fieldset_legend">Price</legend>
      <PriceLabel items={items} />
      <div className="fieldset_item__range">
        <input
          className="range__lower"
          type="range"
          id="lower"
          min={getMinMax("min", "price", storeItems)}
          max={getMinMax("max", "price", storeItems)}
          value={getMinMax("min", "price", items)}
          onChange={handleSetMinPrice}
        />
        <input
          className="range__upper"
          type="range"
          id="upper"
          min={getMinMax("min", "price", storeItems)}
          max={getMinMax("max", "price", storeItems)}
          value={getMinMax("max", "price", items)}
          onChange={handleSetMaxPrice}
        />
      </div>
    </fieldset>
  );
};

export default PriceSlider;
