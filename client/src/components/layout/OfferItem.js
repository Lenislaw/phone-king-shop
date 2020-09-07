import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { setLoading } from "../../actions/offer";
import TooltipComponent from "./TooltipComponent";
import AddToCart from "./AddToCart";
import Stars from "./Stars";

const OfferItem = ({ product, userId, setLoading }) => {
  const {
    _id,
    photo,
    camera,
    ramMemory,
    builtinMemory,
    screen,
    waterproof,
    name,
    price,
    likes,
    rate,
  } = product;

  return (
    <li className="list-item">
      <div className="item" key={_id}>
        <TooltipComponent product={product} likes={likes.length} rate={rate} />
        <div className="box">
          <div className="item-photo">
            <img
              className="item-photo-img"
              src={`https://shielded-chamber-80408.herokuapp.com/uploads/photo_${_id}.png`}
              alt="phone"
            />
          </div>
          <div className="item-parameters">
            <div className="parameters">
              <ul>
                <li className="parameter">
                  Camera: <span className="bold">{camera}</span>
                </li>
                <li className="parameter">
                  RAM memory: <span className="bold">{ramMemory} GB</span>
                </li>
                <li className="parameter">
                  Phone memory: <span className="bold">{builtinMemory} GB</span>
                </li>
                <li className="parameter">
                  Screen size: <span className="bold">{screen}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="item-details">
          <div className="description">
            <Link to={`/details/${_id}`} onClick={setLoading}>
              <div className="name">{name}</div>
            </Link>

            <div className="price">{price} $</div>
          </div>
          <div className="add-rate">
            <Stars userId={userId} productId={_id} rate={rate} />
          </div>
        </div>
        <AddToCart product={product} />
      </div>
    </li>
  );
};
const mapStateToProps = (state) => ({
  toast: state.toast,
  cart: state.cart.cart,
  isAuthenticated: state.auth.isAuthenticated,
});

export default connect(mapStateToProps, {
  setLoading,
})(OfferItem);
