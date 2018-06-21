import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as appActions from "../../store/app/actions";
import * as orderActions from "../../store/order/actions";
import * as profileActions from "../../store/profile/actions";
import EditMyProfileComponet from "../../components/EditMyProfile";
import * as appSelectors from "../../store/app/selectors";
import * as contentSelectors from "../../store/content/selectors";
import * as orderSelectors from "../../store/order/selectors";
import * as profileSelectors from "../../store/profile/selectors";


class EditMyProfile extends Component {

    setObjectAttr = (val, field)=>{
        let profile = {
            ...this.props.profile,
            [field]: val,
        };
        this.props.actions.profile.setProfile(profile);
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

    saveProfile = ()=>{
        this.props.actions.profile.saveProfile(this.props.profile);
    };

    componentDidMount() {
        if(!this.props.authenticated){
            this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.authenticated);
        }
        this.props.actions.order.fetchOrderList("active");
        this.props.actions.profile.fetchProfile();
    }

    render() {
        console.log("profile rend", this.props.profile);
        return (
            <EditMyProfileComponet
                {...this.state}
                {...this.props}
                setObjectAttr={this.setObjectAttr}
                validatorEmail={this.validatorEmail}
                validatorNumber={this.validatorNumber}
                saveProfile={this.saveProfile}
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
        profile: bindActionCreators(profileActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(EditMyProfile);
