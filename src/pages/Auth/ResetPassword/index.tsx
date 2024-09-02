import { useState } from "react";

// Components
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

const ResetPassword = () => {
  const [data, setData] = useState({
    password: "",
    password_repeat: "",
  });

  const [validationMessages, setValidateMessages] = useState({
    password: "",
    password_repeat: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    setValidateMessages({
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
      <PageTitle title="Reset Password" />

      <section className="flat-spacing-10">
        <div className="container">
          <div className="form-register-wrap">
            <div className="flat-title align-items-start gap-0 mb_30 px-0">
              <h5 className="mb_18">Reset Password</h5>
              <p className="text_black-2">
                Please enter your new password below to reset your password.
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="tf-field style-1 mb_15">
                <input
                  required
                  type="password"
                  name="password"
                  placeholder="New Password"
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
                  placeholder="New Password Repeat"
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
                  Reset
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default ResetPassword;
