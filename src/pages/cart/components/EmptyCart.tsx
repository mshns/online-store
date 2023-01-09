import { Link } from "react-router-dom"

const EmptyCart = () => {
  return (
    <div className="notice">
    <h2 className="notice_title">Cart is empty</h2>
    <span className="notice_image ">production_quantity_limits</span>
    <Link to="/" className="notice_button">
      Back to store
    </Link>
  </div>
  )
}

export default EmptyCart;