import React from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import * as flashActions from "../../store/flash/actions";
import * as flashSelectors from "../../store/flash/selectors";
import Flash from "../../components/Flash";

const FlashContainer = (props) => <Flash {...props} />;

const mapStateToProps = ({ flash }) => ({
  flash: {
    isVisible: flashSelectors.isVisible(flash),
    message: flashSelectors.getMessage(flash),
    type: flashSelectors.getType(flash),
    autoHide: flashSelectors.getAutoHide(flash),
    callback: flashSelectors.getCallback(flash),
  }
});

const mapDispatchToProps = (dispatch) => ({
  actions: bindActionCreators(flashActions, dispatch)
});

export default connect(mapStateToProps, mapDispatchToProps)(FlashContainer);
