import { useState } from "react";

// Components
import Layout from "@/components/Layout";

const ResetPassword = () => {
  const [data, setData] = useState({
    new_password: "",
    password_new: "",
    error: "",
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
    if (data.new_password !== data.password_new) {
      setValidateMessages((prev) => ({
        ...prev,
        password_repeat: "Password and Password repeat must be the same",
        password: "wrong",
      }));
    }
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
      <div id="wrapper">
        <div className="tf-page-title style-2">
          <div className="container-full">
            <div className="heading text-center">Reset Password</div>
          </div>
        </div>

        <section className="flat-spacing-10">
          <div className="container">
            <div className="form-register-wrap">
              <div className="flat-title align-items-start gap-0 mb_30 px-0">
                <h5 className="mb_18">Reset</h5>
              </div>

              <div>
                <form onSubmit={handleSubmit}>
                  <div className="tf-field style-1 mb_15">
                    <input
                      required
                      type="password"
                      name="new_password"
                      placeholder="New Password"
                      value={data.new_password}
                      onChange={handleChange}
                      className={`form-control ${
                        validationMessages.password ? "is-invalid" : ""
                      }`}
                    />
                  </div>

                  <div className="tf-field style-1 mb_30">
                    <input
                      required
                      type="password"
                      name="password_new"
                      placeholder="New Password Repeat"
                      value={data.password_new}
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
                      Reset
                    </button>
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

export default ResetPassword;
