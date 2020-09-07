import React, { useState } from "react";
import { connect } from "react-redux";
import { removeFromWishListItem } from "../../actions/wishlist";

const RemoveFromWishList = ({
  msg,
  product,
  user,
  removeFromWishListItem,
  page,
}) => {
  const [display, setDisplay] = useState("none");
  const onMouseEnter = () => {
    setDisplay("block");
  };
  const onMouseLeave = () => {
    setDisplay("none");
  };
  const onClick = () => {
    removeFromWishListItem(product._id, user._id, page);
  };

  return (
    <div className="tooltip tooltip-remove">
      <i
        className="far fa-heart"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      ></i>
      <div className="tooltip-msg" style={{ display: display }}>
        {msg}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  user: state.auth.user,
  page: state.offer.page,
});
export default connect(mapStateToProps, {
  removeFromWishListItem,
})(RemoveFromWishList);
