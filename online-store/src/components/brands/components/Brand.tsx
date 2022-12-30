import { useState } from "react";

import useSort from "../../../hooks/useSort";

const Brand = ({ brand }: { brand: string }) => {
  const [isChecked, setChecked] = useState(false);
  const { setSort } = useSort();

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
      <span className="item-count">(5/5)</span>
    </div>
  );
};

export default Brand;
