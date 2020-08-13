import { SHOW_TOAST } from "./types";

export const showToast = (msg, displayLength = 4000) => (dispatch) => {
  console.log("toast");
  dispatch({
    type: SHOW_TOAST,
    payload: { msg: msg, displayLength: displayLength },
  });
};
