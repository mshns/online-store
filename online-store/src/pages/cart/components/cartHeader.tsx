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
          onChange={(evt) => {
            handler(Number(evt.target.value));
          }}
        />
        <div className="pagination_pages">
          <span>Page</span>
          <div className="pages_number">
            <span
              className="amount-count_button__remove"
              onClick={() => {
                if (page !== 1) {
                  setPage(page - 1);
                }
              }}
            >
              keyboard_arrow_left
            </span>
            <span>{page}</span>
            <span
              className="amount-count_button__remove"
              onClick={() => {
                if (page < pagesAmount) {
                  setPage(page + 1);
                }
              }}
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
