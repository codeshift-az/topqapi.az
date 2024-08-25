import { useState } from "react";
import { Link } from "react-router-dom";

//Assets
import shopImg from "@/assets/images/shop/cate1.jpg";

interface Props {
  show?: boolean;
  closeShop: () => void;
}
function CategoryMenu({ show, closeShop }: Props) {
  const [subMenu, setSubMenu] = useState<boolean[]>([false]);

  const toolBarShop = [
    {
      title: "Accessories",
      img: shopImg,
      subMenu: [{ tit: "man" }, { tit: "woman" }],
    },
    {
      title: "Dog",
      img: shopImg,
      subMenu: [],
    },
  ];

  const toggleClickSubMenu = (index: number) => {
    setSubMenu((prev) => prev.map((item, i) => (index == i ? !item : item)));
  };

  if (!show) return;

  return (
    <>
      <div
        className="offcanvas offcanvas-start canvas-mb toolbar-shop-mobile show"
        id="toolbarShopmb">
        <span
          className="icon-close icon-close-popup"
          onClick={closeShop}
          style={{ cursor: "pointer" }}></span>
        <div className="mb-canvas-content">
          <div className="mb-body">
            <ul className="nav-ul-mb">
              <>
                {toolBarShop?.map((item) => {
                  return (
                    <li className="nav-mb-item">
                      <div
                        className={`tf-category-link mb-menu-link ${
                          subMenu[0] ? "" : "collapsed"
                        }`}>
                        <div className="image">
                          <img src={item.img} alt="" />
                        </div>
                        <span>{item.title}</span>
                        {item.subMenu.length > 0 ? (
                          <span
                            className="btn-open-sub"
                            onClick={() => toggleClickSubMenu(0)}></span>
                        ) : (
                          <div></div>
                        )}
                      </div>
                      {item.subMenu.length > 0 ? (
                        <div
                          className={`collapse list-cate ${
                            subMenu[0] ? "show" : ""
                          }`}>
                          <ul
                            className="sub-nav-menu"
                            id="cate-menu-navigation1">
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
                      ) : (
                        ""
                      )}
                    </li>
                  );
                })}
              </>
            </ul>
          </div>
          <div className="mb-bottom">
            <Link to="/" className="tf-btn fw-5 btn-line">
              View all collection<i className="icon icon-arrow1-top-left"></i>
            </Link>
          </div>
        </div>
      </div>
      {show && (
        <div className="modal-backdrop fade show" onClick={closeShop}></div>
      )}
    </>
  );
}

export default CategoryMenu;
