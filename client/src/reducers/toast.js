import { SHOW_TOAST, CLEAR_TOAST } from "../actions/types";

const initialState = {
  html: null,
  displayLength: null,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SHOW_TOAST:
      return {
        html: payload.msg,
        displayLength: payload.displayLength,
      };
    case CLEAR_TOAST:
      return {
        html: null,
        displayLength: null,
      };

    default:
      return state;
  }
}
