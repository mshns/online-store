import "./productPage.scss";

const ProductPage = () => {
  return (
    <main className="card">
      <section className="card_breadcrumbs">
        <span className="breadcrumbs-item">Store</span>
        <span className="breadcrumbs-item">Smartphones</span>
        <span className="breadcrumbs-item">Samsung</span>
      </section>
      <section className="card_wrapper">
        <div className="card-image">
          <img
            className="card-image_active"
            src="https://i.dummyjson.com/data/products/3/1.jpg"
            alt="Product Title"
          ></img>
          <div className="thumbnail-list">
            <img
              className="thumbnail-list_item active"
              src="https://i.dummyjson.com/data/products/3/1.jpg"
              alt="Product Title"
            ></img>
            <img
              className="thumbnail-list_item"
              src="https://i.dummyjson.com/data/products/3/1.jpg"
              alt="Product Title"
            ></img>
            <img
              className="thumbnail-list_item"
              src="https://i.dummyjson.com/data/products/3/1.jpg"
              alt="Product Title"
            ></img>
          </div>
        </div>
        <div className="card-info">
          <h1 className="card_title">Samsung Universe 9</h1>
          <h2 className="card_price">
            <span className="card_price__subtitle">Price: </span>
            <span className="card_price__value">$1249</span>
          </h2>
          <div className="card_buttons">
            <button className="card-button_cart">Add to cart</button>
            <button className="card-button_buy">Buy now</button>
          </div>

          <p className="card_discription">
            <span className="card_discription__value">
              Samsung's new variant which goes beyond Galaxy to the Universe
            </span>
          </p>
          <p className="card_discount">
            <span className="card_discount__subtitle">Discount: </span>
            <span className="card_discount__value">15.46%</span>
          </p>
          <p className="card_rating">
            <span className="card_rating__subtitle">Rating: </span>
            <span className="card_rating__value">4.09</span>
          </p>
          <p className="card_stock">
            <span className="card_stock__subtitle">Stock: </span>
            <span className="card_stock__value">36</span>
          </p>
        </div>
      </section>
    </main>
  );
};

export default ProductPage;
