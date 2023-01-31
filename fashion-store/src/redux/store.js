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
// const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const rootReducer = combineReducers({
  productsReducer,
  popularProductsReducer,
  featuredProductsReducer,
});
const store = legacy_createStore(rootReducer, applyMiddleware(thunk));

export { store };

// export const store = legacy_createStore(rootReducer, applyMiddleware(thunk));
