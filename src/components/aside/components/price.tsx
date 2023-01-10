import useSort from "../../../hooks/useSort";
import PriceLabel from "./priceLabel";

import storeItems from "../../../StoreProducts/StoreProducts";

import { IProductList, IProductItem } from "../../../types";

const PriceSlider = ({ items }: IProductList) => {
  const getMinPrice = (itemsList: IProductItem[]): number => {
    return Math.min(...itemsList.map((item) => item.price));
  };

  const getMaxPrice = (itemsList: IProductItem[]): number => {
    return Math.max(...itemsList.map((item) => item.price));
  };

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
          min={getMinPrice(storeItems)}
          max={getMaxPrice(storeItems)}
          value={getMinPrice(items)}
          onChange={handleSetMinPrice}
        />
        <input
          className="range__upper"
          type="range"
          id="upper"
          min={getMinPrice(storeItems)}
          max={getMaxPrice(storeItems)}
          value={getMaxPrice(items)}
          onChange={handleSetMaxPrice}
        />
      </div>
    </fieldset>
  );
};

export default PriceSlider;
