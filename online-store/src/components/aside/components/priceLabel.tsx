import { IProductItem } from "../../../types";

const PriceLabel = ({ items }: { items: IProductItem[] }) => {
  const minPrice = (itemsList: IProductItem[]): number => {
    return Math.min(...itemsList.map((item) => item.price));
  };

  const maxPrice = (itemsList: IProductItem[]): number => {
    return Math.max(...itemsList.map((item) => item.price));
  };
  if (items.length) {
    return (
      <div className="container range-value">
        <span>MIN</span>
        <span className="range-value_price__min">${minPrice(items)}</span>
        <span className="material-icons">sync_alt</span>
        <span>MAX</span>
        <span className="range-value_price__max">${maxPrice(items)}</span>
      </div>
    );
  } else {
    return (
      <div className="container range-value">
        <span className="range-value_price__min">NOT FOUND ITEMS</span>
      </div>
    );
  }
};

export default PriceLabel;
