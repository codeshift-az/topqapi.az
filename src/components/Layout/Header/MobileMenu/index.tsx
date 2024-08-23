import { useState } from "react";
import { Link } from "react-router-dom";

// Constants
import { contactDetails } from "@/constants";

interface Props {
  isShown: boolean;
  closeMenu: () => void;
}

function MobileMenu({ isShown, closeMenu }: Props) {
  const [showSubMenu, setShowSubMenu] = useState<boolean[]>([false]);

  const toggleSubMenu = (index: number) => {
    setShowSubMenu((prev) =>
      prev.map((item, i) => (index == i ? !item : item))
    );
  };

  if (!isShown) return;

  return (
    <div className={`offcanvas offcanvas-start canvas-mb show`}>
      <span className="icon-close icon-close-popup" onClick={closeMenu}></span>
      <div className="mb-canvas-content" style={{ background: "#fff" }}>
        <div className="mb-body">
          <ul className="nav-ul-mb" id="wrapper-menu-navigation">
            <li className="nav-mb-item">
              <Link to="/" className="mb-menu-link">
                <span>Home</span>
              </Link>
            </li>

            <li className="nav-mb-item">
              <a
                className={`mb-menu-link ${
                  !showSubMenu[0] ? "collapsed" : ""
                }`}>
                <span>Shop</span>
                <span
                  className="btn-open-sub"
                  onClick={() => toggleSubMenu(0)}></span>
              </a>

              <div className={`collapse ${showSubMenu[0] ? "show" : ""}`}>
                <ul className="sub-nav-menu" id="sub-menu-navigation">
                  <li>
                    <a role="button" className="sub-nav-link">
                      <span>Category 1</span>
                    </a>
                  </li>

                  <li>
                    <a role="button" className="sub-nav-link">
                      <span>Category 2</span>
                    </a>
                  </li>

                  <li>
                    <a role="button" className="sub-nav-link">
                      <span>Category 3</span>
                    </a>
                  </li>
                </ul>
              </div>
            </li>

            <li className="nav-mb-item">
              <Link to="/about" className="mb-menu-link">
                <span>About Us</span>
              </Link>
            </li>

            <li className="nav-mb-item">
              <Link to="/contact" className="mb-menu-link">
                <span>Contact</span>
              </Link>
            </li>
          </ul>

          <div className="mb-other-content">
            <div className="d-flex group-icon">
              <Link to="/account/wishlist" className="site-nav-icon">
                <i className="icon icon-heart"></i>Wishlist
              </Link>

              <Link to="/search" className="site-nav-icon">
                <i className="icon icon-search"></i>Search
              </Link>
            </div>

            <div className="mb-notice">
              <Link to="/contact" className="text-need">
                Need help ?
              </Link>
            </div>

            <ul className="mb-info">
              <li>Address: {contactDetails.address}</li>
              <li>
                Email: <b>{contactDetails.email}</b>
              </li>
              <li>
                Phone: <b>{contactDetails.phone}</b>
              </li>
            </ul>
          </div>
        </div>

        <div className="mb-bottom">
          <Link to="/auth/login" className="site-nav-icon">
            <i className="icon icon-account"></i>Login
          </Link>

          <div className="bottom-bar-language">
            <div className="tf-languages">
              <select className="image-select center style-default type-languages">
                <option>English</option>
                <option>Russian</option>
                <option>Azərbaycan dili</option>
              </select>
            </div>
          </div>
        </div>
      </div>
      <div
        className="modal-backdrop fade show"
        onClick={closeMenu}
        style={{ zIndex: "-1" }}></div>
    </div>
  );
}

export default MobileMenu;
