import { ADD_TO_CART } from "../actions/types";
const initialState = {
  cart: [],
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      const item = payload;
      const product = state.cart.find((x) => x.id === item.id);

      if (product) {
        // product.amount = payload.amount;
        return {
          cart: [...state.cart],
        };
      }
      return {
        cart: [...state.cart, item],
      };

    default:
      return state;
  }
}
