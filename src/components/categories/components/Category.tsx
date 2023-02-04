import { useEffect, useState } from "react";
import categoryCountAll from "../../../constants/categoryCountAll";

import useSort from "../../../hooks/useSort";

import { ICategory, SortingProps } from "../../../types";

const Category = ({ category, items }: ICategory) => {
  const { sort, setSort } = useSort();

  const [itemCount, setItemCount] = useState(0);

  const isCheckedBySort = (category: string, sortProperty: SortingProps) =>
    sortProperty.category.includes(category);
  const [isChecked, setChecked] = useState(isCheckedBySort(category, sort));

  useEffect(() => {
    setChecked(isCheckedBySort(category, sort));
    setItemCount(items.filter((item) => item.category === category).length);
  }, [category, items, sort]);

  const categoryCheckboxHandler = () => {
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
  };

  return (
    <div
      className={`container fieldset_item__checkbox${
        itemCount > 0 ? "" : " non-active_input_class"
      }`}
    >
      <input
        type="checkbox"
        id={category}
        checked={isChecked}
        onChange={categoryCheckboxHandler}
      />
      <label className={`${itemCount ? "" : "unshow"}`} htmlFor={category}>
        {category}
      </label>
      <span className="item-count">
        ({itemCount}/{categoryCountAll(category)})
      </span>
    </div>
  );
};

export default Category;
