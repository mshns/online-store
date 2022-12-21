import { ProductObject } from "../../types";

const Brands = (props: { items: ProductObject[] }) => {
  const brands: string[] = [];
  props.items.forEach((item) => {
    if (brands.indexOf(item.brand) === -1) {
      brands.push(item.brand);
    }
  });

  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Brands</legend>
      {brands.map((brand, index) => (
        <div className="container fieldset_item__checkbox" key={index}>
          <input type="checkbox" id={brand} />
          <label htmlFor="apple">
            {brand[0].toUpperCase() + brand.slice(1)}
          </label>
          <span className="item-count">(5/5)</span>
        </div>
      ))}
    </fieldset>
  );
};

export default Brands;
