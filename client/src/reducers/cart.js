import {
  ADD_TO_CART,
  CLEAR_CARD_TOAST,
  UPDATE_ITEM_IN_CART,
  DELETE_ITEM,
  CLEAR_CART,
  FILTER_ITEMS,
  CLEAR_FILTER,
  CALCULATE_TOTAL,
  AFTER_SELL,
  AFTER_THANKS,
} from "../actions/types";
const initialState = {
  cart: [],
  cartToast: {
    html: null,
    displayLength: null,
  },
  cartToastUpdate: {
    html: null,
    displayLength: null,
  },
  filtered: null,
  total: 0,
  bought: false,
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

    case UPDATE_ITEM_IN_CART:
      const item = state.cart.find((item) => item.id === payload.id);
     
      item.amount = payload.amount;
      return {
        ...state,
        cart: [...state.cart],
        cartToastUpdate: {
          html: `You changed amount (${payload.amount}) of ${payload.shortName} in cart!`,
          displayLength: 4000,
        },
      };
    case DELETE_ITEM:
     
      return {
        ...state,
        cart: state.cart.filter((item) => item.id !== payload.id),
      };
    case CLEAR_CART:
      return {
        ...state,
        cart: [],
        cartToastUpdate: {
          html: `Cart is empty right now!`,
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
        cartToastUpdate: {
          html: null,
          displayLength: null,
        },
      };
    case FILTER_ITEMS:
      return {
        ...state,
        filtered: state.cart.filter((item) => {
          const regex = new RegExp(`${action.payload}`, "gi");
          return item.shortName.match(regex);
        }),
      };
    case CLEAR_FILTER:
      return {
        ...state,
        filtered: null,
      };
    case CALCULATE_TOTAL:
      let prices = [];
      let total = 0;
      if (state.cart.length > 0) {
        state.cart.forEach((item) => prices.push(item.price * item.amount));
        total = prices.reduce(function (
          previousValue,
          currentValue,
          index,
          array
        ) {
          return previousValue + currentValue;
        });
      }

      return {
        ...state,
        total: total,
      };
    case AFTER_SELL:
      return {
        ...state,
        bought: true,
      };
    case AFTER_THANKS:
      return {
        ...state,
        bought: false,
      };

    default:
      return state;
  }
}
