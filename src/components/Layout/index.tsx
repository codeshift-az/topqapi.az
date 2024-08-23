import Header from "./Header";
import Footer from "./Footer";
import BackToTop from "./BackToTop";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <BackToTop />
    </div>
  );
};

export default Layout;
