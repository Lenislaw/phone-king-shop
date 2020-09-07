import { SHOW_TOAST, CLEAR_TOAST } from "./types";

export const showToast = (msg, displayLength = 4000) => (dispatch) => {


  
  dispatch({
    type: SHOW_TOAST,
    payload: { msg: msg, displayLength: displayLength },
  });
  setTimeout(() => {
    dispatch({
      type: CLEAR_TOAST,
    });
  }, displayLength);
};
