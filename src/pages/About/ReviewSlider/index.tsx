import { useEffect } from "react";

// Swiper

import Swiper, { Navigation } from "swiper";

// Swiper Css

import "swiper/css";
import "swiper/css/navigation";

// Images Assets

import quateIcon from "@/assets/images/icons/quote.svg";
import productImage from "@/assets/images/aboutUs/tets3.jpg";

export interface SliderData {
  title?: string;
  quateIcon?: string;
  text?: string;
  productImg: string;
  authorName?: string;
}

const ReviewSlider = () => {
  const reviewSlider: SliderData[] = [
    {
      title: "Our customer’s reviews",
      quateIcon: quateIcon,
      text: "I have been shopping with this web fashion site for over a year now and I can confidently say it is the best online fashion site out there.The shipping is  always fast and the customer service team is friendly  and helpful. I highly recommend this site to anyone looking for affordable clothing.",
      productImg: productImage,
      authorName: "Robert Smith",
    },
    {
      title: "Our customer’s reviews",
      quateIcon: quateIcon,
      text: "I have been shopping with this web fashion site for over a year now and I can confidently say it is the best online fashion site out there.The shipping is  always fast and the customer service team is friendly  and helpful. I highly recommend this site to anyone looking for affordable clothing.",
      productImg: productImage,
      authorName: "Jenifer Unix",
    },
  ];

  useEffect(() => {
    new Swiper(".swiper2", {
      modules: [Navigation],
      navigation: {
        nextEl: ".nav-prev-slider",
        prevEl: ".nav-next-slider",
      },

      spaceBetween: 70,

      breakpoints: {
        320: {
          preview: 1,
          space: 40,
        },

        768: {
          preview: 1,
          space: 30,
        },
        992: {
          preview: 1,
          space: 40,
        },
      },
    });
  }, []);

  return (
    <>
      <section className="flat-testimonial-v2 flat-spacing-24">
        <div className="container">
          <div className="wrapper-thumbs-testimonial-v2 flat-thumbs-testimonial">
            <div className="box-left" style={{ overflowX: "hidden" }}>
              <div className="swiper2 tf-sw-tes-2">
                <div className="swiper-wrapper">
                  {reviewSlider.map((item, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="testimonial-item lg lg-2">
                        <h4 className="mb_40">{item.title}</h4>
                        <div className="icon">
                          <img
                            className="lazyload"
                            src={item.quateIcon}
                            alt="quote-icon"
                          />
                        </div>
                        <div className="rating">
                          <i className="icon-start"></i>
                          <i className="icon-start"></i>
                          <i className="icon-start"></i>
                          <i className="icon-start"></i>
                          <i className="icon-start"></i>
                        </div>
                        <p className="text">{item.text}</p>
                        <div className="author box-author">
                          <div className="box-img d-md-none rounded-0">
                            <img
                              className="lazyload img-product"
                              src={item.productImg}
                              alt="image-product"
                            />
                          </div>
                          <div className="content">
                            <div className="name">{item.authorName}</div>
                          </div>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
              <div className="d-md-flex d-none box-sw-navigation">
                <div className="nav-sw nav-next-slider nav-next-tes-2">
                  <span className="icon icon-arrow-left"></span>
                </div>
                <div className="nav-sw nav-prev-slider nav-prev-tes-2">
                  <span className="icon icon-arrow-right"></span>
                </div>
              </div>
              <div className="d-md-none sw-dots style-2 sw-pagination-tes-2"></div>
            </div>

            <div className="box-right" style={{ overflowX: "hidden" }}>
              <div className="swiper2 tf-thumb-tes">
                <div className="swiper-wrapper">
                  {reviewSlider.map((item, index) => (
                    <div className="swiper-slide" key={index}>
                      <div className="img-sw-thumb">
                        <img
                          className="lazyload img-product"
                          src={item.productImg}
                          alt="image-product"
                        />
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container">
        <div className="line"></div>
      </div>
    </>
  );
};

export default ReviewSlider;
