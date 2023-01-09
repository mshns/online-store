import "./aside.scss";
import CategoriesList from "../categories/CategoriesList";
import { IProductItem } from "../../types";
import Brands from "../brands/brands";
import PriceSlider from "./components/price";
import StockField from "./components/stock";
import useSort from "../../hooks/useSort";
import { useState } from "react";

const Aside = (props: {
  items: IProductItem[];
  setItems: (items: IProductItem[]) => void;
}) => {
  const { setSort } = useSort();
  const [btnText, setBtnText] = useState("Copy");
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
      itemsView: "",
    });
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
          <button
            className="aside_buttons__copy"
            onClick={() => {
              const copyedURL = window.location.href;
              navigator.clipboard.writeText(copyedURL);
              setBtnText("Copied");
              setTimeout(() => {
                setBtnText("Copy");
              }, 1000);
            }}
          >
            {btnText}
          </button>
        </div>
      </div>

      <CategoriesList items={props.items} setItems={props.setItems} />
      <Brands items={props.items} setItems={props.setItems} />
      <PriceSlider items={props.items} />
      <StockField items={props.items} />
    </aside>
  );
};

export default Aside;
