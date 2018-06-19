import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../store/app/actions";
import * as orderActions from "../../store/order/actions";
import OrderStatusComponet from "../../components/OrderStatus";
import * as appSelectors from "../../store/app/selectors";
import * as contentSelectors from "../../store/content/selectors";
import * as orderSelectors from "../../store/order/selectors";


class OrderStatus extends Component {

    componentDidMount() {
        if(!this.props.authenticated){
            this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.authenticated);
        }
        this.props.actions.order.fetchOrder(this.props.match.params.id);
    }

    render() {
        return (
            <OrderStatusComponet
                {...this.state}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = ({app, buscket, order, content}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    authenticated: appSelectors.isAuthenticated(app),
    isInitialized: appSelectors.isInitialized(app),
    order: orderSelectors.getOrder(order),
    userMenu: contentSelectors.getUserMenu(content)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch),
        order: bindActionCreators(orderActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(OrderStatus);
