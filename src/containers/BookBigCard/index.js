import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as booksActions from "../../store/books/actions";
import BookBigCardComponent from "../../components/BookBigCard";
import * as booksSelectors from "../../store/books/selectors";


class BookBigCard extends Component {

    componentDidMount() {
        this.props.actions.books.fetchBook(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.actions.books.fetchBook(nextProps.match.params.id);
        }
    }
    render() {
        console.log("BookBigCard", this.props.book);
        return (
            <BookBigCardComponent
                {...this.state}
                {...this.props}
                block={this.props.match.params.block}
            />
        );
    }
}

const mapStateToProps = ({searchBooks, books}) => ({
    book: booksSelectors.getBigBook(books),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        books: bindActionCreators(booksActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookBigCard);
