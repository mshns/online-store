import tableProducts from "./icons/table.svg";
import listProducts from "./icons/list.svg";
import { IProductItem } from "../../types";

const SortingHeader = (props: { items: IProductItem[] }) => {
  const sortingList: {
    title: string;
    searchURL: string;
    isEnabled: boolean;
  }[] = [
    {
      title: "Sort goods",
      searchURL: "",
      isEnabled: false,
    },
    {
      title: "By price",
      searchURL: "?sortby=price",
      isEnabled: true,
    },
    {
      title: "By rating",
      searchURL: "?sortby=rating",
      isEnabled: true,
    },
  ];

  return (
    <div className="container content_header">
      <select className="content-select">
        <>
          {sortingList.map((sortObject, index) => (
            <option
              key={index}
              className="content-select_option"
              value={sortObject.searchURL}
              disabled={!sortObject.isEnabled}
            >
              {sortObject.title}
            </option>
          ))}
        </>
      </select>
      <div className="content-found">
        <span className="content-found_title">Found </span>
        <span className="content-found_value">{props.items.length}</span>
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
  );
};

export default SortingHeader;
