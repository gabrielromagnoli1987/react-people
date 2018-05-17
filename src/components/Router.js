import React from "react";
import { BrowserRouter, Route, Switch } from "react-router-dom";
import App from "../App";
import Person from "./Person";
import People from "./People";
import NotFound from "./NotFound";

const Router = () => (
  <BrowserRouter>
    <Switch>
      <Route exact path="/" component={App} />
      <Route path="/people" component={People} />
      <Route path="/person/:personId" component={Person} />
      <Route component={NotFound} />
    </Switch>
  </BrowserRouter>
);

export default Router;
