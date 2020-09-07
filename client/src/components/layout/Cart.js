import React, { useEffect, Fragment, useRef } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import {
  clearCart,
  filterItems,
  clearFilter,
  calculateTotal,
  setAfterSell,
} from "../../actions/cart";
import M from "materialize-css/dist/js/materialize.min.js";
import CartItem from "./CartItem";
import BackToOffer from "./BackToOffer";
import ModalElement from "./ModalElement";
import PaypalButton from "./PaypalButton";

const Cart = ({
  cart,
  cartToastUpdate,
  clearCart,
  clearFilter,
  filterItems,
  filtered,
  total,
  calculateTotal,
  setAfterSell,
  bought,
  isAuthenticated,
}) => {
  const text = useRef("");

  const onChange = (e) => {
    if (text.current.value !== "") {
      filterItems(e.target.value);
    } else {
      clearFilter();
    }
  };

  useEffect(() => {
    cartToastUpdate.html &&
      M.toast({
        html: `${cartToastUpdate.html}`,
        displayLength: cartToastUpdate.displayLength,
      });
  }, [cartToastUpdate]);

  useEffect(() => {
    cartToastUpdate.html &&
      M.toast({
        html: `${cartToastUpdate.html}`,
        displayLength: cartToastUpdate.displayLength,
      });
  }, [cartToastUpdate]);

  useEffect(() => {
    calculateTotal();
  }, [cart]);

  useEffect(() => {}, [isAuthenticated]);

  const onClick = () => {
    clearCart();
  };

  return (
    <div className="container">
      <div className="cart">
        <h2 className="cart-heading">Your Royal's Cart</h2>
        <p className="cart-text">
          List of products selected from the{" "}
          <span className="main-color-text">KING!</span>
        </p>
        <div className="cart-items">
          {cart.length === 0 && cart !== null ? (
            <div className="cart-items-empty">
              <p className="cart-items-empty-text">No products picked yet!</p>
              <img
                src="./imgs/cart.png"
                alt="no product"
                className="cart-items-empty-image"
              />
              <BackToOffer />
            </div>
          ) : (
            <Fragment>
              <div className="cart-buttons">
                <form className="search-incart">
                  <input
                    ref={text}
                    type="text"
                    placeholder="Find in cart..."
                    className="search-incart-text-input"
                    onChange={onChange}
                  />
                </form>
                <div className="delete-all">
                  <button className="delete-all-btn" onClick={onClick}>
                    <i className="fas fa-trash-alt"></i>
                    <p>Clear Cart</p>
                  </button>
                </div>
              </div>

              {filtered === null ? (
                <ul>
                  {cart.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </ul>
              ) : filtered.length === 0 ? (
                <p>You don't have this product in your cart!</p>
              ) : (
                <ul>
                  {filtered.map((item) => (
                    <CartItem key={item.id} item={item} />
                  ))}
                </ul>
              )}
            </Fragment>
          )}
        </div>
        {cart.length > 0 && cart !== null && (
          <div className="cart-total">Total to Pay: {total} $</div>
        )}
        {isAuthenticated ? (
          <div></div>
        ) : (
          <div className="login-register">
            <Link to="/login">Log in</Link> /{" "}
            <Link to="/register">Register</Link> to create purchase history and
            unlock wishlist!
          </div>
        )}
        {cart.length > 0 && cart !== null && (
          <PaypalButton
            total={total}
            clearCart={clearCart}
            setAfterSell={setAfterSell}
          />
        )}
        {bought && <ModalElement />}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
  cartToastUpdate: state.cart.cartToastUpdate,
  filtered: state.cart.filtered,
  total: state.cart.total,
  bought: state.cart.bought,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  clearCart,
  clearFilter,
  filterItems,
  calculateTotal,
  setAfterSell,
})(Cart);
