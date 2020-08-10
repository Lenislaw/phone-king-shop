import React, { Fragment, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart";

const OfferItem = ({ product, addToCart }) => {
  const {
    id,
    photo,
    camera,
    ramMemory,
    builtinMemory,
    screen,
    waterproof,
    name,
    price,
    inStock,
  } = product;

  const [amount, setAmount] = useState(inStock > 0 ? 1 : 0);
  const [disableMinus, setDisableMinus] = useState(false);
  const [disablePlus, setDisablePlus] = useState(false);

  console.log(amount);

  const minusOne = () => {
    if (amount - 1 <= inStock) {
      setDisablePlus(false);
    }
    if (amount === 1) {
      setDisableMinus(true);
    } else {
      setAmount(amount - 1);
    }
  };
  const addOne = () => {
    if (amount === inStock) {
      setDisablePlus(true);
    } else {
      setAmount(amount + 1);
    }
    setDisableMinus(false);
  };

  const onClick = () => {
    addToCart(product);
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
            <Link to={`/details/${id}`}>
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
              <button
                className="qtn-button plus"
                onClick={addOne}
                disabled={disablePlus}
              >
                +
              </button>
              <input
                className="add-to-cart-amount"
                type="number"
                min="1"
                max={inStock}
                value={amount}
                onChange={(e) => setAmount(e.target.value)}
              />
              <button
                className="qtn-button minus"
                disabled={disableMinus}
                onClick={minusOne}
              >
                -
              </button>
              <button className="add-to-cart" onClick={onClick}>
                Add to Cart
              </button>
            </Fragment>
          ) : (
            <div className="out-of-stock">
              Sorry, product not aviable in stock
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

export default connect(null, { addToCart })(OfferItem);
