import * as types from "./actionTypes";

export const newOrderReducer = (state = {}, action) => {
  switch (action.type) {
    case types.CREATE_ORDER_REQUEST:
      return {
        ...state,
        isLoading: true,
      };

    case types.CREATE_ORDER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        order: action.payload,
      };

    case types.CREATE_ORDER_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.payload,
      };
    default:
      return state;
  }
};
