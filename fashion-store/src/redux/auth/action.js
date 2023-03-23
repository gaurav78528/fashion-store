import axios from "axios";
import { toastProps } from "../../constants/constants";

import * as types from "./actionTypes";

export const registerUser = (userData, toast, navigate) => async (dispatch) => {
  console.log({ toast, userData });
  try {
    dispatch({ type: types.REGISTER_REQUEST });
    const { data } = await axios.post(
      "http://localhost:4500/users/register",
      userData
    );
    console.log(data);
    dispatch({
      type: types.REGISTER_SUCCESS,
      payload: data.newUser,
    });
    toast({
      ...toastProps,
      title: "Success",
      description: data.message,
      status: "success",
    });

    navigate("/login");
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

export const loginUser = (userData, toast, navigate) => async (dispatch) => {
  try {
    dispatch({ type: types.LOGIN_REQUEST });
    const { data } = await axios.post(
      "http://localhost:4500/users/login",
      userData
    );
    console.log(data);
    dispatch({
      type: types.LOGIN_SUCCESS,
      payload: { user: data.user, token: data.token },
    });
    localStorage.setItem("token", data.token);
    localStorage.setItem("username", data.user.firstName);
    toast({
      ...toastProps,
      title: "Success",
      description: data.message,
      status: "success",
    });
    navigate("/");
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
