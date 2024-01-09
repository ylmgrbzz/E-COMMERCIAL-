import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import rootReducer from "./reducers"; // Eğer reducers dosyanız varsa

const store = createStore(
  rootReducer, // Kullanacağınız kök reducer
  applyMiddleware(thunk)
);

export default store;
