import React, { useState } from "react";

const LoginToAddToWishList = ({ msg, likes }) => {
  const [display, setDisplay] = useState("none");
  const onMouseEnter = () => {
    setDisplay("block");
  };
  const onMouseLeave = () => {
    setDisplay("none");
  };

  return (
    <div className="tooltip tooltip-add">
      <i
        className="fas fa-heart"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
  ></i>{" "}
  <div className="tooltip-likes">{likes}</div>
      <div className="tooltip-msg" style={{ display: display }}>
        {msg}
      </div>
    </div>
  );
};

export default LoginToAddToWishList;
