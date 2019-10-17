import { createStore } from "redux";
import rootReducer from "./rootReducer";
import stores from "../Data/stores";
import items from "../Data/items";

const initialState = {
  stores,
  items
};

const store = createStore(
  rootReducer,
  initialState,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
