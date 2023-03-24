import {
  ADD_CART_ITEMS,
  DECREMENT_CART_ITEM,
  DELETE_CART_ITEMS,
  GET_CART_ITEMS,
  INCREMENT_CART_ITEM,
} from "./actionTypes";

export const addItemToCart = (item) => {
  return {
    type: ADD_CART_ITEMS,
    payload: { ...item, qty: 1 },
  };
};
export const incrementCartItem = (id) => {
  return {
    type: INCREMENT_CART_ITEM,
    payload: id,
  };
};
export const decrementCartItem = (id) => {
  return {
    type: DECREMENT_CART_ITEM,
    payload: id,
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
