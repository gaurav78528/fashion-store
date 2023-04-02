import * as types from "./actionTypes";
import axios from "axios";

export const getProducts = (params) => async (dispatch) => {
  // dispatch(getProductsLoading());
  dispatch({
    type: types.GET_PRODUCTS_LOADING,
  });

  try {
    let res = await axios.get("http://localhost:4500/products", params);
    // console.log(res);
    dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: types.GET_PRODUCTS_ERROR,
    });
  }
};


