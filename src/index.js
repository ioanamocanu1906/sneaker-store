import React from "react";
import { render } from "react-dom";
import "./index.css";
import Router from "./Components/Router";
import { Provider } from "react-redux";
import store from "./store";
import "./App.css";

render(
  <Provider store={store}>
    <Router />
  </Provider>,
  document.getElementById("root")
);
console.log();
