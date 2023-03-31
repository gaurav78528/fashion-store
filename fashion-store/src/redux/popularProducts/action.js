import * as types from "./actionTypes";
import axios from "axios";
const getPopularProductsLoading = () => {
  return {
    type: types.GET_POPULAR_PRODUCTS_LOADING,
  };
};
const getPopularProductsSuccess = (payload) => {
  return {
    type: types.GET_POPULAR_PRODUCTS_SUCCESS,
    payload,
  };
};
const getPopularProductsError = () => {
  return {
    type: types.GET_POPULAR_PRODUCTS_ERROR,
  };
};

const getPopularProducts = () => (dispatch) => {
  dispatch(getPopularProductsLoading());
  return axios
    .get("http://localhost:4500/products")
    .then((res) => {
      dispatch(getPopularProductsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getPopularProductsError());
    });
};

export { getPopularProducts };
