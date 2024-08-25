import { useState } from "react";
import { Link } from "react-router-dom";

// Related Components
import CategoryMenu from "./CategoryMenu";

const ToolBar = () => {
  const [showCategoryMenu, setShowCategoryMenu] = useState(false);

  return (
    <>
      <div className="tf-toolbar-bottom type-1150">
        <div className="toolbar-item active">
          <a
            role="button"
            onClick={() => setShowCategoryMenu(!showCategoryMenu)}>
            <div className="toolbar-icon">
              <i className="icon-shop"></i>
            </div>
            <div className="toolbar-label">Shop</div>
          </a>
        </div>

        <div className="toolbar-item">
          <Link to="/search">
            <div className="toolbar-icon">
              <i className="icon-search"></i>
            </div>
            <div className="toolbar-label">Search</div>
          </Link>
        </div>

        <div className="toolbar-item">
          <Link to="/account">
            <div className="toolbar-icon">
              <i className="icon-account"></i>
            </div>
            <div className="toolbar-label">Account</div>
          </Link>
        </div>

        <div className="toolbar-item">
          <Link to="/account/favorites">
            <div className="toolbar-icon">
              <i className="icon-heart"></i>
              <div className="toolbar-count">0</div>
            </div>
            <div className="toolbar-label">Favorites</div>
          </Link>
        </div>

        <div className="toolbar-item">
          <Link to="/account/cart">
            <div className="toolbar-icon">
              <i className="icon-bag"></i>
              <div className="toolbar-count">1</div>
            </div>
            <div className="toolbar-label">Cart</div>
          </Link>
        </div>
      </div>

      <CategoryMenu
        show={showCategoryMenu}
        closeShop={() => setShowCategoryMenu(false)}
      />
    </>
  );
};
export default ToolBar;
