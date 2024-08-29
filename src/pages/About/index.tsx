// Components
import Layout from "@/components/Layout";

// Sections
import Banner from "./sections/Banner";
import Title from "./sections/Title";
import OurHistory from "./sections/OurHistory";
import OurMission from "./sections/OurMission";
import IconBox from "./sections/IconBox";
import Testimonials from "./sections/Testimonials";
import ShopGramSlider from "./sections/ShopGallery";

const About = () => {
  return (
    <Layout>
      <div id="wrapper">
        <Banner />
        <Title />
        <div className="container">
          <div className="line"></div>
        </div>
        <OurHistory />
        <OurMission />
        <IconBox />
        <Testimonials />
        <div className="container">
          <div className="line"></div>
        </div>
        <ShopGramSlider />
      </div>
    </Layout>
  );
};

export default About;
