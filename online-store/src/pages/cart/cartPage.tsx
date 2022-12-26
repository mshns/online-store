import "./cartPage.scss";

const CartPage = () => {
  return (
    <main className="cart">
      <section className="cart_list">
        <div className="cart_header">
          <h1 className="cart_title">Cart</h1>
          <div className="cart_pagination"></div>
        </div>
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
        <div className="cart-sum_field">
          <label htmlFor="promo-code">Promo code</label>
          <input
            className="cart-sum_input"
            type="text"
            placeholder="Enter promo code"
            id="promo-code"
          ></input>
        </div>
        <button className="cart-sum_button">Buy now</button>
      </section>
    </main>
  );
};

export default CartPage;
