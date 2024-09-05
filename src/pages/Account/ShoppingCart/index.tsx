import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import {
  AmazonIcon,
  AmericanIcon,
  CarIcon,
  MasterIcon,
  PaypalIcon,
  ViewCartImg,
  VisaIcon,
} from "@/assets/images";

// Components
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

const ShoppingCart = () => {
  const [showMenu, setShowMenu] = useState(false);

  const productData = [
    {
      img: ViewCartImg,
      title: "Oversized Printed T-shirt",
      color: "White",
      size: "M",
      price: "18",
      id: 1,
    },
    {
      img: ViewCartImg,
      title: "Ribbed Tank Top",
      color: "White",
      size: "S",
      price: "18",
      id: 2,
    },
  ];

  const [data, setData] = useState({
    country: "",
    note: "",
    zipcode: "",
    quantity: "1",
  });

  const [validationMessages, setValidationMessages] = useState({
    country: "",
    note: "",
    zipcode: "",
  });

  const handleClick = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();

    setValidationMessages({
      country: "",
      note: "",
      zipcode: "",
    });
    if (!data.country) {
      setValidationMessages((prev) => ({
        ...prev,
        country: "Please select your country",
      }));
    }

    console.log(data);
    return;
  };

  const handleChange = (
    e: React.ChangeEvent<
      | HTMLInputElement
      | HTMLTextAreaElement
      | HTMLSelectElement
      | HTMLButtonElement
    >
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  return (
    <Layout>
      <PageTitle title="Shopping Cart" />
      <section className="flat-spacing-11">
        <div className="container">
          <div className="tf-cart-countdown">
            <div className="title-left">
              <svg
                className="d-inline-block"
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="24"
                viewBox="0 0 16 24"
                fill="rgb(219 18 21)">
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M10.0899 24C11.3119 22.1928 11.4245 20.2409 10.4277 18.1443C10.1505 19.2691 9.64344 19.9518 8.90645 20.1924C9.59084 18.2379 9.01896 16.1263 7.19079 13.8576C7.15133 16.2007 6.58824 17.9076 5.50148 18.9782C4.00436 20.4517 4.02197 22.1146 5.55428 23.9669C-0.806588 20.5819 -1.70399 16.0418 2.86196 10.347C3.14516 11.7228 3.83141 12.5674 4.92082 12.8809C3.73335 7.84186 4.98274 3.54821 8.66895 0C8.6916 7.87426 11.1062 8.57414 14.1592 12.089C17.4554 16.3071 15.5184 21.1748 10.0899 24Z"></path>
              </svg>
              <p>These products are limited, checkout within </p>
            </div>
            <div className="js-countdown timer-count">
              <div className="countdown__timer">
                <span className="countdown__item">
                  <span className="countdown__value countdown__value--0 js-countdown__value--0">
                    0
                  </span>
                  <span className="countdown__label">d:</span>
                </span>

                <span className="countdown__item">
                  <span className="countdown__value countdown__value--0 js-countdown__value--1">
                    00
                  </span>
                  <span className="countdown__label">h:</span>
                </span>

                <span className="countdown__item">
                  <span className="countdown__value countdown__value--0 js-countdown__value--2">
                    00
                  </span>
                  <span className="countdown__label">m:</span>
                </span>

                <span className="countdown__item">
                  <span className="countdown__value countdown__value--0 js-countdown__value--3">
                    00
                  </span>
                  <span className="countdown__label">s</span>
                </span>
              </div>
            </div>
          </div>

          <div className="tf-page-cart-wrap">
            <div className="tf-page-cart-item">
              <form>
                <table className="tf-table-page-cart">
                  <thead>
                    <tr>
                      <th>Product</th>
                      <th>Price</th>
                      <th>Quantity</th>
                      <th>Total</th>
                    </tr>
                  </thead>
                  <tbody>
                    {productData?.map((item) => (
                      <tr className="tf-cart-item file-delete" key={item.id}>
                        <td className="tf-cart-item_product">
                          <Link to="/" className="img-box">
                            <img src={item.img} alt="img-product" />
                          </Link>
                          <div className="cart-info">
                            <Link to="/" className="cart-title link">
                              {item.title}
                            </Link>
                            <div className="cart-meta-variant">
                              {item.color} / {item.size}
                            </div>
                            <span className="remove-cart link remove">
                              Remove
                            </span>
                          </div>
                        </td>
                        <td className="tf-cart-item_price">
                          <div className="cart-price">${item.price}</div>
                        </td>
                        <td className="tf-cart-item_quantity">
                          <div className="cart-quantity">
                            <div className="wg-quantity">
                              <span className="btn-quantity minus-btn">
                                <svg
                                  className="d-inline-block"
                                  width="9"
                                  height="1"
                                  viewBox="0 0 9 1"
                                  fill="currentColor">
                                  <path d="M9 1H5.14286H3.85714H0V1.50201e-05H3.85714L5.14286 0L9 1.50201e-05V1Z"></path>
                                </svg>
                              </span>

                              <input
                                type="text"
                                name="quantity"
                                value={data.quantity}
                                onChange={handleChange}
                              />

                              <span className="btn-quantity plus-btn">
                                <svg
                                  className="d-inline-block"
                                  width="9"
                                  height="9"
                                  viewBox="0 0 9 9"
                                  fill="currentColor">
                                  <path d="M9 5.14286H5.14286V9H3.85714V5.14286H0V3.85714H3.85714V0H5.14286V3.85714H9V5.14286Z"></path>
                                </svg>
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="tf-cart-item_total">
                          <div className="cart-total">$18.00</div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>

                <div className="tf-page-cart-note">
                  <label>Add Order Note</label>
                  <textarea
                    name="note"
                    value={data.note}
                    onChange={handleChange}
                    placeholder="How can we help you?"></textarea>
                </div>
              </form>
            </div>

            <div className="tf-page-cart-footer">
              <div className="tf-cart-footer-inner">
                <div className="tf-free-shipping-bar">
                  <div className="tf-progress-bar">
                    <span style={{ width: "50%" }}>
                      <div className="progress-car">
                        <img src={CarIcon} alt="icon" />
                      </div>
                    </span>
                  </div>
                  <div className="tf-progress-msg">
                    Buy <span className="price fw-6">$75.00</span> more to enjoy{" "}
                    <span className="fw-6">Free Shipping</span>
                  </div>
                </div>
                <div className="tf-page-cart-checkout">
                  <div className="shipping-calculator">
                    <summary
                      className={`accordion-shipping-header d-flex justify-content-between align-items-center ${
                        showMenu ? "" : "collapsed"
                      }`}>
                      <h3 className="shipping-calculator-title">
                        Estimate Shipping
                      </h3>
                      <span
                        className="shipping-calculator_accordion-icon"
                        onClick={() => setShowMenu(!showMenu)}></span>
                    </summary>
                    <div className={`collapse ${showMenu ? "show" : ""}`}>
                      <div className="accordion-shipping-content">
                        <fieldset className="field">
                          <label className="label">Country</label>
                          <select
                            name="country"
                            value={data.country}
                            onChange={handleChange}
                            className={` tf-select w-100 ${
                              validationMessages.country ? "is-invalid" : ""
                            }`}>
                            <option value="---" data-provinces="[]">
                              ---
                            </option>
                            <option value="Azerbaijan"> Australia</option>
                            <option value="Austria">Austria</option>
                          </select>
                          <label className="invalid-feedback">
                            {validationMessages.country}
                          </label>
                        </fieldset>
                        <fieldset className="field">
                          <label className="label">Zip code</label>
                          <input
                            type="text"
                            name="zipcode"
                            placeholder="Zipcode"
                            onChange={handleChange}
                            value={data.zipcode}
                            className={
                              validationMessages.zipcode ? "is-invalid" : ""
                            }
                          />
                          <label className="invalid-feedback">
                            {validationMessages.zipcode}
                          </label>
                        </fieldset>
                        <button className="tf-btn btn-fill animate-hover-btn radius-3 justify-content-center">
                          <span>Estimate</span>
                        </button>
                      </div>
                    </div>
                  </div>
                  <div className="cart-checkbox">
                    <input type="checkbox" className="tf-check" />
                    <label className="fw-4">
                      <span>Do you want a gift wrap?</span> Only{" "}
                      <span className="fw-5">$5.00</span>
                    </label>
                  </div>
                  <div className="tf-cart-totals-discounts">
                    <h3>Subtotal</h3>
                    <span className="total-value">$18.00 USD</span>
                  </div>
                  <p className="tf-cart-tax">
                    Taxes and <Link to="/">shipping</Link>
                    calculated at checkout
                  </p>
                  <div className="cart-checkbox">
                    <input type="checkbox" className="tf-check" />
                    <label className="fw-4">
                      I agree with the
                      <Link to="/">terms and conditions</Link>
                    </label>
                  </div>
                  <div className="cart-checkout-btn">
                    <button
                      onClick={handleClick}
                      type="submit"
                      className="tf-btn w-100 btn-fill animate-hover-btn radius-3 justify-content-center">
                      <span>Check out</span>
                    </button>
                  </div>
                  <div className="tf-page-cart_imgtrust">
                    <p className="text-center fw-6">Guarantee Safe Checkout</p>
                    <div className="cart-list-social">
                      <div className="payment-item">
                        <img src={VisaIcon} alt="icon" />
                      </div>
                      <div className="payment-item">
                        <img src={PaypalIcon} alt="icon" />
                      </div>
                      <div className="payment-item">
                        <img src={MasterIcon} alt="icon" />
                      </div>
                      <div className="payment-item">
                        <img src={AmericanIcon} alt="icon" />
                      </div>
                      <div className="payment-item">
                        <img src={AmazonIcon} alt="icon" />
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ShoppingCart;
