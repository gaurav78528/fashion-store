import * as types from "./actionTypes";
import axios from "axios";
const getProductsLoading = () => {
  return {
    type: types.GET_PRODUCTS_LOADING,
  };
};
const getProductsSuccess = (payload) => {
  return {
    type: types.GET_PRODUCTS_SUCCESS,
    payload,
  };
};
const getProductsError = () => {
  return {
    type: types.GET_PRODUCTS_ERROR,
  };
};

const getProducts = (params) => (dispatch) => {
  dispatch(getProductsLoading());
  return axios
    .get("http://localhost:4500/products", params)
    .then((res) => {
      dispatch(getProductsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getProductsError());
    });
};

export { getProducts };
