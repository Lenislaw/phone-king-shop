import { GET_FILTERPARAMS, SAVE_FILTER_PARAMS } from "../actions/types";

const initialState = {
  filterParams: null,
  loading: true,
  url: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case GET_FILTERPARAMS:
      return {
        filterParams: payload,
        loading: false,
      };
    case SAVE_FILTER_PARAMS:
      return {
        ...state,
        url: payload,
      };

    default:
      return state;
  }
}
