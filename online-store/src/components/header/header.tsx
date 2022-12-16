import './header.scss';

export function Header() {
  return(
  <header className="container header">
    <a className="logo" href="/" title="Online Store">
      Online<span>Store</span>
    </a>
    <form className="header_search">
      <input
        className="search-input"
        type="search"
        placeholder="Search..."
      />
    </form>
    <div className="container header_cart">
      <p className="cart-count">
        Cart <span className="cart-count_value">0</span>
      </p>
      <p className="cart-sum">
        Sum <span className="cart-sum_value">$0</span>
      </p>
    </div>
  </header>
  )
}