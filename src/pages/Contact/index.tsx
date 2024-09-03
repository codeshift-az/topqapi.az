// Components
import Layout from "@/components/Layout";
import PageTitle from "@/components/PageTitle";

// Sections
import ContactDetails from "./sections/Details";
import ContactForm from "./sections/Form";

const Contact = () => {
  return (
    <Layout>
      <PageTitle title="Contact Us" />

      <ContactDetails />
      <ContactForm />
    </Layout>
  );
};

export default Contact;
