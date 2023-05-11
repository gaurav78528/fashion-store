import axios from "axios";
import { toastProps } from "../../constants/constants";
import * as types from "./actionTypes";

axios.defaults.withCredentials = true;

// REGISTER ACTION

export const registerUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: types.REGISTER_REQUEST });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };

    const { data } = await axios.post(
      "http://localhost:4500/users/register",
      userData,
      config
    );
    console.log(data);

    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: data,
    });
    // toast({
    //   ...toastProps,
    //   title: "Success",
    //   description: data.message,
    //   status: "success",
    // });

    // navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.REGISTER_ERROR,
      payload: error.response.data.message || "Something went wrong!",
    });
    // toast({
    //   ...toastProps,
    //   title: "Error",
    //   description: error.response.data.message || "Something went wrong!",
    //   status: "error",
    // });
  }
};

// LOGIN ACTION

export const loginUser = (userData) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      "http://localhost:4500/users/login",
      userData,
      config
    );
    // console.log(data);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.LOGIN_ERROR,
      payload: error.response.data.message,
    });
    // toast({
    //   ...toastProps,
    //   title: "Error",
    //   description: error.response.data.message || "Something went wrong!",
    //   status: "error",
    // });
  }
};

// LOGOUT ACTION
export const logoutUser = (toast) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGOUT_REQUEST });
    const { data } = await axios.get(
      "http://localhost:4500/users/logout"
      // {
      //   withCredentials: true,
      //   credentials: "include",
      // }
    );
    // console.log(data);
    dispatch({
      type: types.LOGOUT_SUCCESS,
      payload: data,
    });

    // toast({
    //   ...toastProps,
    //   title: "Success",
    //   description: data.message,
    //   status: "success",
    // });
    // navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.LOGOUT_ERROR,
      payload: error.response.data.message || "Something went wrong!",
    });
    // toast({
    //   ...toastProps,
    //   title: "Error",
    //   description: error.response.data.message || "Something went wrong!",
    //   status: "error",
    // });
  }
};

// LOAD USER ACTION
export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: types.LOAD_USER_REQUEST });
    const { data } = await axios.get("http://localhost:4500/users/user");
    // console.log(data);
    dispatch({
      type: types.LOAD_USER_SUCCESS,
      payload: data.user,
    });

    // navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.LOAD_USER_ERROR,
      payload: error.response.data.message,
    });
  }
};
