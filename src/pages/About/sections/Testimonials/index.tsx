import { useEffect } from "react";

// Swiper
import Swiper, { Navigation } from "swiper";
import "swiper/css";
import "swiper/css/navigation";

// Assets
import { AboutProduct, IconQuote } from "@/assets/images";

const Testimonials = () => {
  const reviews = [
    {
      title: "Our customer’s reviews",
      text: "I have been shopping with this web fashion site for over a year now and I can confidently say it is the best online fashion site out there.The shipping is  always fast and the customer service team is friendly  and helpful. I highly recommend this site to anyone looking for affordable clothing.",
      productImg: AboutProduct,
      authorName: "Robert Smith",
      stars: 5,
    },
    {
      title: "Our customer’s reviews",
      text: "I have been shopping with this web fashion site for over a year now and I can confidently say it is the best online fashion site out there.The shipping is  always fast and the customer service team is friendly  and helpful. I highly recommend this site to anyone looking for affordable clothing.",
      productImg: AboutProduct,
      authorName: "Jenifer Unix",
      stars: 4,
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
    <section className="flat-testimonial-v2 flat-spacing-24">
      <div className="container">
        <div className="wrapper-thumbs-testimonial-v2 flat-thumbs-testimonial">
          <div className="box-left" style={{ overflowX: "hidden" }}>
            <div className="swiper2 tf-sw-tes-2">
              <div className="swiper-wrapper">
                {reviews.map((item, index) => (
                  <div className="swiper-slide" key={index}>
                    <div className="testimonial-item lg lg-2">
                      <h4 className="mb_40">{item.title}</h4>
                      <div className="icon">
                        <img
                          className="lazyload"
                          src={IconQuote}
                          alt="quote-icon"
                        />
                      </div>

                      <div className="rating">
                        {Array.from({ length: item.stars }).map(() => (
                          <i className="icon-start"></i>
                        ))}
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
                {reviews.map((item, index) => (
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
  );
};

export default Testimonials;
