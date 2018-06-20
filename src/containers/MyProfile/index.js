import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../store/app/actions";
import * as orderActions from "../../store/order/actions";
import MyProfileComponet from "../../components/MyProfile";
import * as appSelectors from "../../store/app/selectors";
import * as contentSelectors from "../../store/content/selectors";
import * as orderSelectors from "../../store/order/selectors";
import * as profileSelectors from "../../store/profile/selectors";


class MyProfile extends Component {

    componentDidMount() {
        if(!this.props.authenticated){
            this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.authenticated);
        }
        this.props.actions.order.fetchOrderList("active");
    }

    render() {
        return (
            <MyProfileComponet
                {...this.state}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = ({app, buscket, order, content, profile}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    authenticated: appSelectors.isAuthenticated(app),
    isInitialized: appSelectors.isInitialized(app),
    profile: profileSelectors.getProfile(profile),
    orderList: orderSelectors.getOrders(order),
    userMenu: contentSelectors.getUserMenu(content)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch),
        order: bindActionCreators(orderActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfile);
