import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { reducers } from "./reducers";
import logger from "redux-logger";
import { thunk } from "redux-thunk";

const store = createStore(reducers, applyMiddleware(logger, thunk));

export { store };
