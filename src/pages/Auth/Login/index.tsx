import { Link } from "react-router-dom";

// Components
import Layout from "@/components/Layout";
import { useState } from "react";

const Login = () => {
  const [forgetPassword, setForgetPassword] = useState(false);

  console.log(forgetPassword, "testt");

  return (
    <Layout>
      <div id="wrapper">
        <div className="tf-page-title style-2">
          <div className="container-full">
            <div className="heading text-center">Log in</div>
          </div>
        </div>

        <section className="flat-spacing-10">
          <div className="container">
            <div className="tf-grid-layout lg-col-2 tf-login-wrap">
              <div className="tf-login-form">
                <div
                  id="recover"
                  style={{ display: `${forgetPassword ? "block" : "none"}` }}>
                  <h5 className="mb_24">Reset your password</h5>
                  <p className="mb_30">
                    We will send you an email to reset your password
                  </p>
                  <div>
                    <form
                      className=""
                      id="login-form"
                      action="#"
                      method="post"
                      acceptCharset="utf-8">
                      <div className="tf-field style-1 mb_15">
                        <input
                          className="tf-field-input tf-input"
                          placeholder=""
                          type="email"
                          id="property3"
                          name="email"
                        />
                        <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property3">
                          Email *
                        </label>
                      </div>
                      <div className="mb_20">
                        <p
                          className="tf-btn btn-line"
                          onClick={() => {
                            setForgetPassword(!forgetPassword);
                          }}>
                          Cancel
                        </p>
                      </div>
                      <div className="">
                        <button
                          type="submit"
                          className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">
                          Reset password
                        </button>
                      </div>
                    </form>
                  </div>
                </div>
                <div
                  id="login"
                  style={{ display: `${forgetPassword ? "none" : "block"}` }}>
                  <h5 className="mb_36">Log in</h5>
                  <div>
                    <form className="">
                      <div className="tf-field style-1 mb_15">
                        <input
                          className="tf-field-input tf-input"
                          placeholder=""
                          type="email"
                          name="email"
                        />
                        <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property3">
                          Email *
                        </label>
                      </div>

                      <div className="tf-field style-1 mb_30">
                        <input
                          className="tf-field-input tf-input"
                          placeholder=""
                          type="password"
                          name="password"
                        />
                        <label
                          className="tf-field-label fw-4 text_black-2"
                          htmlFor="property4">
                          Password *
                        </label>
                      </div>

                      <div className="mb_20">
                        <p
                          className="tf-btn btn-line"
                          onClick={() => {
                            setForgetPassword(!forgetPassword);
                          }}>
                          Forgot your password?
                        </p>
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
                </div>
              </div>

              <div className="tf-login-content">
                <h5 className="mb_36">I'm new here</h5>
                <p className="mb_20">
                  Sign up for early Sale access plus tailored new arrivals,
                  trends and promotions. To opt out, click unsubscribe in our
                  emails.
                </p>
                <Link to="/auth/register" className="tf-btn btn-line">
                  Register<i className="icon icon-arrow1-top-left"></i>
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Login;
