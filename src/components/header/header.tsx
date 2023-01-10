import "./header.scss";
import { Link } from "react-router-dom";
import useSort from "../../hooks/useSort";
import useCart from "../../hooks/useCart";
import { useEffect, useState } from "react";
import { ICartItem } from "../../types";

const Header = () => {
  const { sort, setSort } = useSort();
  const { cartList } = useCart();

  const URLLocate = window.location.href;
  const inMainPage = !(
    URLLocate.includes("cart") || URLLocate.includes("products")
  );

  const getTotalSum = (itemsList: ICartItem[]) =>
    itemsList.reduce((acc, curr) => acc + curr.item.price * curr.amount, 0);
  const getTotalItems = (itemsList: ICartItem[]) =>
    itemsList.reduce((acc, curr) => acc + curr.amount, 0);
  const [totalSum, changeTotalSum] = useState(getTotalSum(cartList));
  const [totalItems, changeTotalItems] = useState(getTotalItems(cartList));
  useEffect(() => {
    changeTotalSum(getTotalSum(cartList));
    changeTotalItems(getTotalItems(cartList));
  }, [cartList]);

  return (
    <header className="header">
      <Link
        className="logo"
        to="/"
        title="Online Store"
        onClick={() => {
          setSort({
            brand: [],
            category: [],
            minPrice: 0,
            maxPrice: 1800,
            minStock: 0,
            maxStock: 150,
            sortBy: "",
            search: "",
            itemsView: "table",
          });
        }}
      >
        Online<span>Store</span>
      </Link>
      <form
        className={`header_search ${inMainPage ? "" : "display-none"}`}
        onSubmit={(evt) => evt.preventDefault()}
      >
        <input
          value={`${sort.search}`}
          className="search-input"
          type="search"
          placeholder="Search..."
          onChange={(evt) => {
            setSort((prev) => ({
              ...prev,
              search: evt.target.value.toLowerCase(),
            }));
          }}
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