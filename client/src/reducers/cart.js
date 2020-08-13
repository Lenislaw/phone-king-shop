import { ADD_TO_CART, CLEAR_CARD_TOAST } from "../actions/types";
const initialState = {
  cart: [],
  cartToast: {
    html: null,
    displayLength: null,
  },
};

export default function (state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case ADD_TO_CART:
      const product = state.cart.find((x) => x.id === payload.id);

      if (product) {
        product.amount += payload.amount;
        if (product.amount >= payload.inStock) {
          product.amount = payload.inStock;
          product.pickedAll = true;
          return {
            ...state,
            cart: [...state.cart],
            cartToast: {
              html: `You picked all (${product.amount}) ${product.shortName} from Stock!`,
              displayLength: 4000,
            },
          };
        }
        return {
          ...state,
          cart: [...state.cart],
          cartToast: {
            html: `(${payload.amount})${product.shortName} added to cart!`,
            displayLength: 4000,
          },
        };
      }
      return {
        ...state,
        cart: [...state.cart, payload],
        cartToast: {
          html: `(${payload.amount})${payload.shortName} added to cart!`,
          displayLength: 4000,
        },
      };

    case CLEAR_CARD_TOAST:
      return {
        ...state,
        cartToast: {
          html: null,
          displayLength: null,
        },
      };
    default:
      return state;
  }
}
