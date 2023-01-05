import { useState } from "react";

import tableProducts from "./icons/table.svg";
import listProducts from "./icons/list.svg";
import { IProductItem } from "../../types";
import useSort from "../../hooks/useSort";

const SortingHeader = (props: { items: IProductItem[] }) => {
  const sortingList: {
    title: string;
    searchURL: string;
  }[] = [
    {
      title: "By price (to lower)",
      searchURL: "priceToLower",
    },
    {
      title: "By price (to higher)",
      searchURL: "priceToHigher",
    },
    {
      title: "By rating (to lower)",
      searchURL: "ratingToLower",
    },
    {
      title: "By rating (to higher)",
      searchURL: "ratingToHigher",
    },
  ];

  const { setSort } = useSort();
  const [tableState, setTableState] = useState(true);

  return (
    <div className="container content_header">
      <select
        className="content-select"
        onChange={(evt) => {
          setSort((prev) => ({
            ...prev,
            sortBy: evt.target.value,
          }));
        }}
        defaultValue={""}
      >
        <>
          <option className="content-select_option" value={""} disabled={true}>
            Sort goods
          </option>
          {sortingList.map((sortObject, index) => (
            <option
              key={index}
              className="content-select_option"
              value={sortObject.searchURL}
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
      <div className="content-header_buttons">
        <img
          className={`content-header_buttons__table ${
            tableState ? "active" : ""
          }`}
          onClick={(evt) => {
            setTableState(() => true);
          }}
          src={tableProducts}
          alt="Display Table"
          title="Display Table"
        />
        <img
          className={`content-header_buttons__list ${
            tableState ? "" : "active"
          }`}
          onClick={(evt) => {
            setTableState(() => false);
          }}
          src={listProducts}
          alt="Display List"
          title="Display List"
        />
      </div>
    </div>
  );
};

export default SortingHeader;
