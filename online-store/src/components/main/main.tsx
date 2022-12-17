import "./main.scss";

export function Main() {
  return (
    <main className="container main">
      <aside className="container aside">
        <h2 className="aside_title">Filters</h2>

        <fieldset className="container aside_fieldset">
          <legend className="fieldset_legend">Categories</legend>
          <div className="container fieldset_item__checkbox">
            <input type="checkbox" id="apple" />
            <label htmlFor="apple">Apple</label>
            <span className="span">123</span>
          </div>
          <div className="fieldset_item__checkbox">
            <input type="checkbox" id="samsung" />
            <label htmlFor="samsung">Samsung</label>
          </div>
          <div className="fieldset_item__checkbox">
            <input type="checkbox" id="oppo" />
            <label htmlFor="oppo">OPPO</label>
          </div>
          <div className="fieldset_item__checkbox">
            <input type="checkbox" id="huawei" />
            <label htmlFor="huawei">Huawei</label>
          </div>
          <div className="fieldset_item__checkbox">
            <input type="checkbox" id="xiaomi" />
            <label htmlFor="xiaomi">Xiaomi</label>
          </div>
        </fieldset>

        <fieldset className="container aside_fieldset">
          <legend className="fieldset_legend">Brands</legend>
          <div className="fieldset_item__checkbox">
            <input type="checkbox" id="apple" />
            <label htmlFor="apple">Apple</label>
          </div>
          <div className="fieldset_item__checkbox">
            <input type="checkbox" id="samsung" />
            <label htmlFor="samsung">Samsung</label>
          </div>
          <div className="fieldset_item__checkbox">
            <input type="checkbox" id="oppo" />
            <label htmlFor="oppo">OPPO</label>
          </div>
          <div className="fieldset_item__checkbox">
            <input type="checkbox" id="huawei" />
            <label htmlFor="huawei">Huawei</label>
          </div>
          <div className="fieldset_item__checkbox">
            <input type="checkbox" id="xiaomi" />
            <label htmlFor="xiaomi">Xiaomi</label>
          </div>
        </fieldset>

        <fieldset className="container aside_fieldset">
          <legend className="fieldset_legend">Price</legend>
          <div className="container range-value">
            <span>MIN</span>
            <span className="range-value_min__price">$0</span>
            <span className="material-icons">sync_alt</span>
            <span>MAX</span>
            <span className="range-value_max__price">$2000</span>
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
            <span className="range-value_min__stock">1</span>
            <span className="material-icons">sync_alt</span>
            <span>MAX</span>
            <span className="range-value_max__stock">150</span>
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

      </aside>
      <div className="container content">🐖💨</div>
    </main>
  );
}
