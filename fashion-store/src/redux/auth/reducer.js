import * as types from "./actionTypes";
const initalState = {
  user: {},
  isLoading: false,
  isError: false,
  token: "",
};

export const authReducer = (state = initalState, action) => {
  const { type, payload } = action;
  switch (type) {
    case types.REGISTER_REQUEST:
      return { ...state, isLoading: true };
    case types.REGISTER_SUCCESS:
      return { ...state, isLoading: false, user: payload };
    case types.REGISTER_ERROR:
      return { ...state, isLoading: false, isError: true };
    case types.LOGIN_REQUEST:
      return { ...state, isLoading: true };
    case types.LOGIN_SUCCESS:
      console.log(payload);
      return {
        ...state,
        isLoading: false,
        token: payload.token,
        user: payload.user,
      };
    case types.LOGIN_ERROR:
      return { ...state, isLoading: false, isError: true };
    default:
      return state;
  }
};
