import React, { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import { ProductImage1 } from "@/assets/images";

const OrderCart = () => {
  const productData = [
    {
      title: "Ribbed modal T-shirt",
      color: "Brown",
      size: "M",
      price: "25.00",
      image: ProductImage1,
      id: 1,
    },
    {
      title: "Ribbed modal T-shirt",
      color: "White",
      size: "M",
      price: "25.00",
      image: ProductImage1,
      id: 2,
    },
  ];

  const [data, setData] = useState({
    discount_code: "",
    payment: "bank",
  });

  const [validationMessages, setValidationMessages] = useState({
    discount_code: "",
    payment: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidationMessages({
      discount_code: "",
      payment: "",
    });

    console.log(data);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <div className="tf-page-cart-footer">
      <div className="tf-cart-footer-inner">
        <h5 className="fw-5 mb_20">Your order</h5>
        <form
          className="tf-page-cart-checkout widget-wrap-checkout"
          onSubmit={handleSubmit}>
          <ul className="wrap-checkout-product">
            {productData.map((item) => (
              <li className="checkout-product-item" key={item.id}>
                <figure className="img-product">
                  <img src={item.image} alt="product" />
                  <span className="quantity">1</span>
                </figure>
                <div className="content">
                  <div className="info">
                    <p className="name">{item.title}</p>
                    <span className="variant">
                      {item.color} / {item.size}
                    </span>
                  </div>
                  <span className="price">${item.price}</span>
                </div>
              </li>
            ))}
          </ul>

          <div className="coupon-box">
            <input
              type="text"
              placeholder="Discount code"
              name="discount_code"
              value={data.discount_code}
              onChange={handleChange}
              required
            />
            <Link
              to="/"
              className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">
              Apply
            </Link>
            <label className="invalid-feedback">
              {validationMessages.discount_code}
            </label>
          </div>

          <div className="d-flex justify-content-between line pb_20">
            <h6 className="fw-5">Total</h6>
            <h6 className="total fw-5">$122.00</h6>
          </div>
          <div className="wd-check-payment">
            <div className="fieldset-radio mb_20">
              <input
                type="radio"
                name="payment"
                value="bank"
                className="tf-check"
                checked={data.payment === "bank"}
                onChange={handleChange}
              />
              <label htmlFor="bank">Direct bank transfer</label>
            </div>

            <div className="fieldset-radio mb_20">
              <input
                type="radio"
                name="payment"
                value="delivery"
                className="tf-check"
                checked={data.payment === "delivery"}
                onChange={handleChange}
              />
              <label htmlFor="delivery">Cash on delivery</label>
            </div>
            <p className="text_black-2 mb_20">
              Your personal data will be used to process your order, support
              your experience throughout this website, and for other purposes
              described in our
              <Link to="/privacy-policy" className="text-decoration-underline">
                privacy policy
              </Link>
              .
            </p>

            <div className="box-checkbox fieldset-radio mb_20">
              <input type="checkbox" id="check-agree" className="tf-check" />
              <label htmlFor="check-agree" className="text_black-2">
                I have read and agree to the website
                <Link to="/" className="text-decoration-underline">
                  terms and conditions
                </Link>
                .
              </label>
            </div>
          </div>

          <button className="tf-btn radius-3 btn-fill btn-icon animate-hover-btn justify-content-center">
            Place order
          </button>
        </form>
      </div>
    </div>
  );
};

export default OrderCart;
