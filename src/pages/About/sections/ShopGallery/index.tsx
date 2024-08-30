import { useEffect } from "react";

// Swiper
import Swiper, { Navigation, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

// Assets
import { AboutGallery1 } from "@/assets/images";

const ShopGallery = () => {
  const galleryItems = [
    {
      img: AboutGallery1,
    },
    {
      img: AboutGallery1,
    },
    {
      img: AboutGallery1,
    },
    {
      img: AboutGallery1,
    },
    {
      img: AboutGallery1,
    },
  ];

  useEffect(() => {
    new Swiper(".swiperShopGram", {
      modules: [Navigation, Pagination],
      pagination: {
        el: ".sw-pagination-gallery",
        clickable: true,
      },
      breakpoints: {
        320: {
          slidesPerView: 2,
        },

        768: {
          slidesPerView: 3,
          spaceBetween: 7,
        },
        992: {
          slidesPerView: 5,
          spaceBetween: 7,
        },
      },
    });
  }, []);

  return (
    <section className="flat-spacing-1">
      <div className="container">
        <div className="flat-title">
          <span className="title">Shop Gram</span>
          <p className="sub-title">
            Inspire and let yourself be inspired, from one unique fashion to
            another.
          </p>
        </div>

        <div className="wrap-shop-gram">
          <div
            className="swiperShopGram tf-sw-shop-gallery"
            style={{ overflowX: "hidden" }}>
            <div className="swiper-wrapper">
              {galleryItems.map((item, index) => {
                return (
                  <div className="swiper-slide" key={index}>
                    <div className="gallery-item hover-img">
                      <div className="img-style">
                        <img
                          className="lazyload img-hover"
                          src={item.img}
                          alt="image-gallery"
                        />
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
          <div className="sw-dots sw-pagination-gallery justify-content-center"></div>
        </div>
      </div>
    </section>
  );
};

export default ShopGallery;
