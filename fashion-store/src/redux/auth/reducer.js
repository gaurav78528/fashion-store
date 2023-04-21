import * as types from "./actionTypes";
// const initalState = {
//   isLoading: false,
//   isError: false,
//   // token: "",
//   isAuthenticated: false,
//   user: null,
// };

// export const authReducer = (state = initalState, action) => {
//   const { type, payload } = action;
//   switch (type) {
//     case types.REGISTER_REQUEST:
//     case types.LOGIN_REQUEST:
//     case types.LOGOUT_REQUEST:
//     case types.LOAD_USER_REQUEST:
//       return { ...state, isLoading: true };

//     case types.LOGIN_SUCCESS:
//     case types.REGISTER_SUCCESS:
//     case types.LOAD_USER_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         isAuthenticated: true,
//         user: payload,
//         isError:false
//       };

//     case types.LOGOUT_SUCCESS:
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//         isAuthenticated: false,
//         user: false,
//       };
//     case types.REGISTER_ERROR:
//     case types.LOGIN_ERROR:
//     case types.LOGOUT_ERROR:
//       return {
//         ...state,
//         isLoading: false,
//         isError: true,
//         isAuthenticated: false,
//         user: null,
//       };

//       case types.LOAD_USER_ERROR:
//         return {
//           isLoading: false,
//           isError: true,
//           isAuthenticated: false,
//           user: null,
//         }
//     // case types.LOGIN_REQUEST:
//     //   return { ...state, isLoading: true };
//     // case types.LOGIN_SUCCESS:
//     //   return {
//     //     ...state,
//     //     isLoading: false,
//     //     token: payload.token,
//     //     user: payload.user,
//     //   };
//     // case types.LOGIN_ERROR:
//     //   return { ...state, isLoading: false, isError: true };
//     default:
//       return state;
//   }
// };

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
