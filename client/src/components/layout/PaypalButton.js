import React from "react";
import PaypalExpressBtn from "react-paypal-express-checkout";
import { connect } from "react-redux";
import { setPurchaseHistory } from "../../actions/cart";
import config from "../../../../config/production.json";

const PaypalButton = ({
  total,
  clearCart,
  setAfterSell,
  isAuthenticated,
  cart,
  setPurchaseHistory,
  user,
}) => {
  {
    const onSuccess = (payment) => {
      // Congratulation, it came here means everything's fine!
      console.log("The payment was succeeded!", payment);

      if (isAuthenticated) {
        setPurchaseHistory(cart, user._id);
        clearCart();
        setAfterSell();
      } else {
        clearCart();
        setAfterSell();
      }

      // You can bind the "payment" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onCancel = (data) => {
      // User pressed "cancel" or close Paypal's popup!
      console.log("The payment was cancelled!", data);
      // You can bind the "data" object's value to your state or props or whatever here, please see below for sample returned data
    };

    const onError = (err) => {
      // The main Paypal's script cannot be loaded or somethings block the loading of that script!
      console.log("Error!", err);
      // Because the Paypal's main script is loaded asynchronously from "https://www.paypalobjects.com/api/checkout.js"
      // => sometimes it may take about 0.5 second for everything to get set, or for the button to appear
    };

    let env = "sandbox"; // you can set here to 'production' for production
    let currency = "USD"; // or you can set this value from your props or state
    let totalToPay = total; // same as above, this is the total amount (based on currency) to be paid by using Paypal express checkout
    // Document on Paypal's currency code: https://developer.paypal.com/docs/classic/api/currency_codes/
    const clientId = config.get("paypalId");
    const client = {
      sandbox: clientId,
      production: "YOUR-PRODUCTION-APP-ID",
    };
    // In order to get production's app-ID, you will have to send your app to Paypal for approval first
    // For sandbox app-ID (after logging into your developer account, please locate the "REST API apps" section, click "Create App"):
    //   => https://developer.paypal.com/docs/classic/lifecycle/sb_credentials/
    // For production app-ID:
    //   => https://developer.paypal.com/docs/classic/lifecycle/goingLive/

    // NB. You can also have many Paypal express checkout buttons on page, just pass in the correct amount and they will work!

    return (
      <PaypalExpressBtn
        env={env}
        client={client}
        currency={currency}
        total={totalToPay}
        onError={onError}
        onSuccess={onSuccess}
        onCancel={onCancel}
        className="paypal-button"
      />
    );
  }
};
const mapStateToProps = (state) => ({
  isAuthenticated: state.auth.isAuthenticated,
  cart: state.cart.cart,
  user: state.auth.user,
});
export default connect(mapStateToProps, {
  setPurchaseHistory,
})(PaypalButton);
