import { SET_OFFER, GET_DETAILS } from "./types";

export const setOffer = () => (dispatch) => {
  dispatch({
    type: SET_OFFER,
  });
};
export const getDetails = (id) => (dispatch) => {
  dispatch({
    type: GET_DETAILS,
    payload: id,
  });
};
