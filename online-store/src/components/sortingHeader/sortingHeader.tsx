import tableProducts from "./icons/table.svg";
import listProducts from "./icons/list.svg";
import { IProductItem } from "../../types";
import useSort from "../../hooks/useSort";
import { useEffect, useState } from "react";

const SortingHeader = (props: {
  items: IProductItem[];
  tableState: boolean;
  setTableState: React.Dispatch<React.SetStateAction<boolean>>;
}) => {
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
  const { sort } = useSort();
  const [sortingValue, setSortingValue] = useState(
    sort.sortBy ? sort.sortBy : ""
  );
  useEffect(() => {
    setSortingValue(sort.sortBy);
  }, [sort]);

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
        <span className="content-found_value">{props.items.length}</span>
      </div>
      <div className="content-header_buttons">
        <img
          className={`content-header_buttons__table ${
            props.tableState ? "active" : ""
          }`}
          onClick={(evt) => {
            props.setTableState(() => true);
          }}
          src={tableProducts}
          alt="Display Table"
          title="Display Table"
        />
        <img
          className={`content-header_buttons__list ${
            props.tableState ? "" : "active"
          }`}
          onClick={(evt) => {
            props.setTableState(() => false);
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
