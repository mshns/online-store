import "./cartPage.scss";

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
        <div className="cart_list">
          <div className="cart-item">
            <span className="cart-item_number">1</span>
            <img
              className="cart-item_image"
              src="https://i.dummyjson.com/data/products/3/thumbnail.jpg"
              alt="Product Name"
            ></img>
            <div className="cart-item_info">
              <h3 className="item-info_title">Samsung Universe 9</h3>
              <p className="item-info_description">
                Samsung's new variant which goes beyond Galaxy to the Universe
              </p>
              <div className="item-info_rating">Rating: 4.09</div>
              <div className="item-info_discount">Discount: 15.46%</div>
            </div>
            <div className="cart-item_amount">
              <div className="item-amount_stock">Stock: 36</div>
              <div className="item-amount_count">
                <span className="amount-count_button__remove">
                  remove_circle_outline
                </span>
                <span className="amount-count_value">10</span>
                <span className="amount-count_button__add">
                  add_circle_outline
                </span>
              </div>
              <div className="item-amount_sum">$1246</div>
            </div>
          </div>
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
