import React, { useState, Fragment } from "react";
import ReactStars from "react-stars";
import { connect } from "react-redux";
import { addRate } from "../../actions/wishlist";

const Stars = ({ addRate, productId, userId, isAuthenticated, rate, page }) => {

  const [value, setValue] = useState(0);
  const ratingChanged = (newRating) => {
    if (newRating < 0.5) {
      setValue(0.5);
    }
    setValue(newRating);
  };
  const onClick = () => {
    addRate({ value }, productId, userId, page);
  };
  return (
    <Fragment>
      {isAuthenticated ? (
        <Fragment>
          <div className="rate-stars">
            <ReactStars
              count={5}
              value={value}
              onChange={ratingChanged}
              size={36}
              color2={"#FFD700"}
            />
          </div>
          <div className="btn">
            <button className="add-rate-btn" onClick={onClick}>
              Rate
            </button>
          </div>
        </Fragment>
      ) : (
        <div>Login for enable adding rate's!</div>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  page: state.offer.page,
});
export default connect(mapStateToProps, { addRate })(Stars);
