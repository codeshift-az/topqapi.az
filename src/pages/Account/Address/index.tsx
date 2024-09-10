import { useState } from "react";

// Components
import AcoountLayout from "@/components/AccountLayout";

const Address = () => {
  const [newAddress, setNewAddress] = useState(false);
  const [editAddress, setEditAddress] = useState(false);

  const [addressData, setAddressData] = useState({
    first_name: "",
    last_name: "",
    company: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    phone: "",
  });

  const [validationMessages, setValidateMessages] = useState({
    first_name: "",
    last_name: "",
    company: "",
    address: "",
    city: "",
    country: "",
    zipcode: "",
    phone: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidateMessages({
      first_name: "",
      last_name: "",
      company: "",
      address: "",
      city: "",
      country: "",
      zipcode: "",
      phone: "",
    });

    console.log(addressData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setAddressData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <AcoountLayout title="Address">
      <div className="my-account-content account-address">
        <div className="text-center widget-inner-address">
          <button
            className="tf-btn btn-fill animate-hover-btn btn-address mb_20"
            onClick={() => {
              setNewAddress(!newAddress);
            }}>
            Add a new address
          </button>
          <form
            onSubmit={handleSubmit}
            className="show-form-address wd-form-address"
            style={{ display: `${newAddress ? "block" : "none"}` }}>
            <div className="title">Add a new address</div>
            <div className="box-field grid-2-lg">
              <div className="tf-field style-1">
                <input
                  placeholder="First name"
                  type="text"
                  name="first_name"
                  value={addressData.first_name}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.first_name ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.first_name}
                </label>
              </div>
              <div className="tf-field style-1">
                <input
                  placeholder="Last name"
                  type="text"
                  name="last_name"
                  value={addressData.last_name}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.last_name ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.last_name}
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                  placeholder="Company"
                  type="text"
                  name="company"
                  value={addressData.company}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.company ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.company}
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                  placeholder="Address"
                  type="text"
                  name="address"
                  value={addressData.address}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.address ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.address}
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                  placeholder="City"
                  type="text"
                  name="city"
                  value={addressData.city}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.city ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.city}
                </label>
              </div>
            </div>
            <div className="box-field">
              <label className="mb_10 fw-4 text-start d-block text_black-2 ">
                Country/Region
              </label>
              <div className="select-custom">
                <select
                  className="tf-select w-100"
                  name="country"
                  value={addressData.country}
                  onChange={handleChange}>
                  <option value="---" data-provinces="[]">
                    ---
                  </option>
                  <option value="Azerbaijan">Azerbaijan</option>
                </select>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                  placeholder="Postal/Zipcode"
                  type="text"
                  name="zipcode"
                  value={addressData.zipcode}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.zipcode ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.zipcode}
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                  placeholder="Phone"
                  type="text"
                  name="phone"
                  value={addressData.phone}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.phone ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.phone}
                </label>
              </div>
            </div>
            <div className="box-field text-start">
              <div className="box-checkbox fieldset-radio d-flex align-items-center gap-8">
                <input type="checkbox" className="tf-check" />
                <label className="text_black-2 fw-4">
                  <a> Set as default address</a>.
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-20">
              <button
                type="submit"
                className="tf-btn btn-fill animate-hover-btn">
                Add address
              </button>
              <span
                className="tf-btn btn-fill animate-hover-btn btn-hide-address"
                onClick={() => {
                  setNewAddress(!newAddress);
                }}>
                Cancel
              </span>
            </div>
          </form>
          <h6 className="mb_20">Default</h6>
          <p>themesflat</p>
          <p>1234 Fashion Street, Suite 567</p>
          <p>New York</p>
          <p>info@fashionshop.com</p>
          <p className="mb_10">(212) 555-1234</p>
          <div className="d-flex gap-10 justify-content-center">
            <button
              className="tf-btn btn-fill animate-hover-btn justify-content-center btn-edit-address"
              onClick={() => {
                setEditAddress(!editAddress);
              }}>
              <span>Edit</span>
            </button>
            <button className="tf-btn btn-outline animate-hover-btn justify-content-center">
              <span>Delete</span>
            </button>
          </div>
          <form
            onSubmit={handleSubmit}
            className="show-form-address wd-form-address"
            style={{ display: `${editAddress ? "block" : "none"}` }}>
            <div className="title">Edit address</div>
            <div className="box-field grid-2-lg">
              <div className="tf-field style-1">
                <input
                  placeholder="First name"
                  type="text"
                  name="first_name"
                  value={addressData.first_name}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.first_name ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.first_name}
                </label>
              </div>
              <div className="tf-field style-1">
                <input
                  placeholder="Last name"
                  type="text"
                  name="last_name"
                  value={addressData.last_name}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.last_name ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.last_name}
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                  placeholder="Company"
                  type="text"
                  name="company"
                  value={addressData.company}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.company ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.company}
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                  placeholder="Address"
                  type="text"
                  name="address"
                  value={addressData.address}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.address ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.address}
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                  placeholder="City"
                  type="text"
                  name="city"
                  value={addressData.city}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.city ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.city}
                </label>
              </div>
            </div>
            <div className="box-field">
              <label className="mb_10 fw-4 text-start d-block text_black-2 ">
                Country/Region
              </label>
              <div className="select-custom">
                <select
                  className="tf-select w-100"
                  name="country"
                  value={addressData.country}
                  onChange={handleChange}>
                  <option value="---" data-provinces="[]">
                    ---
                  </option>
                  <option value="Azerbaijan">Azerbaijan</option>
                </select>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                  placeholder="Postal/Zipcode"
                  type="text"
                  name="zipcode"
                  value={addressData.zipcode}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.zipcode ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.zipcode}
                </label>
              </div>
            </div>
            <div className="box-field">
              <div className="tf-field style-1">
                <input
                  placeholder="Phone"
                  type="text"
                  name="phone"
                  value={addressData.phone}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.phone ? "is-invalid" : ""
                  }`}
                  required
                />
                <label className="invalid-feedback">
                  {validationMessages.phone}
                </label>
              </div>
            </div>
            <div className="box-field text-start">
              <div className="box-checkbox fieldset-radio d-flex align-items-center gap-8">
                <input type="checkbox" className="tf-check" />
                <label className="text_black-2 fw-4">
                  <a> Set as default address</a>.
                </label>
              </div>
            </div>
            <div className="d-flex align-items-center justify-content-center gap-20">
              <button
                type="submit"
                className="tf-btn btn-fill animate-hover-btn">
                Uptade address
              </button>
              <span
                className="tf-btn btn-fill animate-hover-btn btn-hide-address"
                onClick={() => {
                  setEditAddress(!editAddress);
                }}>
                Cancel
              </span>
            </div>
          </form>
        </div>
      </div>
    </AcoountLayout>
  );
};

export default Address;
