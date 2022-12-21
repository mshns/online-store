import "./aside.scss";
import Categories from "../categories/categories";
import { ProductObject } from "../../types";
import Brands from "../brands/brands";

const Aside = (props: {
  items: ProductObject[];
  filter: string;
  onChangeFilter: (filter: string) => void;
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

      <Categories items={props.items} />

      <Brands
        items={props.items}
        onChangeFilter={props.onChangeFilter}
        filter={props.filter}
      />

      <fieldset className="container aside_fieldset">
        <legend className="fieldset_legend">Price</legend>
        <div className="container range-value">
          <span>MIN</span>
          <span className="range-value_price__min">$100</span>
          <span className="material-icons">sync_alt</span>
          <span>MAX</span>
          <span className="range-value_price__max">$1800</span>
        </div>
        <div className="fieldset_item__range">
          <input
            className="range__lower"
            type="range"
            id="lower"
            min="0"
            max="2000"
          />
          <input
            className="range__upper"
            type="range"
            id="upper"
            min="0"
            max="2000"
          />
        </div>
      </fieldset>

      <fieldset className="container aside_fieldset">
        <legend className="fieldset_legend">Stock</legend>
        <div className="container range-value">
          <span>MIN</span>
          <span className="range-value_stock__min">2</span>
          <span className="material-icons">sync_alt</span>
          <span>MAX</span>
          <span className="range-value_stock__max">140</span>
        </div>
        <div className="fieldset_item__range">
          <input
            className="range__lower"
            type="range"
            id="lower"
            min="0"
            max="200"
          />
          <input
            className="range__upper"
            type="range"
            id="upper"
            min="0"
            max="200"
          />
        </div>
      </fieldset>
    </aside>
  );
};

export default Aside;
