import {
  SET_OFFER,
  GET_DETAILS,
  SET_LOADING,
  UPDATE_WISHLIST,
  FILTERED,
  FILTERED_OFF,
} from "../actions/types";
const initialState = {
  products: [],
  productDetails: null,
  loading: true,
  pagination: null,
  total: null,
  lastPage: null,
  page: null,
  filtered: false,
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case SET_OFFER:
      return {
        ...state,
        products: payload.products,
        loading: false,
        pagination: payload.pagination,
        total: payload.total,
        lastPage: payload.lastPage,
        page: payload.page,
      };
    case GET_DETAILS:
      return {
        ...state,
        productDetails: payload,
        loading: false,
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true,
      };
    case UPDATE_WISHLIST:
      return {
        ...state,
        products: state.products.map((product) =>
          product._id === payload.wishId
            ? { ...product, wishlist: payload.wishlist }
            : product
        ),
        loading: false,
      };
    case FILTERED:
      return {
        ...state,
        filtered: true,
      };
    case FILTERED_OFF:
      return {
        ...state,
        filtered: false,
      };
    default:
      return state;
  }
}
