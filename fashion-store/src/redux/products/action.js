import * as types from "./actionTypes";
import axios from "axios";

export const getProducts = () => async (dispatch) => {
  // dispatch(getProductsLoading());
  dispatch({
    type: types.GET_PRODUCTS_LOADING,
  });

  try {
    let { data } = await axios.get("http://localhost:4500/products");
    // console.log(data);
    dispatch({
      type: types.GET_PRODUCTS_SUCCESS,
      payload: data.products,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.GET_PRODUCTS_ERROR,
      payload: error.response.data.message,
    });
  }
};
export const getSingleProduct = (id) => async (dispatch) => {
  dispatch({
    type: types.GET_SINGLE_PRODUCT_LOADING,
  });

  try {
    let { data } = await axios.get(`http://localhost:4500/products/${id}`);

    dispatch({
      type: types.GET_SINGLE_PRODUCT_SUCCESS,
      payload: data.product,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.GET_SINGLE_PRODUCT_ERROR,
      payload: error.response.data.message,
    });
  }
};
