import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import AdminFooter from "../../containers/AdminFooter";
import AdminHeader from "../../containers/AdminHeader";
import Screen from "../../components/Screen";
import AdminContent from "../../containers/AdminContent";


import * as flashActions from "../../store/flash/actions";

class AdminScreen extends Component {

  render() {


    return (
      <Screen horizontalCenter verticalCenter>
        <AdminHeader/>
        <AdminContent {...this.props}/>
        <AdminFooter/>
      </Screen>
    );
  }
}

const mapStateToProps = ({app}) => ({
  app: app,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
    flash: bindActionCreators(flashActions, dispatch),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminScreen);
