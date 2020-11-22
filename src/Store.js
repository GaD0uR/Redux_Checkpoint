import { createStore, applyMiddleware } from "redux";
import reducer from "./Reducer";
import logger from "./Logger";

export const store = createStore(
  reducer,
  applyMiddleware(logger),
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);
