import React, { Fragment, useState } from "react";
import { connect } from "react-redux";
import { addToCart } from "../../actions/cart";

const AddToCart = ({ product, addToCart }) => {
  const { _id, photo, name, price, inStock, shortName } = product;

  const [amount, setAmount] = useState(1);

  const onClick = () => {
    addToCart(_id, photo, name, price, inStock, amount, shortName);
  };
  const onChange = (e) => {
    setAmount(e.target.value);
  };
  return (
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
                amount > inStock ? inStock : amount && amount < 1 ? 1 : amount
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
  );
};
export default connect(null, { addToCart })(AddToCart);
