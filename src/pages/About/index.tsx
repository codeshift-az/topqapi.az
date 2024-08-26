// Components

import Layout from "@/components/Layout";

// Components About

import AboutBanner from "./AboutBanner";
import AboutTitle from "./AboutTitle";
import AboutCard1 from "./AboutCard1";
import AboutCard2 from "./AboutCard2";
import AboutSection from "./AboutSection";
import ReviewSlider from "./ReviewSlider";
import ShopGramSlider from "./ShopGramSlider";

const About = () => {
  return (
    <Layout>
      <div id="wrapper">
        <AboutBanner />
        <AboutTitle />
        <AboutCard1 />
        <AboutCard2 />
        <AboutSection />
        <ReviewSlider />
        <ShopGramSlider />
      </div>
    </Layout>
  );
};

export default About;
