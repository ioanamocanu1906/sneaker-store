import React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import store from "./Store/store";
import Router from "./Components/AppComponents/Router";
import "./index.css";

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
console.log();
