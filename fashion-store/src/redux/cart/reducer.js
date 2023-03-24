import {
  ADD_CART_ITEMS,
  DECREMENT_CART_ITEM,
  DELETE_CART_ITEMS,
  GET_CART_ITEMS,
  INCREMENT_CART_ITEM,
} from "./actionTypes";

const initialState = {
  cartItems: [],
};

export const cartReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_CART_ITEMS:
      let itemIsInCart = state.cartItems.find(
        (item) => item._id === action.payload._id
      );
      // console.log(itemIsInCart);
      if (itemIsInCart) {
        itemIsInCart.qty += 1;
      } else {
        return {
          ...state,
          cartItems: [...state.cartItems, action.payload],
        };
      }
    case DECREMENT_CART_ITEM:
      const decrementItem = state.cartItems.find(
        (item) => item._id === action.payload
      );

      decrementItem.qty--;
      return {
        ...state,
        cartItems: state.cartItems,
      };
    case INCREMENT_CART_ITEM:
      const incrementItem = state.cartItems.find(
        (item) => item._id === action.payload
      );

      incrementItem.qty++;

      return {
        ...state,
        cartItems: state.cartItems,
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
