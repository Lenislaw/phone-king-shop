import React from "react";
import { Link } from "react-router-dom";

const BackToOffer = () => {
  return (
    <Link to="/" className="back-to-offer-link">
      <div className="back-to-offer-link-div">
        Back to <span className="main-text color">KING'S</span> OFFER
      </div>
    </Link>
  );
};

export default BackToOffer;
