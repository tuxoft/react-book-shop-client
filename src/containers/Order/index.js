import React, {Component} from "react";
import ReactDOM from "react-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../store/app/actions";
import * as orderActions from "../../store/order/actions";
import * as dictionaryActions from "../../store/dictionary/actions";
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
        const pickupPoint = this.props.pickupPoints.find((pickupPoint) => pickupPoint.id == a.target.id);
        this.setObjectMultiAttr([
          {val: a.target.id, field: "sendOrgId"},
          {field: "sendPrice", val: pickupPoint && pickupPoint.sendPrice ? pickupPoint.sendPrice : 0},
          {field: "sendOrg", val: pickupPoint},
        ]);
        this.nextStep();
    };

    setObjectAttr = (val, field)=> {
        let order = {...this.props.order};
        order[field]=val;
        this.props.actions.order.setOrder(order);
        if (field === "shopCity") {
            this.props.actions.order.selectCity(order.shopCity.id);
        }
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
        if(!this.validatorId(order.shopCity))return true;
        if(!this.validatorText(order.lastName))return true;
        if(!this.validatorText(order.firstName))return true;
        if(!this.validatorEmail(order.email))return true;
        if(!this.validatorNumber(order.phoneNumber))return true;
        if(!order.isTakeStatusEmail && !order.isTakeStatusSMS)return true;
        if(!order.isAge18)return true;
        return false;
    };

    validateStep2 = (order)=>{
        if(!this.validatorText(order.addr.city))return true;
        if(!this.validatorText(order.addr.index))return true;
        if(!this.validatorText(order.addr.street))return true;
        if(!this.validatorText(order.addr.house))return true;
        if(!this.validatorText(order.addr.room))return true;
        if(!order.sendOrgId || order.sendOrgId === "") return true;
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

    searchInDictionary = (dictionary, query) => {
        let params = { query };
        this.props.actions.dictionary.searchDictionary( params, dictionary);
    };

    clearSuggest = (dictionary, id) => {
        this.props.actions.dictionary.clearDictionary(dictionary);
        if (document.getElementById) {
          const inputElement = ReactDOM.findDOMNode(document.getElementById(id));
          inputElement.value = "";
        }
    };

    validatorId = (val) => {
        if (!val) {
          return false;
        }
        if (typeof val.id !== "undefined") {
          return true
        } else {
          false
        }
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
        return (
            <OrderComponet
                {...this.state}
                {...this.props}
                setObjectAttr={this.setObjectAttr}
                setObjectAddr={this.setObjectAddr}
                nextStep = {this.nextStep}
                makeOrder = {this.makeOrder}
                setStep={this.setStep}
                doValid={this.state.doValid}
                validatorId={this.validatorId}
                validatorText={this.validatorText}
                validatorEmail={this.validatorEmail}
                validatorNumber={this.validatorNumber}
                setObjectMultiAttr={this.setObjectMultiAttr}
                searchInDictionary={this.searchInDictionary}
                clearSuggest={this.clearSuggest}
            />
        );
    }
}

const mapStateToProps = ({app, buscket, order, dictionary}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    authenticated: appSelectors.isAuthenticated(app),
    cart: cartSelectors.getCart(buscket),
    boxItemsCount: cartSelectors.getCartItemsCount(buscket),
    cities: orderSelectors.getCities(order),
    selectCity: orderSelectors.getSelectCity(order),
    placemarks: orderSelectors.getPickupPoint(order),
    order: orderSelectors.getOrder(order),
    pickupPoints: orderSelectors.getOriginalPickupPoints(order),
    courierService: orderSelectors.getCourierService(order),
    mailService: orderSelectors.getMailService(order),
    pickupPointsRangeCost: orderSelectors.getPickupPointsRangeCost(order),
    courierServiceRangeCost: orderSelectors.getCourierServiceRangeCost(order),
    data: dictionary
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch),
        order: bindActionCreators(orderActions, dispatch),
        dictionary: bindActionCreators(dictionaryActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
