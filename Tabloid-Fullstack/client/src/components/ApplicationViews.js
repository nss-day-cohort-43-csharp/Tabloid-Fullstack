import React from "react";
import { Switch, Route } from "react-router-dom";

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <p>Home</p>
      </Route>
      <Route path="/login">
        <p>Login</p>
      </Route>
      <Route path="/register">
        <p> Register</p>
      </Route>
    </Switch>
  );
};

export default ApplicationViews;
