import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../store/app/actions";
import * as orderActions from "../../store/order/actions";
import OrderComponet from "../../components/Order";
import * as appSelectors from "../../store/app/selectors";
import * as cartSelectors from "../../store/bucket/selectors";
import * as orderSelectors from "../../store/order/selectors";


class Order extends Component {

    constructor(props) {
        super(props);
        this.state={
            step: 1,
        }
    }

    componentDidMount() {
        if(!this.props.authenticated){
            this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.authenticated)
        }
        document.addEventListener("mapSelectBalloon", this.mapSelectBalloon);
    }

    mapSelectBalloon = (a) =>{
        console.log("ok!!!", a.target.id);
        this.nextStep();
        this.setObjectAttr(a.target.id, "selfTakeOrgId");
    }

    setObjectAttr = (val, field)=> {
        let order = {...this.props.order};
        order[field]=val;
        this.props.actions.order.setOrder(order);
    };

    setObjectAddr = (val, field)=> {
        let orderAddr = this.state.order.addr;
        orderAddr[field]=val;
        this.setObjectAttr(orderAddr, "addr");
    };

    nextStep = () => {
        this.setState({
            step: this.state.step+1
        });
    };

    setStep = (val) => {
        this.setState({
            step: val
        });
    };

    makeOrder = () => {
        console.log("make order", this.props.order);
        this.props.actions.order.makeOrder(this.props.order);
    };
    selectCity = (city) => {
        console.log("make city", city);
        this.props.actions.order.selectCity(city);
    };

    render() {
        console.log("order", this.props.order);
        console.log("selectCity", this.props.selectCity);
        return (
            <OrderComponet
                {...this.state}
                {...this.props}
                setObjectAttr={this.setObjectAttr}
                setObjectAddr={this.setObjectAddr}
                nextStep = {this.nextStep}
                makeOrder = {this.makeOrder}
                onCitySelect = {this.selectCity}
                setStep={this.setStep}
            />
        );
    }
}

const mapStateToProps = ({app, buscket, order}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    authenticated: appSelectors.isAuthenticated(app),
    cart: cartSelectors.getCart(buscket),
    boxItemsCount: cartSelectors.getCartItemsCount(buscket),
    cities: orderSelectors.getCities(order),
    selectCity: orderSelectors.getSelectCity(order),
    placemarks: orderSelectors.getPickupPoint(order),
    order: orderSelectors.getOrder(order),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch),
        order: bindActionCreators(orderActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
