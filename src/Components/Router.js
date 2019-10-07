import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import CurrentStore from "./CurrentStore";
import App from "./App";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/:storeId" component={CurrentStore} />
    </Switch>
  </BrowserRouter>
);

export default Router;
