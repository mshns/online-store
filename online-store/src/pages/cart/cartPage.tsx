import "./cartPage.scss";
import CartList from "./components/cartList";
import CartSumBlock from "./components/cartSum";

const CartPage = () => {
  return (
    <main className="cart">
      <section className="cart_products">
        <div className="cart_header">
          <h1 className="cart_title">Cart</h1>
          <div className="cart_pagination">
            <label htmlFor="pagination-items">Items</label>
            <input
              className="pagination_items"
              type="number"
              defaultValue="10"
              id="pagination-items"
            />
            <div className="pagination_pages">
              <span>Page</span>
              <div className="pages_number">
                <span className="amount-count_button__remove">
                  keyboard_arrow_left
                </span>
                <span>1</span>
                <span className="amount-count_button__remove">
                  keyboard_arrow_right
                </span>
              </div>
            </div>
          </div>
        </div>
        <CartList />
      </section>
      <CartSumBlock />
    </main>
  );
};

export default CartPage;
