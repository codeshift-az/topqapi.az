// Components
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

// Sections
import Map from "./sections/Map";
import FormContact from "./sections/Form";

const Contact = () => {
  return (
    <Layout>
      <div id="wrapper">
        <PageTitle title="Contact Us" />
        <Map />
        <FormContact />
      </div>
    </Layout>
  );
};

export default Contact;
