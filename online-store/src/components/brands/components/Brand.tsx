import { useState } from "react";

import useSort from "../../../hooks/useSort";

import storeItems from "../../../storeProducts/storeProducts";

const Brand = ({ brand }: { brand: string }) => {
  const [isChecked, setChecked] = useState(false);
  const { setSort } = useSort();

  const itemCountAll = storeItems.filter((item) => item.brand === brand).length;

  return (
    <div className="container fieldset_item__checkbox">
      <input
        type="checkbox"
        id={brand}
        checked={isChecked}
        onChange={(evt) => {
          if (!isChecked) {
            setSort((prev) => ({
              ...prev,
              brand: prev.brand.includes(brand)
                ? [...prev.brand]
                : [...prev.brand, brand],
            }));
          } else {
            setSort((prev) => ({
              ...prev,
              brand: prev.brand.filter((item) => item !== brand),
            }));
          }
          setChecked(!isChecked);
        }}
      />
      <label htmlFor={brand}>{brand}</label>
      <span className="item-count">(/{itemCountAll})</span>
    </div>
  );
};

export default Brand;
