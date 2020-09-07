import { combineReducers } from "redux";
import alert from "./alert";
import offer from "./offer";
import cart from "./cart";
import toast from "./toast";
import auth from "./auth";

import filter from "./filter";

export default combineReducers({
  alert,
  offer,
  cart,
  toast,
  auth,
  filter,
});
