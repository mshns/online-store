import { useEffect, useState } from "react";
import useSort from "../../../hooks/useSort";
import storeItems from "../../../storeProducts/storeProducts";
import { IProductItem, SortingProps } from "../../../types";

const Category = ({
  category,
  items,
}: {
  category: string;
  items: IProductItem[];
}) => {
  const { sort, setSort } = useSort();
  const isCheckedBySort = (category: string, sortProperty: SortingProps) =>
    sortProperty.category.includes(category);
  const [isChecked, setChecked] = useState(isCheckedBySort(category, sort));
  useEffect(() => {
    setChecked(isCheckedBySort(category, sort));
  }, [category, sort]);

  const itemCount = items.filter((item) => item.category === category).length;
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
      <span className="item-count">
        ({itemCount}/{itemCountAll})
      </span>
    </div>
  );
};

export default Category;
