import React from "react";
import { connect } from "react-redux";
import { Switch, Redirect, Route, withRouter } from "react-router-dom";
import MainScreen from "../../Screens/MainScreen/index";
import SearchScreen from "../../Screens/SearchScreen/index";
import CategoryScreen from "../../Screens/CategoryScreen/index";
import BookScreen from "../../Screens/BookScreen/index";
import CartScreen from "../../Screens/CartScreen/index";
import BookEditScreen from "../../Screens/BookEditScreen/index";



const Routes = (props) =>

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
            render={(props) => <MainScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/search"
            render={(props) => <SearchScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/search/:query"
            render={(props) => <SearchScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/book/:id"
            render={(props) => <Redirect to={"/book/"+props.match.params.id+"/description"} {...props} />}
            {...props}
        />
        <Route
            exact
            path="/book/:id/:block"
            render={(props) => <BookScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/cart"
            render={(props) => <Redirect to={"/cart/cart"} {...props} />}
            {...props}
        />
        <Route
            exact
            path="/cart/:block"
            render={(props) => <CartScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/categories/:categoryId"
            render={(props) => <CategoryScreen {...props} />}
            {...props}
        />

            <Route
                exact
                path="/book-edit/:id"
                render={(props) => <BookEditScreen {...props} />}
                {...props}
            />
    </Switch>

const mapStateToProps = ({ app }) => ({
    isInitialized: true,
    isAuthenticated: true
});

export default withRouter(connect(mapStateToProps)(Routes));
