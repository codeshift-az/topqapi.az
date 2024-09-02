import { useState } from "react";
import { Link } from "react-router-dom";

//Assets
import { CategoryImage1 } from "@/assets/images";

interface Props {
  show?: boolean;
  closeShop: () => void;
}
function CategoryMenu({ show, closeShop }: Props) {
  const [subMenu, setSubMenu] = useState<boolean[]>([false]);

  const categories = [
    {
      title: "Accessories",
      img: CategoryImage1,
      subMenu: [
        {
          title: "Men",
          img: CategoryImage1,
        },
        {
          title: "Women",
          img: CategoryImage1,
        },
      ],
    },
    {
      title: "Dog",
      img: CategoryImage1,
      subMenu: [],
    },
  ];

  const toggleSubMenu = (index: number) => {
    setSubMenu((prev) => prev.map((item, i) => (index == i ? !item : item)));
  };

  if (!show) return;

  return (
    <>
      <div className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile show">
        <span
          className="icon-close icon-close-popup"
          onClick={closeShop}
          style={{ cursor: "pointer" }}></span>
        <div className="mb-canvas-content">
          <div className="mb-body">
            <ul className="nav-ul-mb">
              {categories.map((item, index) => (
                <li key={index} className="nav-mb-item">
                  <div
                    className={`tf-category-link mb-menu-link ${
                      !subMenu[0] ? "collapsed" : ""
                    }`}>
                    <div className="image">
                      <img src={item.img} alt="" />
                    </div>

                    <span>{item.title}</span>

                    {item.subMenu.length > 0 && (
                      <span
                        className="btn-open-sub"
                        onClick={() => toggleSubMenu(0)}></span>
                    )}
                  </div>

                  {item.subMenu.length > 0 && (
                    <div
                      className={`collapse list-cate ${
                        subMenu[0] ? "show" : ""
                      }`}>
                      <ul className="sub-nav-menu" id="cate-menu-navigation1">
                        <li>
                          <Link
                            to="/"
                            className="tf-category-link sub-nav-link">
                            <div className="image">
                              <img src={item.img} alt="" />
                            </div>
                            <span>Men</span>
                          </Link>
                        </li>
                        <li>
                          <Link
                            to="/"
                            className="tf-category-link sub-nav-link">
                            <div className="image">
                              <img src={item.img} alt="" />
                            </div>
                            <span>Women</span>
                          </Link>
                        </li>
                      </ul>
                    </div>
                  )}
                </li>
              ))}
            </ul>
          </div>
          <div className="mb-bottom">
            <Link to="/" className="tf-btn fw-5 btn-line">
              View all collection<i className="icon icon-arrow1-top-left"></i>
            </Link>
          </div>
        </div>
      </div>

      <div className="modal-backdrop fade show" onClick={closeShop}></div>
    </>
  );
}

export default CategoryMenu;
