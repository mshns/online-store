import { useEffect, useState } from "react";

import useSort from "../../../hooks/useSort";

import storeItems from "../../../storeProducts/storeProducts";
import { IProductItem, SortingProps } from "../../../types";

const Brand = ({ brand, items }: { brand: string; items: IProductItem[] }) => {
  const { sort, setSort } = useSort();
  const isCheckedBySort = (brand: string, sortProperty: SortingProps) =>
    sortProperty.brand.includes(brand);
  const [isChecked, setChecked] = useState(isCheckedBySort(brand, sort));
  useEffect(() => {
    setChecked(isCheckedBySort(brand, sort));
  }, [brand, sort]);

  const itemCount = items.filter((item) => item.brand === brand).length;
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
      <span className="item-count">
        ({itemCount}/{itemCountAll})
      </span>
    </div>
  );
};

export default Brand;
