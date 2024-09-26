import { Link } from "react-router-dom";

// Components
import AcoountLayout from "@/components/AccountLayout";

const Orders = () => {
  const allOrders = [
    {
      id: 1,
      date: "2024-08-1",
      status: "On hold",
      total: "200",
    },
    {
      id: 2,
      date: "2024-08-2",
      status: "On hold",
      total: "300",
    },
    {
      id: 3,
      date: "2024-08-3",
      status: "On hold",
      total: "400",
    },
  ];

  const formatDate = (dateString) => {
    const date = new Date(dateString);
    return date.toLocaleDateString("default", {
      year: "numeric",
      month: "long",
      day: "numeric",
    });
  };

  return (
    <AcoountLayout title="Orders">
      <div className="my-account-content account-order">
        <div className="wrap-account-order">
          <table>
            <thead>
              <tr>
                <th className="fw-6">Order Number</th>
                <th className="fw-6">Date</th>
                <th className="fw-6">Status</th>
                <th className="fw-6">Total</th>
                <th className="fw-6">Actions</th>
              </tr>
            </thead>
            <tbody>
              {allOrders?.map((item) => {
                return (
                  <tr className="tf-order-item" key={item.id}>
                    <td># {item.id}</td>
                    <td>{formatDate(item.date)}</td>
                    <td>{item.status}</td>
                    <td>$ {item.total} for 1 items</td>
                    <td>
                      <Link
                        to={`/account/orders/${item.id}`}
                        className="tf-btn btn-fill animate-hover-btn rounded-0 justify-content-center">
                        <span>View</span>
                      </Link>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </AcoountLayout>
  );
};

export default Orders;
