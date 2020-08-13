import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

import Logo from "../../imgs/phone-king.jpg";

const Navbar = ({ cart }) => {
  return (
    <nav>
      <div className="navbar">
        <div className="navbar-left-menu">
          <Link to="/">
            <div className="logo">
              <img src={Logo} alt="Logo" className="logo-img" />

              <div className="logo-name">
                Phone <span className="main-color-text">King</span>
              </div>
            </div>
          </Link>

          <div className="inputs">
            <input
              type="text"
              placeholder="szukaj np. nokia"
              className="search-text-input"
            />
            <button className="search-text-button main-color-bg">
              <i className="fas fa-search"></i>
            </button>
          </div>
        </div>
        <div className="navbar-right-menu">
          <div className="menu">
            <ul className="menu-list">
              <li className="menu-list-item">
                <Link to="/delivery">
                  <i className="fas fa-truck"></i>
                  <p className="menu-list-item-name">Bezpieczna dostawa</p>
                </Link>
              </li>
              <li className="menu-list-item">
                <Link to="/contact">
                  <i className="fas fa-phone-volume"></i>
                  <p className="menu-list-item-name">Kontakt</p>
                </Link>
              </li>
              <li className="menu-list-item">
                <Link to="/login">
                  <i className="fas fa-user"></i>
                  <p className="menu-list-item-name">
                    Zaloguj się / załóż konto
                  </p>
                </Link>
              </li>

              <li className="menu-list-item">
                <Link to="/wishlist">
                  <i className="fas fa-heart"></i>
                  <p className="menu-list-item-name">Lista życzeń</p>
                </Link>
              </li>
              <li className="menu-list-item ">
                <Link to="/cart">
                  <i className="fas fa-shopping-cart"></i>
                  <p className="menu-list-item-name">Koszyk</p>
                  {cart.length > 0 ? (
                    <span className="menu-list-item-cart-span">
                      {cart.length}
                    </span>
                  ) : (
                    ""
                  )}
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(Navbar);
