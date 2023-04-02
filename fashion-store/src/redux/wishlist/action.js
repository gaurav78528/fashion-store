import axios from "axios";
import {
  ADD_TO_WISHLIST_LOADING,
  GET_WISHLIST_ERROR,
  GET_WISHLIST_LOADING,
  GET_WISHLIST_SUCCESS,
  REMOVE_FROM_WISHLIST_ERROR,
  REMOVE_FROM_WISHLIST_LOADING,
  REMOVE_FROM_WISHLIST_SUCCESS,
} from "./actionTypes";
import { toastProps } from "../../constants/constants";

export const getWishlistItems = () => async (dispatch) => {
  dispatch({
    type: GET_WISHLIST_LOADING,
  });

  try {
    let res = await axios.get("http://localhost:4500/wishlist/");
    // let data = await res.json();
    dispatch({
      type: GET_WISHLIST_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_WISHLIST_ERROR,
    });
  }
};
export const addToWishlist = (payload, toast) => async (dispatch) => {
  dispatch({
    type: ADD_TO_WISHLIST_LOADING,
  });
  try {
    const res = await axios.post(`http://localhost:4500/wishlist/add`, payload);

    toast({
      ...toastProps,
      title: "Success",
      description: res.data.message,
      status: "success",
    });
  } catch (error) {
    console.log(error);
    toast({
      ...toastProps,
      title: "Error",
      description: error.message,
      status: "error",
    });
  }
};

export const removeFromWishlist = (id, toast) => async (dispatch) => {
  dispatch({
    type: REMOVE_FROM_WISHLIST_LOADING,
  });
  try {
    // console.log(id);
    const res = await axios.delete(
      `http://localhost:4500/wishlist/delete/${id}`
    );
    dispatch({
      type: REMOVE_FROM_WISHLIST_SUCCESS,
    });

    console.log(res);
    toast({
      ...toastProps,
      title: "Success",
      description: res.data.message,
      status: "success",
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: REMOVE_FROM_WISHLIST_ERROR,
    });
    toast({
      ...toastProps,
      title: "Error",
      description: error.message,
      status: "error",
    });
  }
};
