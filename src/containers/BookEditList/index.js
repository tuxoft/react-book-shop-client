import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as bookEditActions from "../../store/bookEdit/actions";
import BookEditListComponent from "../../components/BookEditList";
import * as bookEditSelectors from "../../store/bookEdit/selectors";


class BookEditList extends Component {

  componentDidMount() {
    this.props.actions.bookEdit.fetchBookEditList();
  }

  render() {
    return (
      <BookEditListComponent
        {...this.state}
        {...this.props}
      />
    );
  }
}

const mapStateToProps = ({bookEdit, dictionary}) => ({
  books: bookEditSelectors.getBookEditList(bookEdit),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    ...ownProps.actions,
    bookEdit: bindActionCreators(bookEditActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookEditList);