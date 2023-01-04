import storeItems from "../../storeProducts/storeProducts";
import { IProps } from "../../types";
import Brand from "./components/Brand";

const Brands = ({ items }: IProps) => {
  const brands: string[] = [];
  storeItems.forEach((item) => {
    if (brands.indexOf(item.brand) === -1) {
      brands.push(item.brand);
    }
  });

  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Brands</legend>
      {brands.map((brand, index) => (
        <Brand brand={brand} key={index} items={items}/>
      ))}
    </fieldset>
  );
};

export default Brands;
