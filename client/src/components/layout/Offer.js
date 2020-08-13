import React, { useEffect } from "react";
import { connect } from "react-redux";
import M from "materialize-css/dist/js/materialize.min.js";
import { setOffer } from "../../actions/offer";
import { checkAvilable } from "../../actions/cart";
import OfferItem from "./OfferItem";

const Offer = ({ setOffer, offer, loading, toast, cart }) => {
  const { products } = offer;

  useEffect(() => {
    setOffer();
  }, []);

  useEffect(() => {
    toast.html &&
      M.toast({ html: `${toast.html}`, displayLength: toast.displayLength });
  }, [toast.html]);
  useEffect(() => {
    cart.cartToast.html &&
      M.toast({
        html: `${cart.cartToast.html}`,
        displayLength: cart.cartToast.displayLength,
      });
  }, [cart.cartToast.html]);

  return loading ? (
    <div>Loading</div>
  ) : (
    <section>
      <div className="offer">
        <h1 className="offer-title">
          Phones <span className="main-color-text">King</span> Offer
        </h1>
        <div className="offer-items">
          <ul className="list">
            {products.map((product) => (
              <OfferItem key={product.id} product={product} cart={cart.cart} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  loading: state.offer.loading,
  toast: state.toast,
  cart: state.cart,
});

export default connect(mapStateToProps, { setOffer, checkAvilable })(Offer);
