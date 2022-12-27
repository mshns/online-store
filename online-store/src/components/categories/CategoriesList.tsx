import { useContext, useState } from "react";

import { ProductObject, SortingProps } from "../../types";
import "./categories.scss";
import Category from "./components/Category";

interface IProps {
  items: ProductObject[];
  setItems: (items: ProductObject[]) => void;
}

const CategoriesList = ({ items, setItems }: IProps) => {
  const [categories, setCategories] = useState<string[]>([]);


  items.map((item: ProductObject) => {
    if (categories.indexOf(item.category) === -1) {
      setCategories([...categories, item.category].sort());
    }
  });

  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Categories</legend>
      {categories.map((category, index) => (
        <Category category={category} key={index} />
      ))}
    </fieldset>
  );
};

export default CategoriesList;
