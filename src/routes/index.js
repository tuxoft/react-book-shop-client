import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import MainPage from "../components/MainPage/index";

const Routes = (props) =>
  props.isInitialized ? (
    <Switch>
        <Route exact path="/" component={MainPage}/>
    </Switch>
  ) : null;

const mapStateToProps = ({ app }) => ({
    isInitialized: true,
    isAuthenticated: true
});

export default withRouter(connect(mapStateToProps)(Routes));
