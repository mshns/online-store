import { useEffect, useState } from "react";

import useSort from "../../../hooks/useSort";

import itemCountAll from "../../../constants/brandCountAll";

import { IProductItem, SortingProps } from "../../../types";

const Brand = ({ brand, items }: { brand: string; items: IProductItem[] }) => {
  const { sort, setSort } = useSort();
  const [itemCount, setItemCount] = useState(0);

  const isCheckedBySort = (brand: string, sortProperty: SortingProps) =>
    sortProperty.brand.includes(brand);
  const [isChecked, setChecked] = useState(isCheckedBySort(brand, sort));

  useEffect(() => {
    setChecked(isCheckedBySort(brand, sort));
    setItemCount(items.filter((item) => item.brand === brand).length);
  }, [brand, items, sort]);

  const brandCheckboxHandler = () => {
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
  };

  return (
    <div
      className={`container fieldset_item__checkbox ${
        itemCount > 0 ? "activity_input_class" : "non-active_input_class"
      }`}
    >
      <input
        type="checkbox"
        id={brand}
        checked={isChecked}
        onChange={brandCheckboxHandler}
      />
      <label className={`${itemCount ? "" : "unshow"}`} htmlFor={brand}>
        {brand}
      </label>
      <span className="item-count">
        ({itemCount}/{itemCountAll(brand)})
      </span>
    </div>
  );
};

export default Brand;
