import React, { Fragment } from "react";
import AddToWishList from "./AddToWishList";
import RemoveFromWishList from "./RemoveFromWishList";
import LoginToAddToWishList from "./LoginToAddToWishList";
import LoginToRemoveFromWishList from "./LoginToRemoveFromWishList";
import Rate from "./Rate";
import { connect } from "react-redux";

const TooltipComponent = ({ isAuthenticated, product, likes, rate,userId }) => {
  return (
    <Fragment>
      {isAuthenticated ? (
        <Fragment>
          <Rate rate={rate} msg={"Product rate's by user's!"}  />
          <AddToWishList
            msg={"Click for add like!"}
            product={product}
            likes={likes}
          />

          <RemoveFromWishList
            msg={"Click for remove like!"}
            product={product}
          />
        </Fragment>
      ) : (
        <Fragment>
          <Rate rate={rate} msg={"Product rate's by user's!"} />
          <LoginToAddToWishList
            msg={"Login to enable adding like!"}
            likes={likes}
          />
          <LoginToRemoveFromWishList msg={"Login to enable removeing like!"} />
        </Fragment>
      )}
    </Fragment>
  );
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
});
export default connect(mapStateToProps)(TooltipComponent);
