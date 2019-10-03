import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";

import storePicker from "./storePicker";
import itemsPicker from "./itemsPicker";

const rootReducer = combineReducers({
  items: itemsPicker,
  stores: storePicker,
  routing: routerReducer
});

export default rootReducer;
