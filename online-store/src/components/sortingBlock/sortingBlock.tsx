import tableProducts from "./icons/table.svg";
import listProducts from "./icons/list.svg";
import ItemsBlock from "../products/itemsBlock";
import { ProductObject } from "../../types";
import "./sortingBlock.scss";

function SortingBlock(items: { items: ProductObject[] }) {
  return (
    <div className="container content">
      <div className="container content_header">
        <select className="content-select">
          <option className="content-select_option" disabled selected>
            Sort goods
          </option>
          <option className="content-select_option">by price: lower</option>
          <option className="content-select_option">by price: higher</option>
          <option className="content-select_option">by rating: lower</option>
          <option className="content-select_option">by rating: higher</option>
        </select>
        <div className="content-found">
          <span className="content-found_title">Found </span>
          <span className="content-found_value">100</span>
        </div>
        <div className="container content-header_buttons">
          <img
            className="content-header_buttons__table active"
            src={tableProducts}
            alt="Display Table"
          />
          <img
            className="content-header_buttons__list"
            src={listProducts}
            alt="Display List"
          />
        </div>
      </div>
      <div className="container content_products">
        <ItemsBlock items={items.items} />
      </div>
    </div>
  );
}

export default SortingBlock;
