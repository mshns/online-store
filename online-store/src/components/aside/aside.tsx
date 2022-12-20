import "./aside.scss";

const Aside = () => {
  return (
    <aside className="container aside">
      <div className="container aside_header">
        <h2 className="aside_title">Filters</h2>
        <div className="container aside_buttons">
          <button className="aside_buttons__reset">Reset</button>
          <button className="aside_buttons__copy">Copy</button>
        </div>
      </div>

      <fieldset className="container aside_fieldset">
        <legend className="fieldset_legend">Categories</legend>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="smartphones" />
          <label htmlFor="smartphones">Smartphones</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="laptops" />
          <label htmlFor="laptops">Laptops</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="fragrances" />
          <label htmlFor="fragrances">Fragrances</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="skincare" />
          <label htmlFor="skincare">Skincare</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="groceries" />
          <label htmlFor="groceries">Groceries</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="home-decoration" />
          <label htmlFor="home-decoration">Home Decoration</label>
          <span className="item-count">(5/5)</span>
        </div>
      </fieldset>

      <fieldset className="container aside_fieldset">
        <legend className="fieldset_legend">Brands</legend>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="apple" />
          <label htmlFor="apple">Apple</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="samsung" />
          <label htmlFor="samsung">Samsung</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="oppo" />
          <label htmlFor="oppo">OPPO</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="huawei" />
          <label htmlFor="huawei">Huawei</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="microsoft-surface" />
          <label htmlFor="microsoft-surface">Microsoft Surface</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="infinix" />
          <label htmlFor="infinix">Infinix</label>
          <span className="item-count">(5/5)</span>
        </div>
        <div className="container fieldset_item__checkbox">
          <input type="checkbox" id="hp-pavilion" />
          <label htmlFor="hp-pavilion">HP Pavilion</label>
          <span className="item-count">(5/5)</span>
        </div>
      </fieldset>

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
