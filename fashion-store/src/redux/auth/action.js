import axios from "axios";
import { toastProps } from "../../constants/constants";

import * as types from "./actionTypes";

export const registerUser = (userData, toast) => async (dispatch) => {
  console.log({ toast, userData });
  try {
    dispatch({ type: types.REGISTER_REQUEST });
    const { data } = await axios.post(
      "http://localhost:4500/users/register",
      userData,
      {
        withCredentials: true,
        credentials: "include",
      }
    );
    console.log(data);
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: data.user,
    });
    toast({
      ...toastProps,
      title: "Success",
      description: data.message,
      status: "success",
    });

    // navigate("/login");
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.REGISTER_ERROR,
      payload: error.response.data.message,
    });
    toast({
      ...toastProps,
      title: "Error",
      description: error.response.data.message || "Something went wrong!",
      status: "error",
    });
  }
};

export const loginUser = (userData, toast) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });

    const config = {
      headers: {
        "Content-Type": "application/json",
      },
      withCredentials: true,
      credentials: "include",
    };
    const { data } = await axios.post(
      "http://localhost:4500/users/login",
      userData,
      config
    );
    console.log("login", data);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: data.user,
    });

    toast({
      ...toastProps,
      title: "Success",
      description: data.message,
      status: "success",
    });
    // navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.LOGIN_ERROR,
      payload: error.response.data.message,
    });
    toast({
      ...toastProps,
      title: "Error",
      description: error.response.data.message || "Something went wrong!",
      status: "error",
    });
  }
};
export const logoutUser = (toast) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGOUT_REQUEST });
    const { data } = await axios.get("http://localhost:4500/users/logout", {
      withCredentials: true,
      credentials: "include",
    });
    console.log(data);
    dispatch({
      type: types.LOGOUT_SUCCESS,
    });

    toast({
      ...toastProps,
      title: "Success",
      description: data.message,
      status: "success",
    });
    // navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.LOGOUT_ERROR,
      payload: error.response.data.message,
    });
    toast({
      ...toastProps,
      title: "Error",
      description: error.response.data.message || "Something went wrong!",
      status: "error",
    });
  }
};
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
