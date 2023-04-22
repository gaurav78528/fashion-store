import * as types from "./actionTypes";

let initialState = {
  cartItems: localStorage.getItem("cartItems")
    ? JSON.parse(localStorage.getItem("cartItems"))
    : [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case types.ADD_TO_CART:
      let itemIsInCart = state.cartItems.find(
        (item) => item.product === action.payload.product
      );

      if (itemIsInCart) {
        return {
          ...state,
          cartItems: state.cartItems.map((item) =>
            item.product === itemIsInCart.product ? action.payload : item
          ),
        };
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }

    case types.DELETE_CART_ITEM:
      const updatedCartItems = state.cartItems.filter(
        (item) => item.product !== action.payload
      );
      return {
        ...state,
        cartItems: updatedCartItems,
      };
    default:
      return state;
  }
};
