import { createStore } from "redux";
import rootReducer from "./Reducers/index";
import { stores, items } from "./content";

const initialState = {
  stores,
  items
};

const store = createStore(rootReducer, initialState);

export default store;
