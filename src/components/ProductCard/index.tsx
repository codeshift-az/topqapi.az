import { useState } from "react";
import { Link } from "react-router-dom";

const ProductCard = ({ img1, img2, img3, price, title }) => {
  const [hoveredImage, setHoveredImage] = useState(img3);

  return (
    <div className="card-product">
      <div className="card-product-wrapper">
        <Link to="/" className="product-img">
          <img
            className="lazyload img-product"
            src={hoveredImage}
            alt="image-product"
          />
          <img className="lazyload img-hover" src={img2} alt="image-product" />
        </Link>
        <div className="list-product-btn absolute-2">
          <Link to="/" className="box-icon bg_white quick-add tf-btn-loading">
            <span className="icon icon-bag"></span>
            <span className="tooltip">Quick Add</span>
          </Link>
          <button
            className="box-icon bg_white wishlist btn-icon-action"
            style={{ border: "none" }}>
            <span className="icon icon-heart"></span>
            <span className="tooltip">Add to Wishlist</span>
            <span className="icon icon-delete"></span>
          </button>
          <button
            className="box-icon bg_white compare btn-icon-action"
            style={{ border: "none" }}>
            <span className="icon icon-compare"></span>
            <span className="tooltip">Add to Compare</span>
            <span className="icon icon-check"></span>
          </button>
          <button
            style={{ border: "none" }}
            className="box-icon bg_white quickview tf-btn-loading">
            <span className="icon icon-view"></span>
            <span className="tooltip">Quick View</span>
          </button>
        </div>
      </div>
      <div className="card-product-info">
        <a href="#" className="title link">
          {title}{" "}
        </a>
        <span className="price">$ {price}</span>
        <ul className="list-color-product">
          <li
            className="list-color-item color-swatch"
            onMouseEnter={() => setHoveredImage(img3)}>
            <span className="tooltip">Orange</span>
            <span className="swatch-value bg_orange-3"></span>
            <img className="lazyload" src={img3} alt="image-product" />
          </li>
          <li
            className="list-color-item color-swatch"
            onMouseEnter={() => setHoveredImage(img1)}>
            <span className="tooltip">Black</span>
            <span className="swatch-value bg_dark"></span>
            <img className="lazyload" src={img1} alt="image-product" />
          </li>
          <li
            className="list-color-item color-swatch"
            onMouseEnter={() => setHoveredImage(img2)}>
            <span className="tooltip">White</span>
            <span className="swatch-value bg_white"></span>
            <img className="lazyload" src={img2} alt="image-product" />
          </li>
        </ul>
      </div>
    </div>
  );
};

export default ProductCard;
