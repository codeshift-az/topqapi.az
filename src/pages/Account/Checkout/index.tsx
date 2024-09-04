import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

// Assets
import { ProductImage1 } from "@/assets/images";

const Checkout = () => {
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
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    address: "",
    phone: "",
    email: "",
    note: "",
    discount_code: "",
    payment: "bank",
  });

  const [validationMessages, setValidationMessages] = useState({
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    address: "",
    phone: "",
    email: "",
    note: "",
    discount_code: "",
    payment: "bank",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidationMessages({
      first_name: "",
      last_name: "",
      country: "",
      city: "",
      address: "",
      phone: "",
      email: "",
      note: "",
      discount_code: "",
      payment: "bank",
    });

    console.log(data);
    return;
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
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
      <PageTitle title="Check Out" />
      <section className="flat-spacing-11">
        <div className="container">
          <div className="tf-page-cart-wrap layout-2">
            <div className="tf-page-cart-item">
              <h5 className="fw-5 mb_20">Billing details</h5>
              <form className="form-checkout" onSubmit={handleSubmit}>
                <div className="box grid-2">
                  <fieldset className="fieldset">
                    <label>First Name</label>
                    <input
                      required
                      type="text"
                      className={`form-control ${
                        validationMessages.first_name ? "is-invalid" : ""
                      }`}
                      name="first_name"
                      value={data.first_name}
                      onChange={handleChange}
                    />
                    <label className="invalid-feedback">
                      {validationMessages.first_name}
                    </label>
                  </fieldset>

                  <fieldset className="fieldset">
                    <label>Last Name</label>
                    <input
                      required
                      type="text"
                      className={`form-control ${
                        validationMessages.last_name ? "is-invalid" : ""
                      }`}
                      onChange={handleChange}
                      name="last_name"
                      value={data.last_name}
                    />
                    <label className="invalid-feedback">
                      {validationMessages.last_name}
                    </label>
                  </fieldset>
                </div>

                <fieldset className="box fieldset">
                  <label>Country/Region</label>
                  <div className="select-custom">
                    <select
                      className="tf-select w-100"
                      name="country"
                      value={data.country}
                      onChange={handleChange}>
                      <option value="---">---</option>

                      <option value="Azerbaijan">Azerbaijan</option>

                      <option value="Turkey">Turkey</option>

                      <option value="Russia">Russia</option>
                    </select>
                  </div>
                  <label className="invalid-feedback">
                    {validationMessages.country}
                  </label>
                </fieldset>

                <fieldset className="box fieldset">
                  <label>Town/City</label>
                  <input
                    required
                    type="text"
                    name="city"
                    value={data.city}
                    onChange={handleChange}
                    className={`form-control ${
                      validationMessages.city ? "is-invalid" : ""
                    }`}
                  />
                  <label className="invalid-feedback">
                    {validationMessages.city}
                  </label>
                </fieldset>

                <fieldset className="box fieldset">
                  <label>Address</label>
                  <input
                    required
                    type="text"
                    name="address"
                    value={data.address}
                    onChange={handleChange}
                    className={`form-control ${
                      validationMessages.address ? "is-invalid" : ""
                    }`}
                  />
                  <label className="invalid-feedback">
                    {validationMessages.address}
                  </label>
                </fieldset>

                <fieldset className="box fieldset">
                  <label>Phone Number</label>
                  <input
                    required
                    type="number"
                    name="phone"
                    value={data.phone}
                    onChange={handleChange}
                    className={`form-control ${
                      validationMessages.phone ? "is-invalid" : ""
                    }`}
                  />
                  <label className="invalid-feedback">
                    {validationMessages.phone}
                  </label>
                </fieldset>

                <fieldset className="box fieldset">
                  <label>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={data.email}
                    onChange={handleChange}
                    className={`form-control ${
                      validationMessages.email ? "is-invalid" : ""
                    }`}
                  />
                  <label className="invalid-feedback">
                    {validationMessages.email}
                  </label>
                </fieldset>

                <fieldset className="box fieldset">
                  <label>Order notes (optional)</label>
                  <textarea
                    name="note"
                    value={data.note}
                    onChange={handleChange}></textarea>
                </fieldset>
              </form>
            </div>
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
                    <div className="form-box" style={{ width: "100%" }}>
                      <input
                        type="text"
                        placeholder="Discount code"
                        name="discount_code"
                        value={data.discount_code}
                        onChange={handleChange}
                        className={`form-control ${
                          validationMessages.discount_code ? "is-invalid" : ""
                        }`}
                      />
                      <label
                        className="invalid-feedback"
                        style={{ position: "absolute" }}>
                        {validationMessages.discount_code}
                      </label>
                    </div>
                    <Link
                      to="/"
                      className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">
                      Apply
                    </Link>
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
                      <label >Direct bank transfer</label>
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
                      <label>Cash on delivery</label>
                    </div>
                    <p className="text_black-2 mb_20">
                      Your personal data will be used to process your order,
                      support your experience throughout this website, and for
                      other purposes described in our
                      <Link
                        to="/privacy-policy"
                        className="text-decoration-underline">
                        privacy policy
                      </Link>
                      .
                    </p>

                    <div className="box-checkbox fieldset-radio mb_20">
                      <input type="checkbox" className="tf-check" />
                      <label className="text_black-2">
                        I have read and agree to the website
                        <Link to="/" className="text-decoration-underline">
                          terms and conditions
                        </Link>
                        .
                      </label>
                    </div>
                  </div>

                  <button
                    type="submit"
                    className="tf-btn radius-3 btn-fill btn-icon animate-hover-btn justify-content-center">
                    Place order
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Checkout;
