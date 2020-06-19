import React from "react";
import { Switch, Route } from "react-router-dom";
import { Home } from "../containers";
import { Login, Signup } from "../containers";

const RoutesView = () => {
  return (
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/login" component={Login} />
      <Route exact path="/signup" component={Signup} />
    </Switch>
  );
};

export default RoutesView;
