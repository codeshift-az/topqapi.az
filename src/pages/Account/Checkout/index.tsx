// Components
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";
import BillingDetails from "./sections/BillingDetails";
import OrderCart from "./sections/OrderCart";

const Checkout = () => {
  return (
    <Layout>
   
        <PageTitle title="Check Out" />
        <section className="flat-spacing-11">
          <div className="container">
            <div className="tf-page-cart-wrap layout-2">
              <BillingDetails />
              <OrderCart/>
            </div>
          </div>
        </section>
    </Layout>
  );
};

export default Checkout;
