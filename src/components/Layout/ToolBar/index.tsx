import { useState } from "react";
import { Link } from "react-router-dom";
import ToolbarShop from "./ToolbarShop";

const ToolBar = () => {
  const [showToolbarShop, setShowToolbarShop] = useState(false);

  return (
    <>
      <div className="tf-toolbar-bottom type-1150">
        <div className="toolbar-item active">
          <a href="#toolbarShopmb">
            <div className="toolbar-icon">
              <i
                className="icon-shop"
                onClick={() => setShowToolbarShop(!showToolbarShop)}></i>
            </div>
            <div className="toolbar-label">Shop</div>
          </a>
        </div>

        <div className="toolbar-item">
          <a href="#canvasSearch">
            <div className="toolbar-icon">
              <i className="icon-search"></i>
            </div>
            <div className="toolbar-label">Search</div>
          </a>
        </div>

        <div className="toolbar-item">
          <Link to="/login">
            <div className="toolbar-icon">
              <i className="icon-account"></i>
            </div>
            <div className="toolbar-label">Account</div>
          </Link>
        </div>

        <div className="toolbar-item">
          <Link to="/wishlist">
            <div className="toolbar-icon">
              <i className="icon-heart"></i>
              <div className="toolbar-count">0</div>
            </div>
            <div className="toolbar-label">Wishlist</div>
          </Link>
        </div>

        <div className="toolbar-item">
          <Link to="/shopping-cart">
            <div className="toolbar-icon">
              <i className="icon-bag"></i>
              <div className="toolbar-count">1</div>
            </div>
            <div className="toolbar-label">Cart</div>
          </Link>
        </div>
      </div>
      <ToolbarShop
        show={showToolbarShop}
        closeShop={() => setShowToolbarShop(false)}
      />
    </>
  );
};
export default ToolBar;
