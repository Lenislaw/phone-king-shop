import React from "react";
import { connect } from "react-redux";
import CartItem from "./CartItem";

const Cart = ({ cart }) => {
  return (
    <div className="cart">
      <h2>Your Royal's Cart</h2>
      <p>
        List of products selected from the{" "}
        <span className="main-color-text">KING!</span>
      </p>
      <div className="cart-items">
        {cart.length === 0 ? (
          <div className="cart-items-empty">No products picked yet!</div>
        ) : (
          cart.map((item) => <CartItem key={item.id} item={item} />)
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cart: state.cart.cart,
});

export default connect(mapStateToProps)(Cart);
