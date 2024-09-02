import React, { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    password_repeat: "",
  });

  const [validationMessages, setValidateMessages] = useState({
    email: "",
    password: "",
    password_repeat: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidateMessages({
      email: "",
      password: "",
      password_repeat: "",
    });

    if (data.password !== data.password_repeat) {
      setValidateMessages((prev) => ({
        ...prev,
        password_repeat: "Password and Password repeat must be the same",
      }));
      return;
    }

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
    <Layout>
      <PageTitle title="Register" />

      <section className="flat-spacing-10">
        <div className="container">
          <div className="form-register-wrap">
            <div className="flat-title align-items-start gap-0 mb_30 px-0">
              <h5 className="mb_18">Register</h5>
              <p className="text_black-2">
                Sign up for early Sale access plus tailored new arrivals,
                trends, and promotions. To opt out, click unsubscribe in our
                emails.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="tf-field style-1 mb_15">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email"
                  value={data.email}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.email ? "is-invalid" : ""
                  }`}
                />

                <label className="invalid-feedback">
                  {validationMessages.email}
                </label>
              </div>

              <div className="tf-field style-1 mb_15">
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="Password"
                  value={data.password}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.password ? "is-invalid" : ""
                  }`}
                />

                <label className="invalid-feedback">
                  {validationMessages.password}
                </label>
              </div>

              <div className="tf-field style-1 mb_30">
                <input
                  required
                  type="password"
                  name="password_repeat"
                  placeholder="Password Repeat"
                  value={data.password_repeat}
                  onChange={handleChange}
                  className={`form-control ${
                    validationMessages.password_repeat ? "is-invalid" : ""
                  }`}
                />

                <label className="invalid-feedback">
                  {validationMessages.password_repeat}
                </label>
              </div>

              <div className="mb_20">
                <button
                  type="submit"
                  className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">
                  Register
                </button>
              </div>

              <div className="text-center">
                <Link to="/auth/login" className="tf-btn btn-line">
                  Already have an account? Log in here
                  <i className="icon icon-arrow1-top-left"></i>
                </Link>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Register;
