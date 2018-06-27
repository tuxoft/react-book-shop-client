import React from "react";
import {connect} from "react-redux";
import {Switch, Redirect, Route, withRouter} from "react-router-dom";
import MainScreen from "../../Screens/MainScreen/index";
import SearchScreen from "../../Screens/SearchScreen/index";
import CategoryScreen from "../../Screens/CategoryScreen/index";
import BookScreen from "../../Screens/BookScreen/index";
import CartScreen from "../../Screens/CartScreen/index";
import ObjectEditScreen from "../../Screens/ObjectEditScreen/index";
import ObjectEditListScreen from "../../Screens/ObjectEditListScreen/index";
import OrderScreen from "../../Screens/OrderScreen/index";
import OrderStatusScreen from "../../Screens/OrderStatusScreen/index";
import MyProfileScreen from "../../Screens/MyProfileScreen/index";
import EditMyProfileScreen from "../../Screens/EditMyProfileScreen/index";
import OrderListStatusScreen from "../../Screens/OrderListStatusScreen/index";
import AdminScreen from "../../Screens/AdminScreen/index";
import NotFound from "../../Screens/NotFoundScreen/index";

const Routes = (props) => {
    console.log("rerender route");
    return <Switch>
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
            render={(props) => <Redirect to={"/book/" + props.match.params.id + "/description"} {...props} />}
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
            path="/admin"
            render={(props) => <AdminScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/admin/change/item/:object/:id"
            render={(props) => <ObjectEditScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/admin/change/list/:object"
            render={(props) => <ObjectEditListScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/order-list/:id"
            render={(props) => <OrderListStatusScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/order-list"
            render={(props) => <Redirect to={"/order-list/all"} {...props} />}
            {...props}
        />

        <Route
            exact
            path="/order/:id"
            render={(props) => <OrderStatusScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/order"
            render={(props) => <OrderScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/profile"
            render={(props) => <MyProfileScreen {...props} />}
            {...props}
        />
        <Route
            exact
            path="/edit-profile"
            render={(props) => <EditMyProfileScreen {...props} />}
            {...props}
        />
        <Route component={NotFound}/>
    </Switch>
}
const mapStateToProps = ({app}) => ({
    isInitialized: true,
    isAuthenticated: true
});

export default withRouter(connect(mapStateToProps)(Routes));
