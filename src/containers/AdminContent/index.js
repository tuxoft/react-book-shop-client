import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as contentActions from "../../store/content/actions";
import AdminContentBody from "../../components/AdminContent";


class AdminContent extends Component {

  componentDidMount() {

  }

  render() {
    return (
      <AdminContentBody
        {...this.state}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = ({ content }) => ({

});

const mapDispatchToProps = (dispatch,ownProps) => ({
  actions: {
    ...ownProps.actions,
    content: bindActionCreators(contentActions, dispatch)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(AdminContent);
