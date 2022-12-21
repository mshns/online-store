import { ProductObject } from "../../types";

const Brands = (props: {
  items: ProductObject[];
  filter: string;
  onChangeFilter: (filter: string) => void;
}) => {
  const brands: string[] = [];
  props.items.forEach((item) => {
    if (brands.indexOf(item.brand) === -1) {
      brands.push(item.brand);
    }
  });

  const slisedBy = props.filter.indexOf("=") + 1;
  const filterTag = props.filter.slice(slisedBy);

  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Brands</legend>
      {brands.map((brand, index) => (
        <div className="container fieldset_item__checkbox" key={index}>
          <input
            type="checkbox"
            id={brand}
            checked={brand === filterTag ? true : false}
            onChange={(event) => {
              const URL = event.target.checked ? `?brand=${brand}` : "";
              props.onChangeFilter(URL);
            }}
          />
          <label htmlFor={brand}>
            {brand[0].toUpperCase() + brand.slice(1)}
          </label>
          <span className="item-count">(5/5)</span>
        </div>
      ))}
    </fieldset>
  );
};

export default Brands;
