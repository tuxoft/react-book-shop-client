import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import AdminFooterBody from "../../components/AdminFooter";
import * as contentActions from "../../store/content/actions";
import * as contentSelectors from "../../store/content/selectors";

class AdminFooter extends Component {

  render() {
    return (
      <AdminFooterBody
        {...this.state}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = ({ subscribe, content }) => ({
  footerItems: contentSelectors.getAdminMenuFooter(content)
});

const mapDispatchToProps = (dispatch,ownProps) => ({
  actions: {
    ...ownProps.actions,
    content: bindActionCreators(contentActions, dispatch)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminFooter);
