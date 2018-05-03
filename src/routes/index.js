import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import MainScreen from "../Screens/MainScreen/index";
import SearchScreen from "../Screens/SearchScreen/index";

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
            path="/"
            render={(props) => <Redirect to="/home" {...props} />}
            {...props}
        />
        <ProtectedRoute
            exact
            path="/home"
            render={(props) => <MainScreen {...props} />}
            {...props}
        />
        <ProtectedRoute
            exact
            path="/search"
            render={(props) => <SearchScreen {...props} />}
            {...props}
        />
        <ProtectedRoute
            exact
            path="/search/:query"
            render={(props) => <SearchScreen {...props} />}
            {...props}
        />
    </Switch>
  ) : null;

const mapStateToProps = ({ app }) => ({
    isInitialized: true,
    isAuthenticated: true
});

export default withRouter(connect(mapStateToProps)(Routes));
