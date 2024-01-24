import { combineReducers } from "redux";
import { globalReducer } from "./globalReducers";
import { productReducer } from "./productReducers";
import { shoppingCartReducer } from "./shoppingCartReducer";
import { storeReducer } from "./storeReducer";
import { userReducer } from "./userReducer";

export const reducers = combineReducers({
  global: globalReducer,
  product: productReducer,
  cart: shoppingCartReducer,
  store: storeReducer,
  user: userReducer,
});
