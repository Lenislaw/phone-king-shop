import React, { Fragment, useState } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart";
import { setLoading } from "../../actions/offer";

const OfferItem = ({ product, addToCart, setLoading }) => {
  const {
    id,
    photo,
    camera,
    ramMemory,
    builtinMemory,
    screen,
    waterproof,
    name,
    shortName,
    price,
    inStock,
  } = product;

  const [amount, setAmount] = useState(1);

  const onClick = () => {
    addToCart(id, photo, name, price, inStock, amount, shortName);
  };
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  return (
    <li className="list-item">
      <div className="item" key={id}>
        <div className="box">
          <div className="item-photo">
            <img
              className="item-photo-img"
              src={`/imgs/${photo[0]}`}
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
                <li className="parameter">
                  Waterproof: <span className="bold">{waterproof}</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <div className="item-details">
          <div className="description">
            <Link to={`/details/${id}`} onClick={setLoading}>
              <div className="name">{name}</div>
            </Link>
            <div className="rate">
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>
              <i className="fas fa-star"></i>( 5 reviews)
            </div>
            <div className="price">{price} $</div>
          </div>
        </div>
        <div className="buttons">
          {inStock > 0 ? (
            <Fragment>
              <div className="numeric">
                <input
                  type="number"
                  min="1"
                  max={inStock}
                  pattern="[0-9]"
                  step={1}
                  value={
                    amount > inStock
                      ? inStock
                      : amount && amount < 1
                      ? 1
                      : amount
                  }
                  onChange={(e) => onChange(e)}
                />
                <strong>of {inStock} available in stock!</strong>
              </div>
              <button className="add-to-cart" onClick={onClick}>
                Add to Cart
              </button>
            </Fragment>
          ) : (
            <div className="out-of-stock">
              <strong> Sorry, product not aviable in stock</strong>
            </div>
          )}
        </div>
        <div className="wish-list">
          <i className="far fa-heart"></i>
        </div>
      </div>
    </li>
  );
};
const mapStateToProps = (state) => ({
  toast: state.toast,
  cart: state.cart.cart,
});

export default connect(mapStateToProps, {
  addToCart,
  setLoading,
})(OfferItem);
