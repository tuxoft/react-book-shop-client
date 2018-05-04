import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import HomeContent from "../../containers/HomeContent";


const ContentRoutes = (props) =>

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
            render={(props) => <HomeContent {...props} />}
            {...props}
        />

    </Switch>
  ) : null;

const mapStateToProps = ({ app }) => ({
    isInitialized: true,
    isAuthenticated: true
});

export default withRouter(connect(mapStateToProps)(ContentRoutes));
