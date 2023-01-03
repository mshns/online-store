import "./cartPage.scss";
import CartList from "./components/cartList";

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
              value="10"
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
      <section className="cart_sum">
        <h2 className="cart_subtitle">Summary</h2>
        <div className="cart-sum_field">
          <span className="field_title">Products</span>
          <span className="products-count">10</span>
        </div>
        <div className="cart-sum_field">
          <span className="field_title">Total price</span>
          <span className="total-price">$100</span>
        </div>
        <form className="cart-sum_field">
          <label htmlFor="promo-code">Promo code</label>
          <input
            className="cart-sum_input"
            type="text"
            placeholder="Enter code"
            id="promo-code"
          />
          <input className="cart-sum_submit" type="submit" value="Add" />
        </form>
        <button className="cart-sum_button">Buy now</button>
      </section>
    </main>
  );
};

export default CartPage;
