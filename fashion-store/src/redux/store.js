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
import { cartReducer } from "./cart/reducer";
import { wishlistReducer } from "./wishlist/reducer";
import { passwordReducer } from "./profile/reducer";
// import { updatePassword } from './profile/action';
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  auth: authReducer,
  updatePassword: passwordReducer,
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
