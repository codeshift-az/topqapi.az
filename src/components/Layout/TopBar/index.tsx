import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

// Constants
import { contactDetails } from "@/constants";

// Swiper
import Swiper, { Navigation, Autoplay } from "swiper";
import "swiper/css";

const TopBar = () => {
  const [selectedLang, setSelectedLang] = useState("en");

  useEffect(() => {
    new Swiper(".swiper", {
      modules: [Navigation, Autoplay],
      autoplay: {
        delay: 1000,
      },
      preview: true,
      space: 0,
      loop: true,
      speed: 1000,
    });
  }, []);

  const slides = [
    {
      id: 1,
      text: "Spring Fashion Sale ",
      link: "/",
      linkText: "Shop now",
    },
    {
      id: 2,
      text: "Summer sale discount off 70%",
    },
    {
      id: 3,
      text: "Time to refresh your wardrobe.",
    },
  ];

  return (
    <div className="tf-top-bar bg_white line">
      <div className="px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <div className="tf-top-bar_left">
            <div className="d-flex gap-30 text_black fw-5">
              <span>{contactDetails.phone}</span>
              <span>{contactDetails.email}</span>
            </div>
          </div>

          <div className="text-center overflow-hidden">
            <div className="swiper tf-sw-top_bar">
              <div className="swiper-wrapper">
                {slides.map((item, index) => (
                  <div key={index} className="swiper-slide">
                    <p className="top-bar-text fw-5 text_black">
                      {item.text}
                      {item.link && (
                        <Link
                          to={item.link}
                          title={item.text}
                          className="tf-btn btn-line">
                          {item.linkText}
                          <i className="icon icon-arrow1-top-left"></i>
                        </Link>
                      )}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="top-bar-language tf-cur justify-content-end">
            <div className="tf-languages">
              <select
                className="image-select center style-default type-languages color-white"
                value={selectedLang}
                onChange={(e) => {
                  setSelectedLang(e.target.value);
                }}>
                <option value="en">English</option>
                <option value="ru">Русский</option>
                <option value="az">Azərbaycanca</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
