import * as types from "./actionTypes";
const initalState = {
  products: [],
  isLoading: false,
  isError: false,
};

export const productsReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_LOADING:
      return { ...state, isLoading: true };
    case types.GET_PRODUCTS_SUCCESS:
      return { ...state, isLoading: false, products: payload };
    case types.GET_PRODUCTS_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
