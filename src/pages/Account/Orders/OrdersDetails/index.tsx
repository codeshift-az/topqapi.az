import { useState } from "react";
import { Link } from "react-router-dom";

// Assets
import { ProductCard4 } from "@/assets/images";

// Components
import AcoountLayout from "@/components/AccountLayout";

// Constants
import { contactDetails } from "@/constants";

const OrderDetails = () => {
  const [widgetMenu, setWidgetMenu] = useState<boolean[]>([
    true,
    false,
    false,
    false,
  ]);

  const order = {
    items: [
      {
        product: {
          id: 1,
          name: "product1",
          brand: { name: "Brand1" },
          category: { name: "Category1" },
          images: [
            {
              id: 1,
              image: ProductCard4,
            },
          ],
          price: "20.50",
          discount: 10,
          discount_end_date: "2024-10-01",
          quantity: 1,
          description: "description",
          updated_at: "2024-09-21",
          created_at: "2024-09-01",
        },

        quantity: 1,
        price: "29.50",
        discount: 10,
      },
    ],
    order_history: [
      {
        id: 1,
        order_placed: "11/07/2024 2:36pm",
        product_packaging: "12/07/2024 4:34pm",
        product_shipped: "10/07/2024 4:30pm",
        estiminated_delivery: "12/07/2024",
        receiver_delivery: "17/07/2024, 02:34pm",
      },
    ],
    discount: 5,
    payment_method: "Cash",
    address: contactDetails.address,
    note: "Thank you Your order has been received",
    status: 1,
    updated_at: "2024-09-04T13:30:23",
    created_at: "2024-09-21",
  };

  const formatDate = (dateString: string) => {
    const date = new Date(dateString);
    return date
      .toLocaleDateString("default", {
        year: "numeric",
        month: "long",
        day: "2-digit",
        hour: "2-digit",
        minute: "2-digit",
        second: "2-digit",
        hour12: false,
      })
      .replace(" at ", ", ");
  };

  const clickWidget = (index: number) => {
    setWidgetMenu(widgetMenu.map((_, i) => i === index));
  };

  const calculateDiscountedPrice = (price: string, discount: number) => {
    const priceValue = +price;
    return (priceValue - (discount / 100) * priceValue).toFixed(2);
  };

  const totalPrice = order.items.reduce((sum, item) => {
    if (item.discount > 0) {
      const discountedPrice: any = calculateDiscountedPrice(
        item.price,
        item.discount
      );
      return sum + discountedPrice * item.quantity;
    } else {
      return sum + +item.price * item.quantity;
    }
  }, 0);

  return (
    <AcoountLayout title="My Orders">
      <div className="wd-form-order">
        <div className="order-head">
          <figure className="img-product">
            <img src={order.items[0].product.images[0].image} alt="product" />
          </figure>
          <div className="content">
            <div className="badge">In Progress</div>
            <h6 className="mt-8 fw-5">Order #{order.items[0].product.id}</h6>
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
            <div className="text-2 mt_4 fw-6">
              {formatDate(order.updated_at)}
            </div>
          </div>

          <div className="item">
            <div className="text-2 text_black-2">Address</div>
            <div className="text-2 mt_4 fw-6">{order.address} </div>
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
              className={`widget-content-inner ${
                widgetMenu[0] ? "active" : ""
              }`}>
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
                        <strong>Estimated Delivery Date : </strong>
                        {order.order_history[0].estiminated_delivery}
                      </p>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge success"></div>
                    <div className="timeline-box">
                      <Link className="timeline-panel" to="/">
                        <div className="text-2 fw-6">Product Shipped</div>
                        <span>{order.order_history[0].product_shipped}</span>
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
                        <span>{order.order_history[0].product_packaging}</span>
                      </Link>
                    </div>
                  </li>
                  <li>
                    <div className="timeline-badge"></div>
                    <div className="timeline-box">
                      <Link className="timeline-panel" to="/">
                        <div className="text-2 fw-6">Order Placed</div>
                        <span>{order.order_history[0].order_placed}</span>
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>

            <div
              className={`widget-content-inner ${
                widgetMenu[1] ? "active" : ""
              }`}>
              {order.items?.map((element) => {
                return (
                  <div className="order-head" key={element.product.id}>
                    <figure className="img-product">
                      {element.product?.images?.map((item) => {
                        return (
                          <img src={item.image} alt="product" key={item.id} />
                        );
                      })}
                    </figure>
                    <div className="content">
                      <div className="text-2 fw-6">{element.product.name}</div>
                      <div className="mt_4">
                        <span className="fw-6">Price :</span>
                        <span
                          className={
                            element.discount > 0 ? "overlinePrice" : ""
                          }>
                          ${(+element.price).toFixed(2)}
                        </span>
                        {element.discount > 0 ? (
                          <span>
                            $
                            {(
                              +element.price -
                              (element.discount / 100) * +element.price
                            ).toFixed(2)}
                          </span>
                        ) : (
                          <span></span>
                        )}
                      </div>
                    </div>
                  </div>
                );
              })}
              <ul>
                <li className="d-flex justify-content-between text-2">
                  <span>Total Price</span>
                  <span className="fw-6">${totalPrice.toFixed(2)}</span>
                </li>
                <li className="d-flex justify-content-between text-2 mt_4 pb_8 line">
                  <span>Total Discounts</span>
                  <span className="fw-6">${order.discount}</span>
                </li>
                <li className="d-flex justify-content-between text-2 mt_8">
                  <span>Order Total</span>
                  <span className="fw-6">
                    $
                    {(totalPrice - (order.discount / 100) * totalPrice).toFixed(
                      2
                    )}
                  </span>
                </li>
              </ul>
            </div>

            <div
              className={`widget-content-inner ${
                widgetMenu[2] ? "active" : ""
              }`}>
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
              className={`widget-content-inner ${
                widgetMenu[3] ? "active" : ""
              }`}>
              <p className="text-2 text_success">{order.note} </p>
              <ul className="mt_20">
                <li>
                  Order Number :
                  <span className="fw-7">#{order.items[0].product.id}</span>
                </li>
                <li>
                  Date :
                  <span className="fw-7">
                    {order.order_history[0].receiver_delivery}
                  </span>
                </li>
                <li>
                  Total :
                  <span className="fw-7">
                    $
                    {(totalPrice - (order.discount / 100) * totalPrice).toFixed(
                      2
                    )}
                  </span>
                </li>
                <li>
                  Payment Methods :
                  <span className="fw-7">
                    {order.payment_method} on Delivery
                  </span>
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
