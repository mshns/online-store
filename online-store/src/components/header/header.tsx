import "./header.scss";
import { Link } from "react-router-dom";
import useSort from "../../hooks/useSort";
import useCart from "../../hooks/useCart";

const Header = () => {
  const { setSort } = useSort();
  const { cartList } = useCart();
  const totalSum = cartList.reduce((acc, curr) => acc + curr.price, 0);

  return (
    <header className="header">
      <Link className="logo" to="/" title="Online Store">
        Online<span>Store</span>
      </Link>
      <form className="header_search">
        <input
          className="search-input"
          type="search"
          placeholder="Search..."
          onChange={(evt) => {
            setSort((prev) => ({
              ...prev,
              search: evt.target.value,
            }));
          }}
        />
      </form>
      <Link to="/cart" className="cart-link">
        <div className="header_cart">
          <p className="cart-count">
            <span className="cart-count_title">Cart</span>
            <span className="cart-count_value">{cartList.length}</span>
          </p>
          <p className="cart-sum">
            <span className="cart-sum_title">Sum</span>
            <span className="cart-sum_value">${totalSum}</span>
          </p>
        </div>
      </Link>
    </header>
  );
};

export default Header;
