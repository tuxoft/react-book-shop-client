import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as subscribeActions from "../../store/subscribe/actions";
import FooterBody from "../../components/Footer";
import { getEmail } from "../../store/subscribe/selectors";

class Footer extends Component {

  onChangeText = (val) => {
      console.log(val);
      this.props.actions.subscribe.setEmail(val);
  };

  render() {
    return (
        <FooterBody
            {...this.state}
            {...this.props}
            onChangeText={(val)=>{this.onChangeText(val)}}
            onSubscription={(val)=>{console.log(this.props.email);}}
        />
    );
  }
}

const mapStateToProps = ({ subscribe }) => ({
  email: getEmail(subscribe)
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    actions: {
        ...ownProps.actions,
        subscribe: bindActionCreators(subscribeActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
