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
