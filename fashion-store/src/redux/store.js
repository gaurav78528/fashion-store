import { applyMiddleware, compose, legacy_createStore } from "redux";
import thunk from "redux-thunk";
import { productsReducer } from "./products/reducer";
const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = legacy_createStore(
  productsReducer,
  composeEnhancers(applyMiddleware(thunk))
);

export { store };
