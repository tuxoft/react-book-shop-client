import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { withLastLocation } from "react-router-last-location";
import * as contentActions from "../../store/content/actions";
import AdminHeaderBody from "../../components/AdminHeader";
import * as contentSelectors from "../../store/content/selectors";

class AdminHeader extends Component {

  componentDidMount() {
    this.props.actions.content.fetchAdminMenu();
  }

  render() {
    console.log("this.props.adminMenu",this.props.adminMenu);
    return (
      <AdminHeaderBody
        {...this.state}
        {...this.props}
        menuItems={this.props.adminMenu}
      />
    );
  }
}

const mapStateToProps = ({ content }) => ({
  adminMenu: contentSelectors.getAdminMenuTop(content)
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  actions: {
    ...ownProps.actions,
    content: bindActionCreators(contentActions, dispatch)
  },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(AdminHeader));
