import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../store/app/actions";
import OrderComponet from "../../components/Order";
import * as appSelectors from "../../store/app/selectors";


class Order extends Component {

    constructor(props) {
        super(props);
        this.state={
            order:{
                addr: {}
            },
            step: 1,
        }
    }

    componentDidMount() {
        if(!this.props.authenticated){
            this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.authenticated)
        }

    }

    setObjectAttr = (val, field)=> {
        let order = this.state.order;
        this.setState({
            order: {
                ...this.state.order,
                [field]: val,
            }
        })
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
    }

    render() {
        console.log("order", this.props.order);
        return (
            <OrderComponet
                {...this.state}
                {...this.props}
                setObjectAttr={this.setObjectAttr}
                setObjectAddr={this.setObjectAddr}
                nextStep = {this.nextStep}
                onCitySelect = {(city)=>{console.log("select city", city)}}
            />
        );
    }
}

const mapStateToProps = ({app}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    authenticated: appSelectors.isAuthenticated(app),
    cities: [{
        data: { content: 'Saint-Petersburg' },
        options: { selectOnClick: false },
        coords: [55.76, 37.64],
    }],
    selectCity: {data: { content: 'Saint-Petersburg' },
        options: { selectOnClick: false },
        coords: [55.76, 37.64],},
    placemarks: [{"geometry": {"coordinates": [55.76, 37.64]},
        "properties": {
            "balloonContent": "organization",
            orgId: "1",
            orgName: "PickPoint",
            orgWorkPeriod: "09:-20:00",
            orgIconUrl: "http://placehold.it/85x22",
            orgAddr: "Улан-Удэ, Республика Бурятия, 670961, Улан-Удэ, Смолина ул., 54",
            payCase: "Наличные и банковская карта"
        },
        "options": {
            "preset": "islands#icon",
            "iconColor": "#0095b6"
        }},
        {"geometry": {"coordinates": [55.76, 37.65]},
            "properties": {
                "balloonContent": "organization",
                orgId: "2",
                orgName: "PickPoint2",
                orgWorkPeriod: "09:-20:00",
                orgIconUrl: "http://placehold.it/85x22",
                orgAddr: "Улан-Удэ, Республика Бурятия, 670961, Улан-Удэ, Смолина ул., 54",
                payCase: "Наличные и банковская карта"
            },
            "options": {
                "preset": "islands#icon",
                "iconColor": "#0095b6"
            }}],
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
