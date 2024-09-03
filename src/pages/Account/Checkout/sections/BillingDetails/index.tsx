import React, { useState } from "react";

const BillingDetails = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    country: "",
    city: "",
    address: "",
    phone: "",
    email: "",
    note: "",
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
    });

    console.log(data);
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
    <>
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
                id="country"
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
              id="note"
              value={data.note}
              onChange={handleChange}></textarea>
          </fieldset>
          <button type="submit" style={{ opacity: "0" }}></button>
        </form>
      </div>
    </>
  );
};

export default BillingDetails;
