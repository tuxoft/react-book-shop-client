import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as subscribeActions from "../../store/subscribe/actions";
import FooterBody from "../../components/Footer";
import { getEmail } from "../../store/subscribe/selectors";
import * as contentSelectors from "../../store/content/selectors";

class Footer extends Component {

  onChangeText = (val) => {
      console.log(val);
      this.props.actions.subscribe.setEmail(val);
  };

    subscribeEmail = () => {
        console.log(this.props.email);
        this.props.actions.subscribe.subscribeEmail(this.props.email);
    };

  render() {
    return (
        <FooterBody
            {...this.state}
            {...this.props}
            onChangeText={this.onChangeText}
            onSubscription={this.subscribeEmail}
        />
    );
  }
}

const mapStateToProps = ({ subscribe, content }) => ({
  email: getEmail(subscribe),
  footerItems: contentSelectors.getMenuFooter(content)
});

const mapDispatchToProps = (dispatch,ownProps) => ({
    actions: {
        ...ownProps.actions,
        subscribe: bindActionCreators(subscribeActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(Footer);
