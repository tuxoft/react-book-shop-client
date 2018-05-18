import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as booksActions from "../../store/books/actions";
import * as contentActions from "../../store/content/actions";
import BookBigCardComponent from "../../components/BookBigCard";
import * as booksSelectors from "../../store/books/selectors";
import * as contentSelectors from "../../store/content/selectors";


class BookBigCard extends Component {

    componentDidMount() {
        this.props.actions.books.fetchBook(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.actions.books.fetchBook(nextProps.match.params.id);
        }
        if (nextProps.book !== this.props.book && nextProps.book.categories[0].id != null) {
            this.props.actions.content.fetchNavigationMenuTop({id: nextProps.book.categories[0].id});
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

const mapStateToProps = ({searchBooks, books, content}) => ({
    book: booksSelectors.getBigBook(books),
    navigationMenuTop: contentSelectors.getNavigationMenuTop(content),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        books: bindActionCreators(booksActions, dispatch),
        content: bindActionCreators(contentActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookBigCard);
