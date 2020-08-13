import React, { useState, useEffect } from "react";

import NumericInput from "react-numeric-input";

const CartItem = ({ item }) => {
  useEffect(() => {
    updateBasket();
  }, [item]);
  const [amount, setAmount] = useState(item.amount);
  const onClick = (e) => {
    console.log("e", e);
  };
  const updateBasket = (item) => {
    console.log("zmiana", item);
  };
  return (
    <div className="cart-product" key={item.id}>
      <div className="cart-product-image">
        <img
          className="item-photo-img"
          src={`/imgs/${item.photo[0]}`}
          alt="phone"
        />
      </div>
      <div className="cart-product-pannel">
        <div className="name">
          <h3>{item.shortName}</h3>
        </div>
        <div className="buttons">
          <div className="numeric">
            <NumericInput
              className="numberic-input"
              mobile
              value={amount}
              min={1}
              max={item.inStock}
              step={1}
              onChange={(e) => onClick(e)}
              strict={true}
              style={{
                wrap: {
                  width: "200px",
                  border: "1px solid #fff",
                },
                input: {
                  width: "100%",
                  padding: "1rem",
                },
                "input:focus": {
                  border: "3px solid #19888d",
                  outline: "none",
                },
              }}
            />{" "}
            <strong>of {item.inStock} available in stock!</strong>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CartItem;
