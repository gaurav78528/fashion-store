import * as types from "./actionTypes";
import axios from "axios";

export const getProducts =
  (currentPage = 1, price = [0, 15000], category, rating = 0) =>
  async (dispatch) => {
    dispatch({
      type: types.GET_PRODUCTS_LOADING,
    });

    try {
      let URL = `http://localhost:4500/products?page=${currentPage}&mrp[gte]=${price[0]}&mrp[lte]=${price[1]}&rating=${rating}`;

      if (category) {
        URL = `http://localhost:4500/products?page=${currentPage}&mrp[gte]=${price[0]}&mrp[lte]=${price[1]}&category=${category}&rating=${rating}`;
      }
      let { data } = await axios.get(URL);
      const { products, productsCount, resultPerPage } = data;
      dispatch({
        type: types.GET_PRODUCTS_SUCCESS,
        payload: { products, productsCount, resultPerPage },
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: types.GET_PRODUCTS_ERROR,
        payload: error,
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
