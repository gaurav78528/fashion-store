import axios from "axios";
import { toastProps } from "../../constants/constants";
import * as types from "./actionTypes";

axios.defaults.withCredentials = true;

// UPDATE PASSWORD

export const updatePassword = (toast, password) => async (dispatch) => {
  try {
    dispatch({ type: types.UPDATE_PASSWORD_REQUEST });
    const { data } = await axios.put(
      "http://localhost:4500/users/user/password/update",
      password
     
    );
    console.log(data);
    dispatch({
      type: types.UPDATE_PASSWORD_SUCCESS,
      payload: data.success,
    });

    toast({
      ...toastProps,
      title: "Success",
      description: "Password Updated.",
      status: "success",
    });
    // navigate("/");
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.UPDATE_PASSWORD_ERROR,
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
