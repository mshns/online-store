import { useEffect, useState } from "react";

import useSort from "../../hooks/useSort";

import tableProducts from "./icons/table.svg";
import listProducts from "./icons/list.svg";

import { ISortingHeader } from "../../types";

const SortingHeader = ({
  items,
  tableState,
  setTableState,
}: ISortingHeader) => {
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

  const { setSort, sort } = useSort();

  const [sortingValue, setSortingValue] = useState(
    sort.sortBy ? sort.sortBy : ""
  );
  useEffect(() => {
    setSortingValue(sort.sortBy);
  }, [sort]);

  const contentSelectHandler = (evt: { target: { value: any } }) => {
    setSort((prev) => ({
      ...prev,
      sortBy: evt.target.value,
    }));
  };

  const tableButtonHandler = () => {
    setTableState(true);
    setSort((prev) => ({
      ...prev,
      itemsView: "table",
    }));
  }

  const listButtonHandler = () => {
    setTableState(false);
    setSort((prev) => ({
      ...prev,
      itemsView: "rows",
    }));
  }

  return (
    <div className="container content_header">
      <select
        className="content-select"
        onChange={contentSelectHandler}
        value={sortingValue}
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
        <span className="content-found_value">{items.length}</span>
      </div>
      <div className="content-header_buttons">
        <img
          className={`content-header_buttons__table ${
            tableState ? "active" : ""
          }`}
          onClick={tableButtonHandler}
          src={tableProducts}
          alt="Display Table"
          title="Display Table"
        />
        <img
          className={`content-header_buttons__list ${
            tableState ? "" : "active"
          }`}
          onClick={listButtonHandler}
          src={listProducts}
          alt="Display List"
          title="Display List"
        />
      </div>
    </div>
  );
};

export default SortingHeader;
