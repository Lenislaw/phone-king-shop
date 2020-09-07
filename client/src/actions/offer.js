import { SET_OFFER, GET_DETAILS, SET_LOADING, FILTERED_OFF } from "./types";
import api from "../../src/utils/api";

export const setOffer = (pageNumber = 1) => async (dispatch) => {
  const res = await api.get(`/products?page=${pageNumber}`);
  setLoading();
  dispatch({ type: FILTERED_OFF });
  const { data, lastPage, pagination, total, page } = res.data;

  dispatch({
    type: SET_OFFER,
    payload: {
      products: data,
      lastPage,
      pagination,
      total,
      page,
    },
  });
};
export const getDetails = (id) => async (dispatch) => {
  setLoading();
 
  const res = await api.get(`/products/${id}`);
  
  dispatch({
    type: GET_DETAILS,
    payload: res.data,
  });
};
export const setLoading = () => (dispatch) => {
  dispatch({ type: SET_LOADING, payload: true });
};
