import { useState } from "react";
import { Link } from "react-router-dom";

//Assets
import { AddGift, AddNote, Shipping } from "@/assets/images";
import ProductImage1 from "@/assets/images/products/white-2.jpg";

interface Props {
  isShown?: boolean;
  closeMenu: () => void;
}

function ShoppingCart({ isShown, closeMenu }: Props) {
  const [showIcon, setShowIcon] = useState<boolean[]>([false, false, false]);

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

  const clickIcon = (index: number) => {
    setShowIcon((prev) => prev.map((item, i) => (index == i ? !item : item)));
  };

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
                </div>
              </div>
              <div className="tf-mini-cart-bottom">
                <div className="tf-mini-cart-tool">
                  {/* //? Add note */}
                  <div
                    className="tf-mini-cart-tool-btn btn-add-note"
                    onClick={() => {
                      clickIcon(0);
                    }}>
                    <img src={AddNote} alt="icon" />
                  </div>
                  {/* //? Add note */}
                  {/* //? Add gift */}
                  <div
                    className="tf-mini-cart-tool-btn btn-add-gift"
                    onClick={() => {
                      clickIcon(1);
                    }}>
                    <img src={AddGift} alt="icon" />
                  </div>
                  {/* //? Add note  */}
                  {/* //? Add shipping */}
                  <div
                    className="tf-mini-cart-tool-btn btn-estimate-shipping"
                    onClick={() => {
                      clickIcon(2);
                    }}>
                    <img src={Shipping} alt="icon" />
                  </div>
                  {/* //? Add shipping */}
                </div>
                <div className="tf-mini-cart-bottom-wrap">
                  <div className="tf-cart-totals-discounts">
                    <div className="tf-cart-total">Subtotal</div>
                    <div className="tf-totals-total-defaultValue fw-6">
                      $49.99 USD
                    </div>
                  </div>
                  <div className="tf-cart-tax">
                    Taxes and <Link to="/">shipping</Link> calculated at
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
                      <Link to="/" title="Terms of Service">
                        terms and conditions
                      </Link>
                    </label>
                  </div>
                  <div className="tf-mini-cart-view-checkout">
                    <Link
                      to="/shopping-cart"
                      className="tf-btn btn-outline radius-3 link w-100 justify-content-center">
                      View cart
                    </Link>

                    <Link
                      to="/check-out"
                      className="tf-btn btn-fill animate-hover-btn radius-3 w-100 justify-content-center">
                      <span>Check out</span>
                    </Link>
                  </div>
                </div>
              </div>
              {/* //? Openable add note */}
              <div
                className={`tf-mini-cart-tool-openable add-note ${
                  showIcon[0] ? "open" : ""
                }`}>
                <div
                  className="overplay tf-mini-cart-tool-close"
                  onClick={() => {
                    clickIcon(0);
                  }}></div>
                <div className="tf-mini-cart-tool-content">
                  <label htmlFor="Cart-note" className="tf-mini-cart-tool-text">
                    <div className="icon">
                      <img src={AddNote} alt="icon" />
                    </div>
                    <span>Add Order Note</span>
                  </label>
                  <textarea
                    name="note"
                    placeholder="How can we help you?"></textarea>
                  <div className="tf-cart-tool-btns justify-content-center">
                    <div
                      className="tf-mini-cart-tool-primary text-center w-100 fw-6 tf-mini-cart-tool-close"
                      onClick={() => {
                        clickIcon(0);
                      }}>
                      Close
                    </div>
                  </div>
                </div>
              </div>
              {/* //? Openable add note  */}
              {/* //? Openable add gift */}
              <div
                className={`tf-mini-cart-tool-openable add-gift ${
                  showIcon[1] ? "open" : ""
                }`}>
                <div
                  className="overplay tf-mini-cart-tool-close"
                  onClick={() => {
                    clickIcon(1);
                  }}></div>

                <form className="tf-product-form-addgift">
                  <div className="tf-mini-cart-tool-content">
                    <div className="tf-mini-cart-tool-text">
                      <div className="icon">
                        <img src={AddGift} alt="icon" />
                      </div>
                      <div className="tf-gift-wrap-infos">
                        <p>Do you want a gift wrap?</p>
                        Only
                        <span className="price fw-6">$5.00</span>
                      </div>
                    </div>
                    <div className="tf-cart-tool-btns">
                      <button
                        type="submit"
                        className="tf-btn fw-6 w-100 justify-content-center btn-fill animate-hover-btn radius-3">
                        <span>Add a gift wrap</span>
                      </button>
                      <div
                        className="tf-mini-cart-tool-primary text-center w-100 fw-6 tf-mini-cart-tool-close"
                        onClick={() => {
                          clickIcon(1);
                        }}>
                        Cancel
                      </div>
                    </div>
                  </div>
                </form>
              </div>
              {/* //? Openable add gift  */}
              {/* //? Openable add shipping */}
              <div
                className={`tf-mini-cart-tool-openable estimate-shipping ${
                  showIcon[2] ? "open" : ""
                }`}>
                <div
                  className="overplay tf-mini-cart-tool-close"
                  onClick={() => {
                    clickIcon(2);
                  }}></div>

                <div className="tf-mini-cart-tool-content">
                  <div className="tf-mini-cart-tool-text">
                    <div className="icon">
                      <img src={Shipping} alt="icon" />
                    </div>
                    <span className="fw-6">Estimate Shipping</span>
                  </div>
                  <div className="field">
                    <p>Country</p>
                    <select
                      className="tf-select w-100"
                      id="ShippingCountry_CartDrawer-Form"
                      name="address[country]"
                      data-default="">
                      <option defaultValue="---" data-provinces="[]">
                        ---
                      </option>
                      <option
                        defaultValue="Australia"
                        data-provinces="[['Australian Capital Territory','Australian Capital Territory'],['New South Wales','New South Wales'],['Northern Territory','Northern Territory'],['Queensland','Queensland'],['South Australia','South Australia'],['Tasmania','Tasmania'],['Victoria','Victoria'],['Western Australia','Western Australia']]">
                        Australia
                      </option>
                      <option defaultValue="Austria" data-provinces="[]">
                        Austria
                      </option>
                      <option defaultValue="Belgium" data-provinces="[]">
                        Belgium
                      </option>
                    </select>
                  </div>
                  <div className="field">
                    <p>Zip code</p>
                    <input type="text" name="text" placeholder="" />
                  </div>
                  <div className="tf-cart-tool-btns">
                    <Link
                      to="/"
                      className="tf-btn fw-6 justify-content-center btn-fill w-100 animate-hover-btn radius-3">
                      <span>Estimate</span>
                    </Link>
                    <div
                      className="tf-mini-cart-tool-primary text-center fw-6 w-100 tf-mini-cart-tool-close"
                      onClick={() => {
                        clickIcon(2);
                      }}>
                      Cancel
                    </div>
                  </div>
                </div>
              </div>
              {/* //? Openable add shipping */}
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
