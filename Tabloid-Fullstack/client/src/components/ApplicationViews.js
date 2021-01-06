import React from "react";
import { Switch, Route } from "react-router-dom";
import Login from "../pages/Login";

const ApplicationViews = () => {
  return (
    <Switch>
      <Route path="/" exact>
        <p>Home</p>
      </Route>
      <Route path="/login">
        <Login />
      </Route>
      <Route path="/register">
        <p> Register</p>
      </Route>
    </Switch>
  );
};

export default ApplicationViews;
