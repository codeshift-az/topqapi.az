import { useState } from "react";
import { Link } from "react-router-dom";
// Constants
import { contactDetails } from "@/constants";

//Assets
import { Logo } from "@/assets/images";

const Footer = () => {
  const [showMobile, setShowMobile] = useState<boolean[]>([
    false,
    false,
    false,
  ]);
  const projectName = import.meta.env.VITE_PROJECT_NAME;

  const toggleShow = (index: number) => {
    setShowMobile((prev) => prev.map((item, i) => (index == i ? !item : item)));
  };

  return (
    <footer id="footer" className="footer">
      <div className="footer-wrap">
        <div className="footer-body">
          <div className="container">
            <div className="row">
              <div className="col-xl-3 col-md-6 col-12">
                <div className="footer-infor">
                  <div className="footer-logo">
                    <Link to="/">
                      <img src={Logo} alt="" />
                    </Link>
                  </div>
                  <ul>
                    <li>
                      <p>Address: {contactDetails.address}</p>
                    </li>

                    <li>
                      <p>
                        Email: <a href="/">{contactDetails.email}</a>
                      </p>
                    </li>

                    <li>
                      <p>
                        Phone: <a href="/">{contactDetails.phone}</a>
                      </p>
                    </li>
                  </ul>
                  <a href="contact-1.html" className="tf-btn btn-line">
                    Get direction<i className="icon icon-arrow1-top-left"></i>
                  </a>
                  <ul className="tf-social-icon d-flex gap-10">
                    <li>
                      <Link
                        target="blank"
                        to={contactDetails.facebook}
                        className="box-icon w_34 round social-facebook border-line-black">
                        <i className="icon fs-14 icon-fb"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        target="blank"
                        to={contactDetails.x}
                        className="box-icon w_34 round social-twiter border-line-black">
                        <i className="icon fs-12 icon-Icon-x"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        target="blank"
                        to={contactDetails.instagram}
                        className="box-icon w_34 round social-instagram border-line-black">
                        <i className="icon fs-14 icon-instagram"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        target="blank"
                        to={contactDetails.tiktok}
                        className="box-icon w_34 round social-tiktok border-line-black">
                        <i className="icon fs-14 icon-tiktok"></i>
                      </Link>
                    </li>

                    <li>
                      <Link
                        target="blank"
                        to={contactDetails.pinterest}
                        className="box-icon w_34 round social-pinterest border-line-black">
                        <i className="icon fs-14 icon-pinterest-1"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
              <div
                className={`col-xl-3 col-md-6 col-12 footer-col-block ${
                  showMobile[0] ? `open` : ""
                }`}>
                <div className="footer-heading footer-heading-desktop">
                  <h6>Help</h6>
                </div>

                <div
                  className="footer-heading footer-heading-moblie"
                  onClick={() => {
                    toggleShow(0);
                  }}>
                  <h6>Help</h6>
                </div>

                <ul
                  className="footer-menu-list tf-collapse-content"
                  style={{ display: `${showMobile[0] ? `block` : `none`}` }}>
                  <li>
                    <Link to="/privacy-policy" className="footer-menu_item">
                      Privacy Policy
                    </Link>
                  </li>

                  <li>
                    <Link to="delivery-return" className="footer-menu_item">
                      Returns + Exchanges
                    </Link>
                  </li>

                  <li>
                    <Link to="shipping-delivery" className="footer-menu_item">
                      Shipping
                    </Link>
                  </li>

                  <li>
                    <Link to="/terms-conditions" className="footer-menu_item">
                      Terms &amp; Conditions
                    </Link>
                  </li>

                  <li>
                    <Link to="/faq-1" className="footer-menu_item">
                      FAQ’s
                    </Link>
                  </li>

                  <li>
                    <Link to="/compare" className="footer-menu_item">
                      Compare
                    </Link>
                  </li>

                  <li>
                    <Link to="/wishlist" className="footer-menu_item">
                      My Wishlist
                    </Link>
                  </li>
                </ul>
              </div>
              <div
                className={`col-xl-3 col-md-6 col-12 footer-col-block ${
                  showMobile[1] ? `open` : ""
                }`}>
                <div className="footer-heading footer-heading-desktop">
                  <h6>About us</h6>
                </div>

                <div
                  className="footer-heading footer-heading-moblie"
                  onClick={() => {
                    toggleShow(1);
                  }}>
                  <h6>About us</h6>
                </div>

                <ul
                  className="footer-menu-list tf-collapse-content"
                  style={{ display: `${showMobile[1] ? `block` : `none`}` }}>
                  <li>
                    <Link to="/about-us" className="footer-menu_item">
                      Our Story
                    </Link>
                  </li>

                  <li>
                    <Link to="/our-store" className="footer-menu_item">
                      Visit Our Store
                    </Link>
                  </li>

                  <li>
                    <Link to="/contact-1" className="footer-menu_item">
                      Contact Us
                    </Link>
                  </li>

                  <li>
                    <Link to="/login" className="footer-menu_item">
                      Account
                    </Link>
                  </li>
                </ul>
              </div>

              <div
                className={`col-xl-3 col-md-6 col-12 footer-col-block ${
                  showMobile[2] ? `open` : ""
                }`}>
                <div className="footer-newsletter footer-col-block">
                  <div className="footer-heading footer-heading-desktop">
                    <h6>Sign Up for Email</h6>
                  </div>

                  <div
                    className="footer-heading footer-heading-moblie"
                    onClick={() => {
                      toggleShow(2);
                    }}>
                    <h6>Sign Up for Email</h6>
                  </div>

                  <div
                    className="tf-collapse-content"
                    style={{
                      display: `${showMobile[2] ? `block` : `none`}`,
                    }}>
                    <div className="footer-menu_item">
                      Sign up to get first dibs on new arrivals, sales,
                      exclusive content, events and more!
                    </div>

                    <form className="form-newsletter">
                      <div id="subscribe-content">
                        <fieldset className="email">
                          <input
                            type="email"
                            name="email-form"
                            placeholder="Enter your email...."
                          />
                        </fieldset>

                        <div className="button-submit">
                          <button className="tf-btn btn-sm radius-3 btn-fill btn-icon animate-hover-btn">
                            Subscribe
                            <i className="icon icon-arrow1-top-left"></i>
                          </button>
                        </div>
                      </div>

                      <div id="subscribe-msg"></div>
                    </form>
                    <div className="tf-cur">
                      <div className="tf-languages">
                        <select className="image-select center style-default type-languages">
                          <option>English</option>
                          <option>Русский</option>
                          <option>Azərbaycan dili</option>
                        </select>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="footer-bottom">
          <div className="container">
            <div className="row">
              <div className="col-12">
                <div className="footer-bottom-wrap d-flex gap-20 flex-wrap justify-content-between align-items-center">
                  <div className="footer-menu_item">© 2024 {projectName}</div>

                  <div className="tf-payment">
                    <img src="images/payments/visa.png" alt="" />
                    <img src="images/payments/img-1.png" alt="" />
                    <img src="images/payments/img-2.png" alt="" />
                    <img src="images/payments/img-3.png" alt="" />
                    <img src="images/payments/img-4.png" alt="" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
