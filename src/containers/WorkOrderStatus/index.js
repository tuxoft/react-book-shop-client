import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../store/app/actions";
import * as orderActions from "../../store/workOrder/actions";
import WorkOrderStatusComponet from "../../components/WorkOrderStatus";
import * as appSelectors from "../../store/app/selectors";
import * as contentSelectors from "../../store/content/selectors";
import * as orderSelectors from "../../store/workOrder/selectors";


class WorkOrderStatus extends Component {

    componentDidMount() {
        if(!this.props.authenticated){
            this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.authenticated);
        }
        this.props.actions.order.fetchOrder(this.props.match.params.id);
    }

    setWorkStatus = (orderStatus)=>{
        this.props.actions.order.setWorkStatus(this.props.match.params.id, orderStatus);
    };

    setOrderStatus = (orderStatus, note)=>{
        this.props.actions.order.setOrderStatus(this.props.match.params.id, orderStatus, note);
    };

    setOrderWorker = (workerId)=>{
        this.props.actions.order.setOrderWorker(this.props.match.params.id, workerId);
    };

    setOrderPay = (pay)=>{
        this.props.actions.order.setOrderPay(this.props.match.params.id, pay);
    };

    searchWorkers = (query)=>{
        this.props.actions.order.searchWorkers({query});
    };

    setObjAttr = (attr, val) => {
        this.props.actions.order.setOrder({
            ...this.props.order,
            [attr]: val,
        })
    };

    render() {
        return (
            <WorkOrderStatusComponet
                {...this.state}
                {...this.props}
                searchWorkers={this.searchWorkers}
                setOrderPay={this.setOrderPay}
                setOrderWorker={this.setOrderWorker}
                setOrderStatus={this.setOrderStatus}
                setWorkStatus={this.setWorkStatus}
                setObjAttr={this.setObjAttr}
            />
        );
    }
}

const mapStateToProps = ({app, buscket, workOrder, content}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    authenticated: appSelectors.isAuthenticated(app),
    isInitialized: appSelectors.isInitialized(app),
    order: orderSelectors.getOrder(workOrder),
    workers: orderSelectors.getWorkers(workOrder),
    userMenu: contentSelectors.getUserMenu(content)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch),
        order: bindActionCreators(orderActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(WorkOrderStatus);
