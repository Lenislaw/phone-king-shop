import React, { useEffect } from "react";
import DeliveryIcon from "../../imgs/delivery-icon.png";
import TruckIcon from "../../imgs/truck-icon.png";
import CartIcon from "../../imgs/cart-icon.png";
import WebsiteIcon from "../../imgs/website-icon.png";
import PhoneIcon from "../../imgs/phone-icon.png";
import PersonIcon from "../../imgs/person-icon.png";
import PromoIcon from "../../imgs/promo-icon.png";
import BackToOffer from "./BackToOffer";
import { clearFilter } from "../../actions/cart";
import { connect } from "react-redux";

const Delivery = ({ clearFilter }) => {
  useEffect(() => {
    clearFilter();
  });
  return (
    <div className="container">
      <div className="container-box">
        <img src={DeliveryIcon} alt="package" className="box-icon" />
        <h2 className="heading main-color-text">Safe delivery</h2>
        <div className="container-box-methods">
          <div className="method">
            <img src={TruckIcon} alt="Truck" />
            <h3 className="p1">Courier</h3>
            <p className="p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              assumenda voluptatem repellendus autem praesentium modi?
            </p>
          </div>
        </div>
      </div>

      <div className="container-box">
        <img src={CartIcon} alt="package" className="box-icon" />
        <h2 className="heading main-color-text">Make safe order</h2>
        <div className="container-box-methods">
          <div className="method">
            <img src={WebsiteIcon} alt="Website" />
            <h3 className="p1">Make order on website</h3>
            <p className="p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              assumenda voluptatem repellendus autem praesentium modi?
            </p>
          </div>
          <div className="method">
            <img src={PhoneIcon} alt="Phone" />
            <h3 className="p1">Make order by phone</h3>
            <h4>+11 111 111 111</h4>
            <p className="p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              assumenda voluptatem repellendus autem praesentium modi?
            </p>
          </div>
          <div className="method">
            <img src={PersonIcon} alt="Person" />
            <h3 className="p1">Make order for someOne</h3>
            <p className="p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              assumenda voluptatem repellendus autem praesentium modi?
            </p>
          </div>
        </div>
      </div>

      <div className="container-box">
        <img src={PromoIcon} alt="package" className="box-icon" />
        <h2 className="heading main-color-text">Check our ROYAL offer</h2>
        <div className="container-box-methods">
          <div className="method">
            <h3 className="p1">Are you looking for something royal?</h3>
            <p className="p1">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Non
              assumenda voluptatem repellendus autem praesentium modi?
            </p>
          </div>
        </div>
      </div>
      <BackToOffer />
    </div>
  );
};

export default connect(null, { clearFilter })(Delivery);
