import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import { ProductCard4 } from "@/assets/images";

// Components
import AcoountLayout from "@/components/AccountLayout";

const OrderDetails = () => {
  const [widgetMenu, setWidgetMenu] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const clickWidget = (index: number) => {
    setWidgetMenu(widgetMenu.map((item, i) => i === index)); // Set only the clicked tab to true
  };
  
  return (
    <AcoountLayout title="My Orders">
      <div className="wd-form-order">
        <div className="order-head">
          <figure className="img-product">
            <img src={ProductCard4} alt="product" />
          </figure>
          <div className="content">
            <div className="badge">In Progress</div>
            <h6 className="mt-8 fw-5">Order #17493</h6>
          </div>
        </div>
        <div className="tf-grid-layout md-col-2 gap-15">
          <div className="item">
            <div className="text-2 text_black-2">Item</div>
            <div className="text-2 mt_4 fw-6">Fashion</div>
          </div>

          <div className="item">
            <div className="text-2 text_black-2">Courier</div>
            <div className="text-2 mt_4 fw-6">Ribbed modal T-shirt</div>
          </div>

          <div className="item">
            <div className="text-2 text_black-2">Start Time</div>
            <div className="text-2 mt_4 fw-6">04 September 2024, 13:30:23</div>
          </div>

          <div className="item">
            <div className="text-2 text_black-2">Address</div>
            <div className="text-2 mt_4 fw-6">
              1234 Fashion Street, Suite 567, New York
            </div>
          </div>
        </div>
        <div className="widget-tabs style-has-border widget-order-tab">
          <ul className="widget-menu-tab">
            <li
              className={`item-title ${widgetMenu[0] ? "active" : ""}`}
              onClick={() => clickWidget(0)}>
              <span className="inner">Order History</span>
            </li>

            <li
              className={`item-title ${widgetMenu[1] ? "active" : ""}`}
              onClick={() => clickWidget(1)}>
              <span className="inner">Item Details</span>
            </li>

            <li
              className={`item-title ${widgetMenu[2] ? "active" : ""}`}
              onClick={() => clickWidget(2)}>
              <span className="inner">Courier</span>
            </li>

            <li
              className={`item-title ${widgetMenu[3] ? "active" : ""}`}
              onClick={() => clickWidget(3)}>
              <span className="inner">Receiver</span>
            </li>
          </ul>
          <div className="widget-content-tab">
            <div
              className={
                widgetMenu[0]
                  ? `widget-content-inner active`
                  : `widget-content-inner`
              }>
              <div className="widget-timeline">
                <ul className="timeline">
                  <li>
                    <div className="timeline-badge success"></div>
                    <div className="timeline-box">
                      <Link className="timeline-panel" to="/">
                        <div className="text-2 fw-6">Product Shipped</div>
                        <span>10/07/2024 4:30pm</span>
                      </Link>
                      <p>
                        <strong>Courier Service : </strong>FedEx World Service
                        Center
                      </p>
                      <p>
                        <strong>Estimated Delivery Date : </strong>12/07/2024
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge success"></div>
                    <div className="timeline-box">
                      <Link className="timeline-panel" to="/">
                        <div className="text-2 fw-6">Product Shipped</div>
                        <span>10/07/2024 4:30pm</span>
                      </Link>
                      <p>
                        <strong>Tracking Number : </strong>2307-3215-6759
                      </p>
                      <p>
                        <strong>Warehouse : </strong>T-Shirt 10b
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge"></div>
                    <div className="timeline-box">
                      <Link className="timeline-panel" to="/">
                        <div className="text-2 fw-6">Product Packaging</div>
                        <span>12/07/2024 4:34pm</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge"></div>
                    <div className="timeline-box">
                      <Link className="timeline-panel" to="/">
                        <div className="text-2 fw-6">Order Placed</div>
                        <span>11/07/2024 2:36pm</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={
                widgetMenu[1]
                  ? `widget-content-inner active`
                  : `widget-content-inner`
              }>
              <div className="order-head">
                <figure className="img-product">
                  <img src={ProductCard4} alt="product" />
                </figure>
                <div className="content">
                  <div className="text-2 fw-6">Ribbed modal T-shirt</div>
                  <div className="mt_4">
                    <span className="fw-6">Price :</span> $28.95
                  </div>
                  <div className="mt_4">
                    <span className="fw-6">Size :</span> XL
                  </div>
                </div>
              </div>
              <ul>
                <li className="d-flex justify-content-between text-2">
                  <span>Total Price</span>
                  <span className="fw-6">$28.95</span>
                </li>
                <li className="d-flex justify-content-between text-2 mt_4 pb_8 line">
                  <span>Total Discounts</span>
                  <span className="fw-6">$10</span>
                </li>
                <li className="d-flex justify-content-between text-2 mt_8">
                  <span>Order Total</span>
                  <span className="fw-6">$18.95</span>
                </li>
              </ul>
            </div>

            <div
              className={
                widgetMenu[2]
                  ? `widget-content-inner active`
                  : `widget-content-inner`
              }>
              <p>
                Our courier service is dedicated to providing fast, reliable,
                and secure delivery solutions tailored to meet your needs.
                Whether you're sending documents, parcels, or larger shipments,
                our team ensures that your items are handled with the utmost
                care and delivered on time. With a commitment to customer
                satisfaction, real-time tracking, and a wide network of routes,
                we make it easy for you to send and receive packages both
                locally and internationally. Choose our service for a seamless
                and efficient delivery experience.
              </p>
            </div>

            <div
              className={
                widgetMenu[3]
                  ? `widget-content-inner active`
                  : `widget-content-inner`
              }>
              <p className="text-2 text_success">
                Thank you Your order has been received
              </p>
              <ul className="mt_20">
                <li>
                  Order Number : <span className="fw-7">#17493</span>
                </li>
                <li>
                  Date : <span className="fw-7"> 17/07/2024, 02:34pm</span>
                </li>
                <li>
                  Total : <span className="fw-7">$18.95</span>
                </li>
                <li>
                  Payment Methods :{" "}
                  <span className="fw-7">Cash on Delivery</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </AcoountLayout>
  );
};

export default OrderDetails;
