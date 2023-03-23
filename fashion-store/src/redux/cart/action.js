import {
  ADD_CART_ITEMS,
  DELETE_CART_ITEMS,
  GET_CART_ITEMS,
} from "./actionTypes";

export const addItemToCart = (item) => {
  return {
    type: ADD_CART_ITEMS,
    payload: item,
  };
};
export const getCartItems = () => {
  return {
    type: GET_CART_ITEMS,
  };
};
export const deleteCartItem = (id) => {
  return {
    type: DELETE_CART_ITEMS,
    payload: id,
  };
};
