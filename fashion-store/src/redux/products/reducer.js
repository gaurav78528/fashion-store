import * as types from "./actionTypes";
const productsInitalState = {
  products: [],
  isLoading: false,
  error: "",
  productsCount: 0,
  resultPerPage: 0,
};

export const productsReducer = (state = productsInitalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_PRODUCTS_LOADING:
      return { ...state, isLoading: true };
    case types.GET_PRODUCTS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        products: payload.products,
        productsCount: payload.productsCount,
        resultPerPage: payload.resultPerPage,
      };
    case types.GET_PRODUCTS_ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

const singleProductInitalState = {
  product: {},
  isLoading: false,
  error: "",
};
export const singleProductReducer = (
  state = singleProductInitalState,
  action
) => {
  const { type, payload } = action;
  switch (type) {
    case types.GET_SINGLE_PRODUCT_LOADING:
      return { ...state, isLoading: true };
    case types.GET_SINGLE_PRODUCT_SUCCESS:
      return { ...state, isLoading: false, product: payload };
    case types.GET_SINGLE_PRODUCT_ERROR:
      return { ...state, isLoading: false, error: payload };
    default:
      return state;
  }
};

export const newReviewReducer = (state = {}, action) => {
  switch (action.type) {
    case types.NEW_REVIEW_REQUEST:
      return {
        ...state,
        isLoading: true,
      };
    case types.NEW_REVIEW_SUCCESS:
      return {
        isLoading: false,
        success: action.payload,
      };
    case types.NEW_REVIEW_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    case types.NEW_REVIEW_RESET:
      return {
        ...state,
        success: false,
      };

    default:
      return state;
  }
};
