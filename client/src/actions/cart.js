import {
  ADD_TO_CART,
  SHOW_TOAST,
 
  CLEAR_TOAST,
  CLEAR_CARD_TOAST,
} from "./types";

export const addToCart = (
  id,
  photo,
  name,
  price,
  inStock,
  amount,
  shortName
) => (dispatch) => {
  const product = {
    id,
    photo,
    name,
    price,
    inStock,
    amount,
    shortName,
  };
  if (amount === "") {
    
    dispatch({
      type: SHOW_TOAST,
      payload: {
        msg: "Please write correct number value!",
        displayLength: 4000,
      },
    });
    setTimeout(() => {
      dispatch({
        type: CLEAR_TOAST,
      });
    }, 4000);
  } else {
    
    dispatch({ type: ADD_TO_CART, payload: product });
  
    setTimeout(() => {
      dispatch({ type: CLEAR_CARD_TOAST });
    }, 4000);
  }
};

export const checkAvilable = (id, cart, inStock) => (dispatch) => {
  console.log("cart z actions", cart);
};
