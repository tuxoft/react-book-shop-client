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
            doValid: false
        }
    }

    componentDidMount() {
        if(!this.props.authenticated){
            this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.authenticated)
        }
        this.props.actions.order.initOrder();
        this.props.actions.order.getPickupCities();
        document.addEventListener("mapSelectBalloon", this.mapSelectBalloon);
    }

    mapSelectBalloon = (a) =>{
        console.log("ok!!!", a.target.id);
        this.setObjectAttr(a.target.id, "selfTakeOrgId");
        this.nextStep();
    };

    setObjectAttr = (val, field)=> {
        let order = {...this.props.order};
        order[field]=val;
        this.props.actions.order.setOrder(order);
    };

    setObjectMultiAttr = (arr)=> {
        let order = {...this.props.order};
        arr.map((obj, idx)=>{order[obj.field]=obj.val;});
        this.props.actions.order.setOrder(order);
    };

    setObjectAddr = (val, field)=> {
        let orderAddr = this.props.order.addr?this.props.order.addr:{};
        orderAddr[field]=val;
        this.setObjectAttr(orderAddr, "addr");
    };

    nextStep = () => {
        if(this.state.step===1){
            if(this.validateStep1(this.props.order)){
                this.setState({
                    doValid: true,
                });
                return;
            }
        }
        if(this.state.step===2){
            if(this.validateStep2(this.props.order)){
                this.setState({
                    doValid: true,
                });
                return;
            }
        }
        if(this.state.step===3){
            if(this.validateStep3(this.props.order)){
                this.setState({
                    doValid: true,
                });
                return;
            }
        }
        this.setState({
            step: this.state.step+1,
            doValid: false,
        });
    };

    setStep = (val) => {
        this.setState({
            step: val,
            doValid: false,
        });
    };

    validateStep1 = (order)=>{
        if(!this.validatorText(order.lastName))return true;
        if(!this.validatorText(order.firstName))return true;
        if(!this.validatorEmail(order.email))return true;
        if(!this.validatorNumber(order.phoneNumber))return true;
        if(!order.isTakeStatusEmail && !order.isTakeStatusSMS)return true;
        if(!order.isAge18)return true;
        return false;
    };

    validateStep2 = (order)=>{
        if(order.sendType === "selftake")return false;
        if(!this.validatorText(order.addr.city))return true;
        if(!this.validatorText(order.addr.index))return true;
        if(!this.validatorText(order.addr.street))return true;
        if(!this.validatorText(order.addr.house))return true;
        if(!this.validatorText(order.addr.room))return true;
        if(order.sendType === "curier" && (!order.curierService || order.curierService === ''))return true;
        if(order.sendType === "ruMail" && (!order.mailService || order.mailService === ''))return true;
        return false;
    };

    validateStep3 = (order)=>{
        if(!(order.paymentMethod === 'cash' || order.paymentMethod === 'card'))return true;
        return false;
    };

    makeOrder = () => {
        console.log("make order", this.props.order);
        this.props.actions.order.makeOrder(this.props.order);
    };
    selectCity = (city) => {
        console.log("make city", city);
        this.props.actions.order.selectCity(city);
        this.props.actions.order.getPickupPoint(city.id);
    };

    validatorText = (val) => {
        if (!val) {
            return false;
        }
        if (val.length > 0) {
            return true
        } else {
            false
        }
    };
    validatorEmail = (val) => {
        if (!val) {
            return false;
        }
        var re = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        return re.test(val.toLowerCase());
    };
    validatorNumber = (val) => {
        if (!val) {
            return false;
        }
        var re = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
        return re.test(val.toLowerCase());
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
                doValid={this.state.doValid}
                validatorText={this.validatorText}
                validatorEmail={this.validatorEmail}
                validatorNumber={this.validatorNumber}
                setObjectMultiAttr={this.setObjectMultiAttr}
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
