import Header from "./Header";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import ToolBar from "./ToolBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <Header />
      <main>{children}</main>
      <Footer />
      <ToolBar/>
       <BackToTop />
    </div>
  );
};

export default Layout;
