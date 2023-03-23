import {
  ADD_CART_ITEMS,
  DELETE_CART_ITEMS,
  GET_CART_ITEMS,
} from "./actionTypes";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEMS:
      return {
        ...state,
        cartItems: [...state.cartItems, action.payload],
      };
    case GET_CART_ITEMS:
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case DELETE_CART_ITEMS:
      const updatedCartItems = state.cartItems.filter(
        (item) => item._id !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };

    default:
      return state;
  }
};
