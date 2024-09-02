import { Link } from "react-router-dom";

// Assets
import ProductImage1 from "@/assets/images/products/white-2.jpg";

interface Props {
  isShown?: boolean;
  closeMenu: () => void;
}

function ShoppingCart({ isShown, closeMenu }: Props) {
  const cartItems = [
    {
      id: 1,
      name: "T-shirt",
      variant: "Light gray",
      price: "$25.00",
      quantity: 1,
      image: ProductImage1,
    },
    {
      id: 2,
      name: "Oversized Motif T-shirt",
      variant: "Light gray",
      price: "$25.00",
      quantity: 1,
      image: ProductImage1,
    },
  ];

  if (!isShown) return;

  return (
    <div
      className="modal fullRight fade modal-shopping-cart show"
      style={{ display: "block" }}>
      <div className="modal-dialog" style={{ zIndex: "2000" }}>
        <div className="modal-content">
          <div className="header">
            <div className="title fw-5">Shopping cart</div>
            <span
              className="icon-close icon-close-popup"
              onClick={closeMenu}
              style={{ cursor: "pointer" }}></span>
          </div>

          <div className="wrap">
            <div className="tf-mini-cart-threshold">
              <div className="tf-progress-bar">
                <span style={{ width: "50%" }}></span>
              </div>
              <div className="tf-progress-msg">
                Buy <span className="price fw-6">$75.00</span> more to enjoy{" "}
                <span className="fw-6">Free Shipping</span>
              </div>
            </div>

            <div className="tf-mini-cart-wrap">
              <div className="tf-mini-cart-main">
                <div className="tf-mini-cart-sroll">
                  <div className="tf-mini-cart-items">
                    {cartItems.map((item, index) => (
                      <div key={index} className="tf-mini-cart-item">
                        <div className="tf-mini-cart-image">
                          <Link to="/product-detail">
                            <img src={item.image} alt={item.name} />
                          </Link>
                        </div>

                        <div className="tf-mini-cart-info">
                          <Link to="/product-detail">{item.name}</Link>
                          <div className="meta-variant">{item.variant}</div>
                          <div className="price fw-6">{item.price}</div>
                          <div className="tf-mini-cart-btns">
                            <div className="wg-quantity small">
                              <span className="btn-quantity minus-btn">-</span>
                              <input
                                type="text"
                                name="number"
                                defaultValue="1"
                              />
                              <span className="btn-quantity plus-btn">+</span>
                            </div>
                            <div className="tf-mini-cart-remove">Remove</div>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                  <div className="tf-mini-cart-bottom">
                    <div className="tf-mini-cart-bottom-wrap">
                      <div className="tf-cart-totals-discounts">
                        <div className="tf-cart-total">Subtotal</div>
                        <div className="tf-totals-total-value fw-6">
                          $49.99 USD
                        </div>
                      </div>
                      <div className="tf-cart-tax">
                        Taxes and <a href="#">shipping</a> calculated at
                        checkout
                      </div>
                      <div className="tf-mini-cart-line"></div>
                      <div className="tf-cart-checkbox">
                        <div className="tf-checkbox-wrapp">
                          <input
                            className=""
                            type="checkbox"
                            id="CartDrawer-Form_agree"
                            name="agree_checkbox"
                          />
                          <div>
                            <i className="icon-check"></i>
                          </div>
                        </div>
                        <label htmlFor="CartDrawer-Form_agree">
                          I agree with the
                          <a href="#" title="Terms of Service">
                            terms and conditions
                          </a>
                        </label>
                      </div>
                      <div className="tf-mini-cart-view-checkout">
                        <Link
                          to="/"
                          className="tf-btn btn-outline radius-3 link w-100 justify-content-center">
                          View cart
                        </Link>
                        <Link
                          to="/"
                          className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center">
                          <span>Check out</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {isShown && (
        <div className="modal-backdrop fade show" onClick={closeMenu}></div>
      )}
    </div>
  );
}

export default ShoppingCart;
