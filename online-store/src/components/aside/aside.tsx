import "./aside.scss";
import CategoriesList from "../categories/CategoriesList";
import { IProductItem } from "../../types";
import Brands from "../brands/brands";
import PriceField from "./components/price";
import StockField from "./components/stock";

const Aside = (props: {
  items: IProductItem[];
  setItems: (items: IProductItem[]) => void;
}) => {
  return (
    <aside className="container aside">
      <div className="container aside_header">
        <h2 className="aside_title">Filters</h2>
        <div className="container aside_buttons">
          <button className="aside_buttons__reset">Reset</button>
          <button className="aside_buttons__copy">Copy</button>
        </div>
      </div>

      <CategoriesList items={props.items} setItems={props.setItems} />
      <Brands />
      <PriceField items={props.items} />
      <StockField items={props.items} />
    </aside>
  );
};

export default Aside;
