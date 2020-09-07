import React, { useState, Fragment } from "react";

const Rate = ({ msg, rate }) => {
  let result;
  if (rate.length > 0) {
    if (rate.length === 1) {
     
      result = rate[0].rate;
    }
    if (rate.length > 1) {
      result = rate.reduce((prev, curr) => {
        return prev.rate + curr.rate;
      });
    }
  }
  const avgRate = result / rate.length;

  const [display, setDisplay] = useState("none");
  const onMouseEnter = () => {
    setDisplay("block");
  };
  const onMouseLeave = () => {
    setDisplay("none");
  };

  return (
    <Fragment>
      <div
        className="rate"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      >
        <i className="fas fa-star star">
          {rate.length === 0 ? "Not rated yet!" : avgRate}
        </i>
      </div>
      <div className="tooltip-msg-rate" style={{ display: display }}>
        {msg}
      </div>
    </Fragment>
  );
};

export default Rate;
