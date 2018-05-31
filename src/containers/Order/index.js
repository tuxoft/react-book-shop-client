import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../store/app/actions";
import OrderComponet from "../../components/Order";
import * as appSelectors from "../../store/app/selectors";


class Order extends Component {

    constructor(props) {
        super(props);
    }

    componentDidMount() {
        if(!this.props.authenticated){
            this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.authenticated)
        }
    }

    render() {
        console.log("book", this.props.book);
        return (
            <OrderComponet
                {...this.state}
                {...this.props}

            />
        );
    }
}

const mapStateToProps = ({app}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    authenticated: appSelectors.isAuthenticated(app),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Order);
