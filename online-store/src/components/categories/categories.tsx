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
    <>
      {categories.map((category) => (
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id={category.toLocaleLowerCase()} />
          <label htmlFor="smartphones">{category}</label>
          <span className="item-count">(5/5)</span>
        </div>
      ))}
    </>
  );
}

export default Categories;
