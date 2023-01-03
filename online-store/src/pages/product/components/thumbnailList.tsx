const ThumbnailList = () => {
  return (
    <div className="card-image">
      <img
        className="card-image_active"
        src={product.images[0]}
        alt={product.title}
      ></img>
      <div className="thumbnail-list">
        <img
          className="thumbnail-list_item active"
          src={product.images[0]}
          alt={product.title}
        ></img>
        <img
          className="thumbnail-list_item"
          src={product.images[1]}
          alt={product.title}
        ></img>
        <img
          className="thumbnail-list_item"
          src={product.images[2]}
          alt={product.title}
        ></img>
      </div>
    </div>
  );
};
