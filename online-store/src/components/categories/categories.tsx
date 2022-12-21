import "./categories.scss";

function Categories() {
  const categories: string[] = [
    "Smartphones",
    "Laptops",
    "Fragrances",
    "Skincare",
    "Groceries",
    "Home Decoration",
  ];

  return (
    <div className="container fieldset_item__checkbox">
      <input type="checkbox" id={categories[0].toLocaleLowerCase()} />
      <label htmlFor="smartphones">{categories[0]}</label>
      <span className="item-count">(5/5)</span>
    </div>
  );
}

export default Categories;
