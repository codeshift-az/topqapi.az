import Header from "./Header";
import BackToTop from "./BackToTop";
import Footer from "./Footer";

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
