import storeItems from "../../../storeProducts/storeProducts";
import { IProductItem } from "../../../types";
import useSort from "../../../hooks/useSort";
import { useEffect, useState } from "react";

const PriceField = ({ items }: { items: IProductItem[] }) => {
  const minPrice = (itemsList: IProductItem[]): number => {
    return Math.min(...itemsList.map((item) => item.price));
  };

  const maxPrice = (itemsList: IProductItem[]): number => {
    return Math.max(...itemsList.map((item) => item.price));
  };

  const minPriceValue = minPrice(items);
  const maxPriceValue = maxPrice(items);

  const { sort, setSort } = useSort();
  const [minSliderThumbValue, setMinSliderThumbValue] = useState(minPriceValue);
  const [maxSliderThumbValue, setMaxSliderThumbValue] = useState(maxPriceValue);
  // useEffect(() => {
  //   setMinSliderThumbValue(minPriceValue);
  //   setMaxSliderThumbValue(maxPriceValue);
  // }, [maxPriceValue, minPriceValue]);

  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Price</legend>
      <div className="container range-value">
        <span>MIN</span>
        <span className="range-value_price__min">${minSliderThumbValue}</span>
        <span className="material-icons">sync_alt</span>
        <span>MAX</span>
        <span className="range-value_price__max">${maxSliderThumbValue}</span>
      </div>
      <div className="fieldset_item__range">
        <input
          className="range__lower"
          type="range"
          id="lower"
          min={minPrice(storeItems)}
          max={maxPrice(storeItems)}
          value={minPriceValue}
          onChange={(evt) => {
            if (Number(evt.target.value) < sort.maxPrice - 100) {
              setSort((prev) => ({
                ...prev,
                minPrice: Number(evt.target.value),
              }));
            } else {
              evt.target.value = (sort.maxPrice - 100).toString();
            }
            setMinSliderThumbValue(Number(evt.target.value));
          }}
        />
        <input
          className="range__upper"
          type="range"
          id="upper"
          min={minPrice(storeItems)}
          max={maxPrice(storeItems)}
          value={maxPriceValue}
          onChange={(evt) => {
            if (Number(evt.target.value) > sort.minPrice + 100) {
              setSort((prev) => ({
                ...prev,
                maxPrice: Number(evt.target.value),
              }));
            } else {
              evt.target.value = (sort.minPrice + 100).toString();
            }
            setMaxSliderThumbValue(Number(evt.target.value));
          }}
        />
      </div>
    </fieldset>
  );
};

export default PriceField;
