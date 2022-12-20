import './header.scss';
import { Link } from 'react-router-dom';

export function Header() {
  return(
  <header className="container header">
    <Link className="logo" to="/" title="Online Store">
      Online<span>Store</span>
    </Link>
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