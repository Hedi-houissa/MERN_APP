import React from "react";
import { Redirect, Route } from "react-router";

function PrivateRoute({ component: Component, ...rest }) {
  const token = localStorage.getItem("token");
  if (!token) {
    return <Redirect to="/login" />;
  }
  return <Route component={Component} {...rest} />;
}

export default PrivateRoute;
