import { useState } from "react";

import useSort from "../../../hooks/useSort";

import storeItems from "../../../storeProducts/storeProducts";

const Category = ({ category }: { category: string }) => {
  const [isChecked, setChecked] = useState(false);
  const { setSort } = useSort();

  const itemCountAll = storeItems.filter(
    (item) => item.category === category
  ).length;

  return (
    <div className="container fieldset_item__checkbox">
      <input
        type="checkbox"
        id={category}
        checked={isChecked}
        onChange={(evt) => {
          if (!isChecked) {
            setSort((prev) => ({
              ...prev,
              category: prev.category.includes(category)
                ? [...prev.category]
                : [...prev.category, category],
            }));
          } else {
            setSort((prev) => ({
              ...prev,
              category: prev.category.filter((item) => item !== category),
            }));
          }
          setChecked(!isChecked);
        }}
      />
      <label htmlFor={category}>{category}</label>
      <span className="item-count">(/{itemCountAll})</span>
    </div>
  );
};

export default Category;
