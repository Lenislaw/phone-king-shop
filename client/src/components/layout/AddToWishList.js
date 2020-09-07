import React, { useState } from "react";
import { connect } from "react-redux";
import { addToWishListItem } from "../../actions/wishlist";

const AddToWishList = ({
  msg,
  product,
  addToWishListItem,
  user,
  likes,
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
    // e.preventDefault();
    addToWishListItem(product._id, user._id, page);
  };

  return (
    <div className="tooltip tooltip-add">
      <i
        className="fas fa-heart"
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        onClick={onClick}
      ></i>{" "}
      <div className="tooltip-likes">{likes}</div>
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
  addToWishListItem,
})(AddToWishList);
