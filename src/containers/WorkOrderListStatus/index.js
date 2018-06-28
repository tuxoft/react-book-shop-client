import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../store/app/actions";
import * as orderActions from "../../store/workOrder/actions";
import WorkOrderListStatusComponet from "../../components/WorkOrderListStatus";
import * as appSelectors from "../../store/app/selectors";
import * as contentSelectors from "../../store/content/selectors";
import * as orderSelectors from "../../store/workOrder/selectors";


class WorkOrderListStatus extends Component {

    componentDidMount() {

        if(!this.props.authenticated){
            this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.authenticated);
        }
        this.props.actions.order.fetchOrderList(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
          this.props.actions.order.fetchOrderList(nextProps.match.params.id);
        }
    }

    render() {

        return (
            <WorkOrderListStatusComponet
                {...this.state}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = ({app, buscket, workOrder, content}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    authenticated: appSelectors.isAuthenticated(app),
    isInitialized: appSelectors.isInitialized(app),
    orderList: orderSelectors.getOrderList(workOrder),
    userMenu: contentSelectors.getUserMenu(content)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch),
        order: bindActionCreators(orderActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkOrderListStatus);
