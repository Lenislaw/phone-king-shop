import React, { useState } from "react";

const LoginToRemoveFromWishList = ({ msg }) => {
  const [display, setDisplay] = useState("none");
  const onMouseEnter = () => {
    setDisplay("block");
  };
  const onMouseLeave = () => {
    setDisplay("none");
  };

  return (
    <div className="tooltip tooltip-remove">
      <i
        className="far fa-heart"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
      ></i>
      <div className="tooltip-msg" style={{ display: display }}>
        {msg}
      </div>
    </div>
  );
};

export default LoginToRemoveFromWishList;
