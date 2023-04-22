import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";
import { composeWithDevTools } from "redux-devtools-extension";

import thunk from "redux-thunk";
import { productsReducer, singleProductReducer } from "./products/reducer";
import { popularProductsReducer } from "./popularProducts/reducer";
import { featuredProductsReducer } from "./featuredCollections/reducer";
import { authReducer } from "./auth/reducer";
import { wishlistReducer } from "./wishlist/reducer";
import { updatePasswordReducer } from "./profile/reducer";
import { forgetPasswordReducer } from "./forgetPassword/reducer";
import { cartReducer } from "./cart/reducer";
// import { updatePassword } from './profile/action';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  auth: authReducer,
  updatePassword: updatePasswordReducer,
  forgetPassword: forgetPasswordReducer,
  cart: cartReducer,
  products: productsReducer,
  singleProduct: singleProductReducer,
  popularProductsReducer,
  featuredProductsReducer,
  wishlist: wishlistReducer,
});

export const store = legacy_createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(thunk))
);
