import { useState } from "react";
import { Link } from "react-router-dom";

// Components
import Layout from "@/components/Layout";

const Register = () => {
  const [data, setData] = useState({
    email: "",
    password: "",
    password_repeat: "",
    error: "",
  });

  const submitRegister = (e) => {
    e.preventDefault();
    if (data.password === data.password_repeat) {
      return setData((prev) => ({
        ...prev,
        error: "",
      }));
    } else {
      setData((prev) => ({
        ...prev,
        error: "Passwords do not match",
      }));
    }
  };

  return (
    <Layout>
      <div id="wrapper">
        <div className="tf-page-title style-2">
          <div className="container-full">
            <div className="heading text-center">Register</div>
          </div>
        </div>

        <section className="flat-spacing-10">
          <div className="container">
            <div className="form-register-wrap">
              <div className="flat-title align-items-start gap-0 mb_30 px-0">
                <h5 className="mb_18">Register</h5>
                <p className="text_black-2">
                  Sign up for early Sale access plus tailored new arrivals,
                  trends and promotions. To opt out, click unsubscribe in our
                  emails
                </p>
              </div>

              <div>
                <form onSubmit={submitRegister}>
                  <div className="tf-field style-1 mb_15">
                    <input
                      required
                      type="email"
                      name="email"
                      placeholder=""
                      value={data.email}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          email: e.target.value,
                        }))
                      }
                      className="tf-field-input tf-input"
                    />
                    <label className="tf-field-label fw-4 text_black-2">
                      Email *
                    </label>
                  </div>

                  <div className="tf-field style-1 mb_15">
                    <input
                      required
                      type="password"
                      name="password"
                      placeholder=""
                      value={data.password}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          password: e.target.value,
                        }))
                      }
                      className="tf-field-input tf-input"
                    />
                    <label className="tf-field-label fw-4 text_black-2">
                      Password *
                    </label>
                  </div>

                  <div className="tf-field style-1 mb_30">
                    <input
                      required
                      type="password"
                      name="password_repeat"
                      placeholder=""
                      value={data.password_repeat}
                      onChange={(e) =>
                        setData((prev) => ({
                          ...prev,
                          password_repeat: e.target.value,
                        }))
                      }
                      className="tf-field-input tf-input"
                    />
                    <label className="tf-field-label fw-4 text_black-2">
                      Password Repeat *
                    </label>
                    <p style={{ color: "red" }}>{data.error}</p>
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
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default Register;
