// Assets
import { AboutMission1, AboutMission2 } from "@/assets/images";

const OurMission = () => {
  return (
    <section className="flat-spacing-15">
      <div className="container">
        <div className="tf-grid-layout md-col-2 tf-img-with-text style-4">
          <div className="tf-content-wrap px-0 d-flex justify-content-center w-100">
            <div>
              <div className="heading">Our mission</div>
              <div className="text">
                Our mission is to empower people through sustainable fashion.{" "}
                <br className="d-xl-block d-none" />
                We want everyone to look and feel good, while also doing our
                part to <br className="d-xl-block d-none" />
                help the environment.We believe that fashion should be stylish,{" "}
                <br className="d-xl-block d-none" />
                affordable and accessible to everyone. Body positivity and
                inclusivity <br className="d-xl-block d-none" />
                are values that are at the heart of our brand.
              </div>
            </div>
          </div>
          
          <div className="grid-img-group">
            <div className="tf-image-wrap box-img item-1">
              <div className="img-style">
                <img
                  className="lazyload"
                  src={AboutMission1}
                  alt="img-slider"
                />
              </div>
            </div>

            <div className="tf-image-wrap box-img item-2">
              <div className="img-style">
                <img
                  className="lazyload"
                  src={AboutMission2}
                  alt="img-slider"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default OurMission;
