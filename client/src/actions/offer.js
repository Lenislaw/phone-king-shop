import { SET_OFFER, GET_DETAILS, SET_LOADING } from "./types";

export const setOffer = () => async (dispatch) => {
  dispatch({
    type: SET_OFFER,
  });
};
export const getDetails = (id) => async (dispatch) => {
  setLoading();
  dispatch({
    type: GET_DETAILS,
    payload: id,
  });
};
export const setLoading = () => (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
};
