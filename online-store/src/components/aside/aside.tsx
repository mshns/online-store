import "./aside.scss";
import CategoriesList from "../categories/CategoriesList";
import { IProductItem } from "../../types";
import Brands from "../brands/brands";
import PriceField from "./components/price";
import StockField from "./components/stock";
import useSort from "../../hooks/useSort";
import { useState } from "react";

const Aside = (props: {
  items: IProductItem[];
  setItems: (items: IProductItem[]) => void;
}) => {
  const { setSort } = useSort();
  const [state, setState] = useState(1);
  const handleClick = () => {
    setSort({
      brand: [],
      category: [],
      minPrice: 0,
      maxPrice: 1800,
      minStock: 0,
      maxStock: 150,
      sortBy: "",
      search: "",
    });
    setState(state + 1);
  };
  return (
    <aside className="container aside">
      <div className="container aside_header">
        <h2 className="aside_title">Filters</h2>
        <div className="container aside_buttons">
          <button
            className="aside_buttons__reset"
            onClick={() => handleClick()}
          >
            Reset
          </button>
          <button className="aside_buttons__copy">Copy</button>
        </div>
      </div>

      <CategoriesList items={props.items} setItems={props.setItems} />
      <Brands items={props.items} setItems={props.setItems} />
      <PriceField items={props.items} />
      <StockField items={props.items} />
    </aside>
  );
};

export default Aside;
