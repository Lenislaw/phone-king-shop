import {
  ADD_TO_CART,
  SHOW_TOAST,
  UPDATE_ITEM_IN_CART,
  CLEAR_TOAST,
  CLEAR_CARD_TOAST,
  DELETE_ITEM,
  CLEAR_CART,
  FILTER_ITEMS,
  CLEAR_FILTER,
  CALCULATE_TOTAL,
  AFTER_SELL,
  AFTER_THANKS,
} from "./types";
import api from "../utils/api";
import { loadUser } from "./auth";

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

export const updateAmount = (id, amount, shortName) => (dispatch) => {
  dispatch({
    type: UPDATE_ITEM_IN_CART,
    payload: { id, amount, shortName },
  });
  setTimeout(() => {
    dispatch({ type: CLEAR_CARD_TOAST });
  }, 4000);
};

export const deleteItem = (id, amount, shortName) => (dispatch) => {
  dispatch({
    type: DELETE_ITEM,
    payload: { id, amount, shortName },
  });

  setTimeout(() => {
    dispatch({
      type: CLEAR_CARD_TOAST,
    });
  }, 4000);
};
export const clearCart = () => (dispatch) => {
  dispatch({
    type: CLEAR_CART,
  });
  setTimeout(() => {
    dispatch({
      type: CLEAR_CARD_TOAST,
    });
  }, 4000);
};

export const filterItems = (text) => (dispatch) => {
  dispatch({ type: FILTER_ITEMS, payload: text });
};
export const clearFilter = () => (dispatch) => {
  dispatch({ type: CLEAR_FILTER });
};

export const calculateTotal = () => (dispatch) => {
  dispatch({ type: CALCULATE_TOTAL });
};
export const setAfterSell = () => (dispatch) => {
  dispatch({ type: AFTER_SELL });
};
export const setAfterThanks = () => (dispatch) => {
  dispatch({ type: AFTER_THANKS });
};
export const setPurchaseHistory = (cart, userId) => async (dispatch) => {
  const body = cart;

  try {
    await api.put(`/users/history/${userId}`, body);
    dispatch(loadUser());
  } catch (error) {
    console.error(error);
  }
};
