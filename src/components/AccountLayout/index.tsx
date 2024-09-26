import { Link, useLocation } from "react-router-dom";

// Components
import Layout from "../Layout";
import PageTitle from "../PageTitle";

interface Props {
  children: React.ReactNode;
  title: string;
}
const AcoountLayout = ({ children, title }: Props) => {
  const location = useLocation();

  return (
    <Layout>
      <div>
        <PageTitle title={title} />
        <section className="flat-spacing-11">
          <div className="container">
            <div className="row">
              <div className="col-lg-3">
                <ul className="my-account-nav">
                  <li>
                    <Link
                      to="/account/details"
                      className={`my-account-nav-item ${
                        location.pathname === "/en/account/details"
                          ? "active"
                          : ""
                      }`}>
                      Account Details
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/account/favorites"
                      className={`my-account-nav-item ${
                        location.pathname === "/en/account/favorites"
                          ? "active"
                          : ""
                      }`}>
                      Favorites
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/account/orders"
                      className={`my-account-nav-item ${
                        location.pathname === "/en/account/orders"
                          ? "active"
                          : ""
                      }`}>
                      Orders
                    </Link>
                  </li>
                  <li>
                    <Link
                      to="/account/address"
                      className={`my-account-nav-item ${
                        location.pathname === "/en/account/address"
                          ? "active"
                          : ""
                      }`}>
                      Addresses
                    </Link>
                  </li>

                  <li>
                    <Link to="/" className="my-account-nav-item">
                      Logout
                    </Link>
                  </li>
                </ul>
              </div>
              <div className="col-lg-9">{children}</div>
            </div>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default AcoountLayout;
