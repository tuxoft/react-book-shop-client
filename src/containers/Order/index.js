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
            />
        );
    }
}

const mapStateToProps = ({app}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    authenticated: appSelectors.isAuthenticated(app),
    data: {
        point: [{}]
    }
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
