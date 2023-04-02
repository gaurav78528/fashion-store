import {
  applyMiddleware,
  combineReducers,
  compose,
  legacy_createStore,
} from "redux";

import thunk from "redux-thunk";
import { productsReducer } from "./products/reducer";
import { popularProductsReducer } from "./popularProducts/reducer";
import { featuredProductsReducer } from "./featuredCollections/reducer";
import { authReducer } from "./auth/reducer";
import { cartReducer } from "./cart/reducer";
import { wishlistReducer } from "./wishlist/reducer";
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  auth: authReducer,
  cart: cartReducer,
  products: productsReducer,
  popularProductsReducer,
  featuredProductsReducer,
  wishlist: wishlistReducer,
});
export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
