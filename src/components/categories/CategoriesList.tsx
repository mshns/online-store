import { useState } from "react";

import { IProps, IProductItem } from "../../types";
import "./categories.scss";
import Category from "./components/Category";

const CategoriesList = ({ items }: IProps) => {
  const [categories, setCategories] = useState<string[]>([]);
  items.forEach((item: IProductItem) => {
    if (categories.indexOf(item.category) === -1) {
      setCategories([...categories, item.category]);
    }
  });

  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Categories</legend>
      {categories.map((category, index) => (
        <Category category={category} key={index} items={items}/>
      ))}
    </fieldset>
  );
};

export default CategoriesList;
