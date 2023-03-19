import * as types from "./actionTypes";
import axios from "axios";
const getFeaturedProductsLoading = () => {
  return {
    type: types.GET_FEATURED_PRODUCTS_LOADING,
  };
};
const getFeaturedProductsSuccess = (payload) => {
  return {
    type: types.GET_FEATURED_PRODUCTS_SUCCESS,
    payload,
  };
};
const getFeaturedProductsError = () => {
  return {
    type: types.GET_FEATURED_PRODUCTS_ERROR,
  };
};

const getFeaturedProducts = () => (dispatch) => {
  dispatch(getFeaturedProductsLoading());
  return axios
    .get("https://json-server-six-psi.vercel.app/featured-collection")
    .then((res) => {
      dispatch(getFeaturedProductsSuccess(res.data));
    })
    .catch((err) => {
      dispatch(getFeaturedProductsError());
    });
};

export { getFeaturedProducts };
