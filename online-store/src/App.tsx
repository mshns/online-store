import React from "react";
import logo from "./logo.svg";
import "./App.css";

function App() {
  return (
    <div className="container wrapper">
      <header className="container header">
        <a className="logo" href="/" title="Online Store">
          Online<span>Store</span>
        </a>
        <input
          className="header_search"
          type="search"
          placeholder="Search..."
        />
        <ul className="header_cart">
          <span className="cart_count">Cart: 100</span>
          <span className="cart_sum">Sum: $100</span>
        </ul>
      </header>
      <main></main>
      <footer></footer>
    </div>
  );
}

export default App;
