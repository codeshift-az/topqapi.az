import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import Layout from "@/components/Layout";

const ForgotPassword = () => {
  const [emailData, setEmailData] = useState("");

  const navigate = useNavigate();

  const submitReset = (e) => {
    e.preventDefault();
    navigate("/auth/reset-password");
    return;
  };
  return (
    <Layout>
      <div id="wrapper">
        <div className="tf-page-title style-2">
          <div className="container-full">
            <div className="heading text-center">Forgot your password ?</div>
          </div>
        </div>

        <section className="flat-spacing-10">
          <div className="container">
            <div className="form-register-wrap">
              <div className="flat-title align-items-start gap-0 mb_30 px-0">
                <h5 className="mb_18">Reset your password</h5>
                <p className="text_black-2">
                  We will send you an email to reset your password
                </p>
              </div>

              <div>
                <form onSubmit={submitReset}>
                  <div className="tf-field style-1 mb_15">
                    <input
                      required
                      type="email"
                      name="email"
                      value={emailData}
                      onChange={(e) => {
                        setEmailData(e.target.value);
                      }}
                      placeholder=""
                      className="tf-field-input tf-input"
                    />
                    <label className="tf-field-label fw-4 text_black-2">
                      Email *
                    </label>
                  </div>

                  <div className="mb_20">
                    <button
                      type="submit"
                      className="tf-btn w-100 radius-3 btn-fill animate-hover-btn justify-content-center">
                      Reset password
                    </button>
                  </div>

                  <div className="text-center">
                    <Link to="/auth/login" className="tf-btn btn-line">
                      Cancel
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

export default ForgotPassword;
