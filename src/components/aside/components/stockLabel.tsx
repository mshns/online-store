import { IProductItem } from "../../../types";

const StockLabel = ({ items }: { items: IProductItem[] }) => {
  const minStock = (itemsList: IProductItem[]): number => {
    return Math.min(...itemsList.map((item) => item.stock));
  };
  const maxStock = (itemsList: IProductItem[]): number => {
    return Math.max(...itemsList.map((item) => item.stock));
  };

  if (items.length) {
    return (
      <div className="range-value">
        <span>MIN</span>
        <span className="range-value_stock__min">{minStock(items)}</span>
        <span className="material-icons">sync_alt</span>
        <span>MAX</span>
        <span className="range-value_stock__max">{maxStock(items)}</span>
      </div>
    );
  } else {
    return (
      <div className="range-value">
        <span className="range-value_price__min">NOT FOUND ITEMS</span>
      </div>
    );
  }
};

export default StockLabel;
