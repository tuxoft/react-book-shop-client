import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import Header from "../../containers/Header";


const HeaderRoutes = (props) =>

  props.isInitialized ? (
    <Switch>
        <Route
            exact
            path="/"
            render={(props) => <Redirect to="/home" {...props} />}
            {...props}
        />
        <Route
            exact
            path="/home"
            render={(props) => <Header {...props} />}
            {...props}
        />

    </Switch>
  ) : null;

const mapStateToProps = ({ app }) => ({
    isInitialized: true,
    isAuthenticated: true
});

export default withRouter(connect(mapStateToProps)(HeaderRoutes));
