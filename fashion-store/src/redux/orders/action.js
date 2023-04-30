import axios from "axios";
import * as types from "./actionTypes";

axios.defaults.withCredentials = true;

export const createOrder = (order) => async (dispatch) => {
  console.log(order);
  try {
    dispatch({
      type: types.CREATE_ORDER_REQUEST,
    });
    const config = {
      headers: {
        "Content-Type": "application/json",
      },
    };
    const { data } = await axios.post(
      `http://localhost:4500/orders/new`,
      order,
      config
    );

    console.log(data);

    dispatch({
      type: types.CREATE_ORDER_SUCCESS,
      payload: data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.CREATE_ORDER_ERROR,
      payload: error?.response?.message || "Something Went Wrong.",
    });
  }
};

// GET MY ORDERS
export const myOrders = () => async (dispatch) => {
  try {
    dispatch({
      type: types.MY_ORDERS_REQUEST,
    });

    const { data } = await axios.get(`http://localhost:4500/orders/myorders`);

    console.log(data);

    dispatch({
      type: types.MY_ORDERS_SUCCESS,
      payload: data.myOrders,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: types.MY_ORDERS_ERROR,
      payload: error?.response?.message || "Something Went Wrong.",
    });
  }
};
