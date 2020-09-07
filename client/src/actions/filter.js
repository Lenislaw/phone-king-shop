import {
  GET_FILTERPARAMS,
  SET_OFFER,
  FILTERED,
  SAVE_FILTER_PARAMS,
} from "./types";
import api from "../utils/api";
import { setAlert } from "./alert";
import { showToast } from "./toast";

export const getFilterParams = () => async (dispatch) => {
  try {
    const res = await api.get("/filter");

    dispatch({ type: GET_FILTERPARAMS, payload: res.data });
  } catch (error) {
    let errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};
export const filterProduct = (
  checked,
  selectedRam,
  selectedBuiltinMemory,
  selectedDualSim,
  stateMax,
  pageNumber = 1
) => async (dispatch) => {
  try {
    let url = "";

    if (checked.length > 0) {
      checked.forEach((check) => {
        url += `producent=${check}&`;
      });

      url += `ramMemory[gte]=${selectedRam}&builtinMemory[gte]=${selectedBuiltinMemory}&dualSim=${selectedDualSim}&price[lte]=${stateMax}`;
      dispatch({ type: SAVE_FILTER_PARAMS, payload: url });
    } else {
      url += `ramMemory[gte]=${selectedRam}&builtinMemory[gte]=${selectedBuiltinMemory}&dualSim=${selectedDualSim}&price[lte]=${stateMax}`;
      dispatch({ type: SAVE_FILTER_PARAMS, payload: url });
    }

    const res = await api.get(`/products?${url}`);
    console.log(res.data);
    const { data, lastPage, pagination, total, page } = res.data;

    dispatch(showToast("You filtred the list!"));
    dispatch({ type: FILTERED });
    dispatch({
      type: SET_OFFER,
      payload: { products: data, lastPage, pagination, total, page },
    });
  } catch (error) {
    let errors = error.response.data.errors;

    if (errors) {
      errors.forEach((error) => dispatch(setAlert(error.msg, "error")));
    }
  }
};

export const filterProductByText = (text) => async (dispatch) => {
  try {
    const res = await api.get(`/products/text/${text}`);
    const { data } = res;

    dispatch(showToast("You filtred the list of products!"));
    dispatch({ type: FILTERED });
    dispatch({
      type: SET_OFFER,
      payload: { products: data },
    });
  } catch (error) {
    let errors = error.response;

    if (errors) {
      dispatch(showToast(errors.data.msg));
    }
  }
};
