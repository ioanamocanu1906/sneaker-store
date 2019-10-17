import items from "../Components/CurrentStoreComponents/itemsReducer";
import stores from "../Components/CurrentStoreComponents/storesReducer";
import { combineReducers } from "redux";

const rootReducer = combineReducers({
  stores,
  items
});

export default rootReducer;
