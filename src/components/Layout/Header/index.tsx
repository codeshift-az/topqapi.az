import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import { IconMenu, Logo } from "@/assets/images";

// Related Components
import MobileMenu from "./MobileMenu";
import ShoppingCart from "./ShoppingCart";

const Header = () => {
  const [showMenu, setShowMenu] = useState(false);
  const [showCart, setShowCart] = useState(false);

  return (
    <header id="header" className="header-default">
      <div className="px_15 lg-px_40">
        <div className="row wrapper-header align-items-center">
          <div className="col-md-4 col-3 tf-lg-hidden">
            <a role="button" onClick={() => setShowMenu(true)}>
              <img src={IconMenu} alt="menu" className="icon-menu" />
            </a>
          </div>

          <div className="col-xl-3 col-md-4 col-6">
            <Link to="/" className="logo-header">
              <img src={Logo} alt="logo" className="logo" />
            </Link>
          </div>

          <div className="col-xl-6 tf-md-hidden">
            <nav className="box-navigation text-center">
              <ul className="box-nav-ul d-flex align-items-center justify-content-center gap-30">
                <li className="menu-item">
                  <Link to="/" className="item-link">
                    Home
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/shop" className="item-link">
                    Shop
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/about" className="item-link">
                    About us
                  </Link>
                </li>

                <li className="menu-item">
                  <Link to="/contact" className="item-link">
                    Contact
                  </Link>
                </li>
              </ul>
            </nav>
          </div>

          <div className="col-xl-3 col-md-4 col-3">
            <ul className="nav-icon d-flex justify-content-end align-items-center gap-20">
              <li className="nav-search">
                <Link to="/search" className="nav-icon-item">
                  <i className="icon icon-search"></i>
                </Link>
              </li>

              <li className="nav-account">
                <Link to="/auth/login" className="nav-icon-item">
                  <i className="icon icon-account"></i>
                </Link>
              </li>

              <li className="nav-wishlist">
                <Link to="/account/favorites" className="nav-icon-item">
                  <i className="icon icon-heart"></i>
                  <span className="count-box">0</span>
                </Link>
              </li>

              <li className="nav-cart">
                <a
                  role="button"
                  className="nav-icon-item"
                  onClick={() => {
                    setShowCart(true);
                  }}>
                  <i className="icon icon-bag"></i>
                  <span className="count-box">0</span>
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      <MobileMenu isShown={showMenu} closeMenu={() => setShowMenu(false)} />
      <ShoppingCart isShown={showCart} closeMenu={() => setShowCart(false)} />
    </header>
  );
};

export default Header;
