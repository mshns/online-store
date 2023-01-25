import Brand from "./components/Brand";

import brands from "../../constants/brands";

import { IProps } from "../../types";

const Brands = ({ items }: IProps) => {
  return (
    <fieldset className="container aside_fieldset">
      <legend className="fieldset_legend">Brands</legend>
      {brands.map((brand, index) => (
        <Brand brand={brand} key={index} items={items} />
      ))}
    </fieldset>
  );
};

export default Brands;
