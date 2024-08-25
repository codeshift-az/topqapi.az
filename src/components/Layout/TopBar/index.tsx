import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";

//swiper
import Swiper, { Navigation, Autoplay } from "swiper";
import "swiper/css";

const TopBar = () => {
  const [selectedValue, setSelectedValue] = useState("option1");

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

  return (
    <div className="tf-top-bar bg_white line">
      <div className="px_15 lg-px_40">
        <div className="tf-top-bar_wrap grid-3 gap-30 align-items-center">
          <div className="tf-top-bar_left">
            <div className="d-flex gap-30 text_black fw-5">
              <span>(+333) 123-1688</span>
              <span>sayhello@ecomus.com</span>
            </div>
          </div>
          <div className="text-center overflow-hidden">
            <div className="swiper tf-sw-top_bar">
              <div className="swiper-wrapper">
                <div className="swiper-slide">
                  <p className="top-bar-text fw-5 text_black">
                    Spring Fashion Sale
                    <Link
                      to="/"
                      title="all collection"
                      className="tf-btn btn-line">
                      Shop now<i className="icon icon-arrow1-top-left"></i>
                    </Link>
                  </p>
                </div>
                <div className="swiper-slide">
                  <p className="top-bar-text fw-5 text_black">
                    Summer sale discount off 70%
                  </p>
                </div>
                <div className="swiper-slide">
                  <p className="top-bar-text fw-5 text_black">
                    Time to refresh your wardrobe.
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div className="top-bar-language tf-cur justify-content-end">
            <div className="tf-currencies">
              <select
                className="image-select center style-default type-currencies color-white"
                value={selectedValue}
                onChange={(e) => {
                  setSelectedValue(e.target.value);
                }}>
                <option value="option1">EUR € | France</option>
                <option value="option1">EUR € | Germany</option>
                <option value="option1">USD $ | United States</option>
                <option value="option1">VND ₫ | Vietnam</option>
              </select>
            </div>
            <div className="tf-languages">
              <select
                className="image-select center style-default type-languages color-white"
                value={selectedValue}
                onChange={(e) => {
                  setSelectedValue(e.target.value);
                }}>
                <option value="option1">English</option>
                <option value="option1">العربية</option>
                <option value="option1">简体中文</option>
                <option value="option1">اردو</option>
              </select>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TopBar;
