import { ProductObject } from "../../types";
import "./categories.scss";

function Categories(props: { items: ProductObject[] }) {
  const categories: string[] = ["All categories"];
  props.items.forEach((item) => {
    if (categories.indexOf(item.category) === -1) {
      categories.push(item.category);
    }
  });

  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Categories</legend>
      {categories.map((category, index) => (
        <div className="container fieldset_item__checkbox" key={index}>
          <input type="checkbox" id={category} />
          <label htmlFor="smartphones">
            {category[0].toUpperCase() + category.slice(1)}
          </label>
          <span className="item-count">(5/5)</span>
        </div>
      ))}
    </fieldset>
  );
}

export default Categories;
