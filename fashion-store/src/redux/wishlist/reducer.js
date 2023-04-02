import * as types from "./actionTypes";
const initalState = {
  wishlistItems: [],
  isLoading: false,
  isError: false,
};

export const wishlistReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_WISHLIST_LOADING:
      return { ...state, isLoading: true };
    case types.GET_WISHLIST_SUCCESS:
      return { ...state, isLoading: false, wishlistItems: payload };
    case types.GET_WISHLIST_ERROR:
      return { ...state, isLoading: false, isError: true };
    case types.ADD_TO_WISHLIST_LOADING:
      return { ...state, isLoading: true };
    case types.ADD_TO_WISHLIST_SUCCESS:
      return { ...state, isLoading: false };
    case types.ADD_TO_WISHLIST_ERROR:
      return { ...state, isLoading: false, isError: true };
    case types.REMOVE_FROM_WISHLIST_LOADING:
      return { ...state, isLoading: true };
    case types.REMOVE_FROM_WISHLIST_SUCCESS:
      return { ...state, isLoading: false };
    case types.REMOVE_FROM_WISHLIST_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
