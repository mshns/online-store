import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";

import "./Header.scss";

import useSort from "../../hooks/useSort";
import useCart from "../../hooks/useCart";

import setTotalSum from "../../lib/helpers/setTotalSum";
import setTotalItems from "../../lib/helpers/setTotalItems";
import resetSort from "../../lib/helpers/resetSort";

const Header = () => {
  const { sort, setSort } = useSort();
  const { cartList } = useCart();

  const location = useLocation();

  const [totalSum, changeTotalSum] = useState(setTotalSum(cartList));
  const [totalItems, changeTotalItems] = useState(setTotalItems(cartList));

  useEffect(() => {
    changeTotalSum(setTotalSum(cartList));
    changeTotalItems(setTotalItems(cartList));
  }, [cartList]);

  const seachInputHandler = (event: { target: { value: string } }) => {
    setSort((prev) => ({
      ...prev,
      search: event.target.value.toLowerCase(),
    }));
  };

  return (
    <header className="header">
      <Link
        className="logo"
        to="/"
        title="Online Store"
        onClick={() => resetSort(setSort)}
      >
        Online<span>Store</span>
      </Link>
      <form
        className={`header_search ${
          location.pathname !== "/" && "display-none"
        }`}
        onSubmit={(evt) => evt.preventDefault()}
      >
        <input
          value={`${sort.search}`}
          className="search-input"
          type="search"
          placeholder="Search..."
          onChange={seachInputHandler}
        />
      </form>
      <Link to="/cart" className="cart-link">
        <div className="header_cart">
          <p className="cart-count">
            <span className="cart-count_title">Cart</span>
            <span className="cart-count_value">{totalItems}</span>
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
