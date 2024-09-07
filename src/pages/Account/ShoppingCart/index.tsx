import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import {
  AmazonIcon,
  AmericanIcon,
  IconCar,
  IconMinus,
  IconPlus,
  MasterIcon,
  PaypalIcon,
  ProductImage1,
  VisaIcon,
} from "@/assets/images";

// Components
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import Countdown from "./component/Countdown";

const ShoppingCart = () => {
  const [showMenu, setShowMenu] = useState(false);

  const [productData, setProductData] = useState([
    {
      img: ProductImage1,
      title: "Oversized Printed T-shirt",
      color: "White",
      size: "M",
      price: "18",
      id: 1,
      quantity: 1,
    },
    {
      img: ProductImage1,
      title: "Ribbed Tank Top",
      color: "White",
      size: "S",
      price: "18",
      id: 2,
      quantity: 1,
    },
  ]);

  const [data, setData] = useState({
    country: "",
    note: "",
    zipcode: "",
  });

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

  const increaseCart = (id: number) => {
    setProductData((prev) =>
      prev.map((item) =>
        item.id === id ? { ...item, quantity: item.quantity + 1 } : item
      )
    );
  };

  const decreaseCart = (id: number) => {
    setProductData((prev) =>
      prev.map((item) =>
        item.id === id && item.quantity > 1
          ? { ...item, quantity: item.quantity - 1 }
          : { ...item, quantity: item.quantity }
      )
    );
  };

  const removeCart = (id: number) => {
    setProductData((prev) => prev.filter((item) => item.id !== id));
  };

  const totalPrice = (id: number) => {
    const total = productData.map((item) => {
      if (item.id === id) {
        return +item.price * item.quantity;
      }
    });
    return total;
  };

  const subTotalPrice = () => {
    return productData.reduce((total, item) => {
      return total + +item.price * item.quantity;
    }, 0);
  };

  return (
    <Layout>
      <PageTitle title="Shopping Cart" />
      <section className="flat-spacing-11">
        <div className="container">
          <Countdown />
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
                            <span
                              className="remove-cart link remove"
                              onClick={() => removeCart(item.id)}>
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
                              <span
                                className="btn-quantity minus-btn"
                                onClick={() => decreaseCart(item.id)}>
                                <img
                                  src={IconMinus}
                                  className="d-inline-block"
                                  alt=""
                                />
                              </span>

                              <input
                                type="text"
                                name="quantity"
                                value={item.quantity}
                                onChange={handleChange}
                              />

                              <span
                                className="btn-quantity plus-btn"
                                onClick={() => increaseCart(item.id)}>
                                <img
                                  src={IconPlus}
                                  className="d-inline-block"
                                  alt=""
                                />
                              </span>
                            </div>
                          </div>
                        </td>
                        <td className="tf-cart-item_total">
                          <div className="cart-total">
                            $ {totalPrice(item.id)}
                          </div>
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
                        <img src={IconCar} alt="icon" />
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
                            className="tf-select w-100">
                            <option value="---" data-provinces="[]">
                              ---
                            </option>
                            <option value="Azerbaijan"> Australia</option>
                            <option value="Austria">Austria</option>
                          </select>
                        </fieldset>
                        <fieldset className="field">
                          <label className="label">Zip code</label>
                          <input
                            type="text"
                            name="zipcode"
                            placeholder="Zipcode"
                            onChange={handleChange}
                            value={data.zipcode}
                          />
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
                    <span className="total-value">
                      $ {subTotalPrice()}.00 USD
                    </span>
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
                    <Link to="account/checkout">
                      <button className="tf-btn w-100 btn-fill animate-hover-btn radius-3 justify-content-center">
                        <span>Check out</span>
                      </button>
                    </Link>
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
