import { useState } from "react";
import { Link } from "react-router-dom";

// Types
import { ProductCardProps } from "@/types/models/product"; // Import the type
import DiscountCountDown from "./DiscountCountDown";

const ProductCard = ({
  images,
  price,
  title,
  discount_end_date,
}: ProductCardProps) => {
  const [productList, setProductList] = useState<boolean[]>([
    false,
    false,
    false,
  ]);

  const clickList = (index: number) => {
    setProductList((prev) =>
      prev.map((item, i) => (index == i ? !item : item))
    );
  };

  return (
    <div className="card-product style-4 fl-item">
      <div className="card-product-wrapper">
        <Link to="/products/:slug" className="product-img">
          <img
            className="lazyload img-product"
            src={images[0]}
            alt="image-product"
          />
          <img
            className="lazyload img-hover"
            src={images[1]}
            alt="image-product"
          />
        </Link>

        <div className="list-product-btn column-right">
          <Link
            to="#"
            className={`box-icon wishlist bg_white round btn-icon-action ${
              productList[0] ? "active" : ""
            }`}
            onClick={() => clickList(0)}>
            <span className="icon icon-heart"></span>
            <span className="tooltip">Add to Wishlist</span>
            <span className="icon icon-delete"></span>
          </Link>

          <Link
            to="#"
            className={`box-icon compare bg_white round btn-icon-action ${
              productList[1] ? "active" : ""
            }`}
            onClick={() => clickList(1)}>
            <span className="icon icon-compare"></span>
            <span className="tooltip">Add to Compare</span>
            <span className="icon icon-check"></span>
          </Link>

          <Link
            to="#"
            className={`box-icon quickview bg_white round tf-btn-loading${
              productList[2] ? "active" : ""
            }`}
            onClick={() => clickList(2)}>
            <span className="icon icon-view"></span>
            <span className="tooltip">Quick View</span>
          </Link>
        </div>

        <Link to="#" className="btn-quick-add quick-add">
          QUICK ADD
        </Link>
        {discount_end_date && (
          <DiscountCountDown discountEnd={discount_end_date} />
        )}
      </div>
      <div className="card-product-info">
        <Link to="/account/favorites" className="title link">
          {title}
        </Link>
        <span className="price">$ {price}</span>
      </div>
    </div>
  );
};

export default ProductCard;
