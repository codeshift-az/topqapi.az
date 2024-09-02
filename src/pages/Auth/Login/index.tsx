import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

const Login = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
  });

  const [validationMessages, setValidateMessages] = useState({
    email: "",
    password: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidateMessages({
      email: "",
      password: "",
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
    <Layout>
      <PageTitle title="Login" />

      <section className="flat-spacing-10">
        <div className="container">
          <div className="tf-grid-layout lg-col-2 tf-login-wrap">
            <div className="tf-login-form">
              <h5 className="mb_36">Log in</h5>

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

                <div className="mb_20">
                  <Link to="/auth/forgot-password">
                    <p className="tf-btn btn-line">Forgot your password?</p>
                  </Link>
                </div>

                <div className="">
                  <button
                    type="submit"
                    className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">
                    Log in
                  </button>
                </div>
              </form>
            </div>

            <div className="tf-login-content">
              <h5 className="mb_36">I'm new here</h5>
              <p className="mb_20">
                Sign up for early Sale access plus tailored new arrivals, trends
                and promotions. To opt out, click unsubscribe in our emails.
              </p>

              <Link to="/auth/register" className="tf-btn btn-line">
                Register<i className="icon icon-arrow1-top-left"></i>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Login;
