// Assets
import { AboutBanner } from "@/assets/images";

const Banner = () => {
  return (
    <section className="tf-slideshow about-us-page position-relative">
      <div className="banner-wrapper">
        <img className="lazyload" src={AboutBanner} alt="image-collection" />
        <div className="box-content text-center">
          <div className="container">
            <div className="text text-white">
              Empowering women to achieve <br className="d-xl-block d-none" />{" "}
              fitness goals with style
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
