import React, { useEffect, Fragment } from "react";
import M from "materialize-css/dist/js/materialize.min.js";
import { connect } from "react-redux";
import { setOffer } from "../../actions/offer";
import { clearFilter } from "../../actions/cart";
import FilterBar from "./FilterBar";
import SearchBar from "./SearchBar";
import OfferItem from "./OfferItem";
import Spinner from "./Spinner";
import PaginationComponent from "./PaginationComponent";

const Offer = ({
  setOffer,
  offer,
  loading,
  toast,
  cart,
  clearFilter,
  user,
}) => {

  const { products } = offer;

  useEffect(() => {
    setOffer();
    clearFilter();
  }, []);

  useEffect(() => {
    clearFilter();
  }, [products]);

  useEffect(() => {
    toast.html &&
      M.toast({ html: `${toast.html}`, displayLength: toast.displayLength });
  }, [toast.html]);
  useEffect(() => {
    cart.cartToast.html &&
      M.toast({
        html: `${cart.cartToast.html}`,
        displayLength: cart.cartToast.displayLength,
      });
  }, [cart.cartToast.html]);

  return loading ? (
    <Spinner />
  ) : user === null ? (
    <Fragment>
      {" "}
      <FilterBar />
      <section>
        <div className="offer">
          <SearchBar />
          <h1 className="offer-title">
            Phones <span className="main-color-text">King</span> Offer
          </h1>
          <div className="offer-items">
            {products.length === 0 ? (
              <div className="no-product">
                <img
                  src="./imgs/noproduct.png"
                  alt="no product"
                  className="no-product-image"
                />
              </div>
            ) : (
              <ul className="list">
                {products.map((product) => (
                  <OfferItem
                    key={product._id}
                    product={product}
                    cart={cart.cart}
                    likes={product.likes}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
        {!loading && <PaginationComponent offer={offer} />}
      </section>
    </Fragment>
  ) : (
    <Fragment>
      {" "}
      <FilterBar />
      <section>
        <div className="offer">
          <h1 className="offer-title">
            Phones <span className="main-color-text">King</span> Offer
          </h1>
          <div className="offer-items">
            {products.length === 0 ? (
              <div className="no-product">
                <img
                  src="./imgs/noproduct.png"
                  alt="no product"
                  className="no-product-image"
                />
              </div>
            ) : (
              <ul className="list">
                {products.map((product) => (
                  <OfferItem
                    key={product._id}
                    product={product}
                    cart={cart.cart}
                    likes={product.likes}
                    userId={user._id}
                  />
                ))}
              </ul>
            )}
          </div>
        </div>
        {!loading && <PaginationComponent offer={offer} />}
      </section>
    </Fragment>
  );
};

const mapStateToProps = (state) => ({
  offer: state.offer,
  loading: state.offer.loading,
  toast: state.toast,
  cart: state.cart,
  isAuthenticated: state.auth.isAuthenticated,
  user: state.auth.user,
});

export default connect(mapStateToProps, { setOffer, clearFilter })(Offer);
