import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as bookEditActions from "../../store/bookEdit/actions";
import BookEditListComponent from "../../components/BookEditList";
import * as bookEditSelectors from "../../store/bookEdit/selectors";


class BookEditList extends Component {

  componentDidMount() {
    this.props.actions.bookEdit.fetchBookEditList({start: 0, pageSize: this.props.pageSize, sort: this.props.sortField});
  }

  openBookEdit = (id) => {
    this.props.history.push("/admin/book-edit/"+id);
  };

  render() {
    return (
      <BookEditListComponent
        {...this.state}
        {...this.props}
        fetchBookEditList={this.props.actions.bookEdit.fetchBookEditList}
        openBookEdit={this.openBookEdit}
        changeSortField={this.props.actions.bookEdit.changeSortField}
      />
    );
  }
}

const mapStateToProps = ({bookEdit, dictionary}) => ({
  books: bookEditSelectors.getBookEditList(bookEdit),
  headers: bookEditSelectors.getHeadersForBookEditList(bookEdit),
  pages: bookEditSelectors.getPagesForBookEditList(bookEdit),
  pageSize: bookEditSelectors.getPageSize(bookEdit),
  sortField: bookEditSelectors.getSortField(bookEdit)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    ...ownProps.actions,
    bookEdit: bindActionCreators(bookEditActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookEditList);