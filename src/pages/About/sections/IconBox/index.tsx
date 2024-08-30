import { useEffect } from "react";

//Swiper
import Swiper, { Navigation, Pagination, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
const IconBox = () => {
  useEffect(() => {
    new Swiper(".swiperIconBox", {
      modules: [Pagination, Navigation, Autoplay],
      autoplay: {
        delay: 1000,
      },
      loop: true,
      speed: 1000,
      breakpoints: {
        320: {
          slidesPerView: 1,
          spaceBetween: 25,
        },
        768: {
          slidesPerView: 5,
        },
        992: {
          slidesPerView: 5,
        },
      },
    });
  }, []);

  return (
    <section>
      <div className="container" style={{ overflowX: "hidden" }}>
        <div className="bg_grey-2 radius-10 flat-wrap-iconbox">
          <div className="flat-title lg">
            <span className="title fw-5">Quality is our priority</span>
            <div>
              <p className="sub-title text_black-2">
                Our talented stylists have put together outfits that are perfect
                for the season.
              </p>
              <p className="sub-title text_black-2">
                They've variety of ways to inspire your next fashion-forward
                look.
              </p>
            </div>
          </div>
          <div className="flat-iconbox-v3 lg">
            <div className="wrap-carousel wrap-mobile">
              <div
                className="swiperIconBox tf-sw-mobile"
                data-preview="1"
                data-space="15">
                <div className="swiper-wrapper wrap-iconbox lg">
                  <div className="swiper-slide slideIconbox">
                    <div className="tf-icon-box text-center">
                      <div className="icon">
                        <i className="icon-materials"></i>
                      </div>
                      <div className="content">
                        <div className="title">High-Quality Materials</div>
                        <p className="text_black-2">
                          Crafted with precision and excellence, our activewear
                          is meticulously engineered using premium materials to
                          ensure unmatched comfort and durability.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide slideIconbox">
                    <div className="tf-icon-box text-center">
                      <div className="icon">
                        <i className="icon-design"></i>
                      </div>
                      <div className="content">
                        <div className="title">Laconic Design</div>
                        <p className="text_black-2">
                          Simplicity refined. Our activewear embodies the
                          essence of minimalistic design, delivering effortless
                          style that speaks volumes.
                        </p>
                      </div>
                    </div>
                  </div>
                  <div className="swiper-slide slideIconbox">
                    <div className="tf-icon-box text-center">
                      <div className="icon">
                        <i className="icon-sizes"></i>
                      </div>
                      <div className="content">
                        <div className="title">Various Sizes</div>
                        <p className="text_black-2">
                          Designed for every body and anyone, our activewear
                          embraces diversity with a wide range of sizes and
                          shapes, celebrating the beauty of individuality.
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="sw-dots style-2 sw-pagination-mb justify-content-center"></div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
export default IconBox;
