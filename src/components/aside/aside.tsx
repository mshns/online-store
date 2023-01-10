import { useState } from "react";

import useSort from "../../hooks/useSort";
import CategoriesList from "../categories/CategoriesList";
import Brands from "../brands/brands";
import PriceSlider from "./components/price";
import StockField from "./components/stock";

import "./aside.scss";

import { IProps } from "../../types";

const Aside = ({items, setItems}: IProps) => {
  const { setSort } = useSort();

  const [buttonCopyText, setButtonCopyText] = useState("Copy");

  const handleResetSort = () => {
    setSort({
      brand: [],
      category: [],
      minPrice: 0,
      maxPrice: 1800,
      minStock: 0,
      maxStock: 150,
      sortBy: "",
      search: "",
      itemsView: "table",
    });
  };

  const handleCopySort = () => {
    const copyedURL = window.location.href;
    navigator.clipboard.writeText(copyedURL);
    setButtonCopyText("Copied");
    setTimeout(() => {
      setButtonCopyText("Copy");
    }, 1000);
  };

  return (
    <aside className="aside">
      <div className="container aside_header">
        <h2 className="aside_title">Filters</h2>
        <div className="container aside_buttons">
          <button className="aside_buttons__reset" onClick={handleResetSort}>
            Reset
          </button>
          <button className="aside_buttons__copy" onClick={handleCopySort}>
            {buttonCopyText}
          </button>
        </div>
      </div>
      <CategoriesList items={items} setItems={setItems} />
      <Brands items={items} setItems={setItems} />
      <PriceSlider items={items} />
      <StockField items={items} />
    </aside>
  );
};

export default Aside;
