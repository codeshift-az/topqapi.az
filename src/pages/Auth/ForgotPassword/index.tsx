import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

// Components
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

const ForgotPassword = () => {
  const navigate = useNavigate();

  const [data, setData] = useState({
    email: "",
  });

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    navigate("/auth/reset-password");
  };

  return (
    <Layout>
      <PageTitle title="Forgot password" />

      <section className="flat-spacing-10">
        <div className="container">
          <div className="form-register-wrap">
            <div className="flat-title align-items-start gap-0 mb_30 px-0">
              <h5 className="mb_18">Forgot your password?</h5>
              <p className="text_black-2">
                We will send you an email to reset your password
              </p>
            </div>

            <form onSubmit={handleSubmit}>
              <div className="tf-field style-1 mb_15">
                <input
                  required
                  type="email"
                  name="email"
                  placeholder="Email *"
                  value={data.email}
                  onChange={(e) => {
                    setData({ ...data, email: e.target.value });
                  }}
                  className="form-control"
                />
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
      </section>
    </Layout>
  );
};

export default ForgotPassword;
