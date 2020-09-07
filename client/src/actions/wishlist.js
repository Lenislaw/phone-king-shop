import { setOffer } from "./offer";
import api from "../utils/api";
import { showToast } from "./toast";

export const addToWishListItem = (wishId, userId,page) => async (dispatch) => {
  try {
    await api.put(`/products/like/${userId}/${wishId}`);

    dispatch(setOffer(page));

    const msg = "Product liked!";
    dispatch(showToast(msg, 4000));
  } catch (error) {
    const msg = error.response.data.msg;

    dispatch(showToast(msg, 4000));
  }
};
export const removeFromWishListItem = (wishId, userId,page) => async (dispatch) => {
  try {
    await api.put(`/products/unlike/${userId}/${wishId}`);

    dispatch(setOffer(page));

    const msg = "Product unliked!";
    dispatch(showToast(msg, 4000));
  } catch (error) {
    const msg = error.response.data.msg;

    dispatch(showToast(msg, 4000));
  }
};
export const addRate = (value, productId, userId, page) => async (dispatch) => {
  try {
    const res = await api.put(`/products/rate/${userId}/${productId}`, value);
    let msg = res.data.msg;
    if (!msg) {
      msg = "Product rate'd!";
      dispatch(showToast(msg, 4000));
    }
    dispatch(showToast(msg, 4000));
    dispatch(setOffer(page));
  } catch (error) {
    const msg = error.response.data.msg;

    dispatch(showToast(msg, 4000));
  }
};
