import { combineReducers } from "redux";
import alert from "./alert";
import offer from "./offer";
import cart from "./cart";

export default combineReducers({
  alert,
  offer,
  cart,
});
