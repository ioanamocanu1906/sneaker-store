import { createStore } from "redux";
import rootReducer from "./Reducers/index";
import { stores, items } from "./content";

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
