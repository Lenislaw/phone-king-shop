import React, { useState } from "react";
import { connect } from "react-redux";
import { updateAmount, deleteItem } from "../../actions/cart";
import M from "materialize-css/dist/js/materialize.min.js";

const CartItem = ({ item, updateAmount, deleteItem }) => {
  const { id, inStock, shortName, price } = item;

  const [amount, setAmount] = useState(item.amount);

  const onChange = (e) => {
    const amount = e.target.value;
    setAmount(e.target.value);
    updateAmount(id, amount, shortName);
  };
  const onClick = () => {
    M.toast({
      html: `${shortName}(${amount}) removed from cart!`,
      displayLength: 4000,
    });
    deleteItem(id, amount, shortName);
  };

  return (
    <li className="cart-product" key={id}>
      <div className="cart-product-image">
        <img
          className="item-photo-img"
          src={`https://shielded-chamber-80408.herokuapp.com/uploads/photo_${id}.png`}
          alt="phone"
        />
      </div>
      <div className="cart-product-pannel">
        <div className="name">
          <h3>{shortName}</h3>
        </div>
        <div className="buttons">
          <div className="numeric">
            <input
              className="numeric-input"
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
            <strong>of {item.inStock} available in stock!</strong>
          </div>
          <div className="price">{price}$</div>
          <div className="delete-item">
            <button className="delete-item-btn" onClick={onClick}>
              <i className="fas fa-ban"></i>
              <p>Remove</p>
            </button>
          </div>
        </div>
      </div>
    </li>
  );
};

export default connect(null, { updateAmount, deleteItem })(CartItem);
