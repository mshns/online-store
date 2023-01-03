import { useState } from "react";
import { IProductItem } from "../../../types";

const ThumbnailList = ({ product }: { product: IProductItem }) => {
  const [imageNumber, setImageNumber] = useState(0);

  return (
    <div className="card-image">
      <img
        className="card-image_active"
        src={product.images[imageNumber]}
        alt={product.title}
      ></img>
      <div className="thumbnail-list">
        {product.images.map((_, index) => (
          <img
            key={index}
            className="thumbnail-list_item active"
            src={product.images[index]}
            alt={product.title}
            onClick={() => setImageNumber(index)}
          ></img>
        ))}
      </div>
    </div>
  );
};

export default ThumbnailList;
