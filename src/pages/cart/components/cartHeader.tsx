import { Dispatch, SetStateAction } from "react";

const CartHeader = ({
  visibilityValue,
  handler,
  page,
  pagesAmount,
  setPage,
}: {
  visibilityValue: number;
  handler: Dispatch<SetStateAction<number>>;
  page: number;
  pagesAmount: number;
  setPage: Dispatch<SetStateAction<number>>;
}) => {
  const paginationInputHandler = (event: { target: { value: any } }) => {
    const numberValue = Number(event.target.value);
    if (numberValue > 0) {
      handler(numberValue);
    }
  };

  const leftPageHandler = () => {
    if (page !== 1) {
      setPage(page - 1);
    }
  };

  const rightPageHandler = () => {
    if (page < pagesAmount) {
      setPage(page + 1);
    }
  };

  return (
    <div className="cart_header">
      <h1 className="cart_title">Cart</h1>
      <div className="cart_pagination">
        <label htmlFor="pagination-items">Items</label>
        <input
          className="pagination_items"
          type="number"
          value={visibilityValue}
          id="pagination-items"
          onChange={paginationInputHandler}
        />
        <div className="pagination_pages">
          <span>Page</span>
          <div className="pages_number">
            <span
              className="amount-count_button__remove"
              onClick={leftPageHandler}
            >
              keyboard_arrow_left
            </span>
            <span>{page}</span>
            <span
              className="amount-count_button__remove"
              onClick={rightPageHandler}
            >
              keyboard_arrow_right
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartHeader;
