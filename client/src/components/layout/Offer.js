import React, { useEffect } from "react";
import { connect } from "react-redux";
import { setOffer } from "../../actions/offer";
import OfferItem from "./OfferItem";

const Offer = ({ setOffer, offer }) => {
  const { products } = offer;

  useEffect(() => {
    setOffer();
  }, []);
  return (
    <section>
      <div className="offer">
        <h1 className="offer-title">
          Phones <span className="main-color-text">King</span> Offer
        </h1>
        <div className="offer-items">
          <ul className="list">
            {products.map((product) => (
              <OfferItem key={product.id} product={product} />
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
};

const mapStateToProps = (state) => ({
  offer: state.offer,
});

export default connect(mapStateToProps, { setOffer })(Offer);
