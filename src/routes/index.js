import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";

const ProtectedRoute = ({ component: Component, render, ...restProps }) => {
  return (
    <Route
      {...restProps}
      render={(props) => {
        return restProps.isAuthenticated ? (
          Component ? (
            <Component {...props} />
          ) : (
            render(props)
          )
        ) : (
          <Redirect to="/login" />
        );
      }}
    />
  );
};

const Routes = (props) =>
  props.isInitialized ? (
    <Switch>
     <ProtectedRoute
        exact
        path="/sessions"
        render={(props) => <div className="App"/>}
        {...props}
      />
    </Switch>
  ) : null;

const mapStateToProps = ({ app }) => ({
  app: app
});

export default withRouter(connect(mapStateToProps)(Routes));
