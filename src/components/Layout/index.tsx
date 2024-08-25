import Header from "./Header";
import BackToTop from "./BackToTop";
import Footer from "./Footer";
import ToolBar from "./ToolBar";
import TopBar from "./TopBar";

interface Props {
  children: React.ReactNode;
}

const Layout = ({ children }: Props) => {
  return (
    <div>
      <TopBar />
      <Header />
      <main>{children}</main>
      <Footer />
      <ToolBar />
      <BackToTop />
    </div>
  );
};

export default Layout;
