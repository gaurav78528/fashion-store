import * as types from "./actionTypes";

export const authReducer = (state = { user: {} }, action) => {
  switch (action.type) {
    case types.REGISTER_REQUEST:
    case types.LOGIN_REQUEST:
    case types.LOAD_USER_REQUEST:
    case types.LOGOUT_REQUEST:
      return {
        isLoading: true,
        isAuthenticated: false,
      };
    case types.REGISTER_SUCCESS:
    case types.LOGIN_SUCCESS:
    case types.LOAD_USER_SUCCESS:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: true,
        user: action.payload,
      };

    case types.LOGOUT_SUCCESS:
      return {
        isLoading: false,
        isAuthenticated: false,
        user: null,
        isError: false,
      };
    case types.REGISTER_ERROR:
    case types.LOGIN_ERROR:
    case types.LOGOUT_ERROR:
      return {
        ...state,
        isLoading: false,
        isAuthenticated: false,
        user: null,
        isError: true,
      };

    case types.LOAD_USER_ERROR:
      return {
        isLoading: false,
        isAuthenticated: false,
        user: null,
        isError: true,
        error: action.payload,
      };
    default:
      return state;
  }
};
