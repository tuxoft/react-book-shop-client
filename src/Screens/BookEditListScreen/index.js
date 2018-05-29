import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import AdminFooter from "../../containers/AdminFooter";
import AdminHeader from "../../containers/AdminHeader";
import Screen from "../../components/Screen";
import BookEditList from "../../containers/BookEditList";



import * as flashActions from "../../store/flash/actions";

class BookEditListScreen extends Component {

  render() {

    return (
      <Screen horizontalCenter verticalCenter>
        <AdminHeader/>
        <BookEditList {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookEditListScreen);
