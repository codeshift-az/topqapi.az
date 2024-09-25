import { useState } from "react";

// Components
import AcoountLayout from "@/components/AccountLayout";

const AccountDetails = () => {
  const [data, setData] = useState({
    first_name: "",
    last_name: "",
    email: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
    address: "",
    country: "",
  });

  const [validationMessages, setValidateMessages] = useState({
    first_name: "",
    last_name: "",
    email: "",
    current_password: "",
    new_password: "",
    confirm_password: "",
    address: "",
    country: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidateMessages({
      first_name: "",
      last_name: "",
      email: "",
      current_password: "",
      new_password: "",
      confirm_password: "",
      address: "",
      country: "",
    });
    if (data.new_password !== data.confirm_password) {
      setValidateMessages((prev) => ({
        ...prev,
        confirm_password: "Password and Password repeat must be the same",
      }));
      return;
    }

    console.log(data);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = e.target;

    setData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };
  return (
    <AcoountLayout title="Account Details">
      <div className="my-account-content account-edit">
        <div className="">
          <form onSubmit={handleSubmit}>
            <div className="tf-field style-1 mb_15">
              <input
                required
                className={`form-control ${
                  validationMessages.first_name ? "is-invalid" : ""
                }`}
                placeholder="First name "
                type="text"
                name="first_name"
                value={data.first_name}
                onChange={handleChange}
              />
              <label className="invalid-feedback">
                {validationMessages.first_name}
              </label>
            </div>

            <div className="tf-field style-1 mb_15">
              <input
                required
                className={`form-control ${
                  validationMessages.last_name ? "is-invalid" : ""
                }`}
                placeholder="Last name"
                type="text"
                name="last_name"
                value={data.last_name}
                onChange={handleChange}
              />
              <label className="invalid-feedback">
                {validationMessages.last_name}
              </label>
            </div>

            <div className="tf-field style-1 mb_15">
              <input
                required
                className={`form-control ${
                  validationMessages.email ? "is-invalid" : ""
                }`}
                placeholder="Email"
                type="email"
                name="email"
                value={data.email}
                onChange={handleChange}
              />
              <label className="invalid-feedback">
                {validationMessages.email}
              </label>
            </div>

            <div className="tf-field style-1 mb_30">
              <input
                placeholder="Address"
                type="text"
                name="address"
                value={data.address}
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

            <div className="tf-field style-1 mb_30">
              <label className="mb_10 fw-4 text-start d-block text_black-2 ">
                Country/Region
              </label>
              <div className="select-custom">
                <select
                  className="tf-select w-100"
                  name="country"
                  value={data.country}
                  onChange={handleChange}>
                  <option value="---" data-provinces="[]">
                    ---
                  </option>
                  <option value="Azerbaijan">Azerbaijan</option>
                </select>
              </div>
            </div>

            <div className="mb_20">
              <button
                type="submit"
                className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">
                Save Changes
              </button>
            </div>
          </form>
          <form onSubmit={handleSubmit}>
            <h6 className="mb_20">Password Change</h6>
            <div className="tf-field style-1 mb_30">
              <input
                required
                className={`form-control ${
                  validationMessages.current_password ? "is-invalid" : ""
                }`}
                placeholder="Old password"
                type="password"
                name="current_password"
                value={data.current_password}
                onChange={handleChange}
              />
              <label className="invalid-feedback">
                {validationMessages.current_password}
              </label>
            </div>
            <div className="tf-field style-1 mb_30">
              <input
                required
                className={`form-control ${
                  validationMessages.new_password ? "is-invalid" : ""
                }`}
                placeholder="New password"
                type="password"
                name="new_password"
                value={data.new_password}
                onChange={handleChange}
              />
              <label className="invalid-feedback">
                {validationMessages.new_password}
              </label>
            </div>
            <div className="tf-field style-1 mb_30">
              <input
                required
                className={`form-control ${
                  validationMessages.confirm_password ? "is-invalid" : ""
                }`}
                placeholder="New password repeat"
                type="password"
                name="confirm_password"
                value={data.confirm_password}
                onChange={handleChange}
              />
              <label className="invalid-feedback">
                {validationMessages.confirm_password}
              </label>
            </div>

            <div className="mb_20">
              <button
                type="submit"
                className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">
                Save Changes
              </button>
            </div>
          </form>
        </div>
      </div>
    </AcoountLayout>
  );
};

export default AccountDetails;
