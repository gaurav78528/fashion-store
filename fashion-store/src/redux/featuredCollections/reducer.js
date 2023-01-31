import * as types from "./actionTypes";
const initalState = {
  featuredProducts: [],
  isLoading: false,
  isError: false,
};

export const featuredProductsReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_FEATURED_PRODUCTS_LOADING:
      return { ...state, isLoading: true };
    case types.GET_FEATURED_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, featuredProducts: payload };
    case types.GET_FEATURED_PRODUCTS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
