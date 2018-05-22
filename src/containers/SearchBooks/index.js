import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as booksActions from "../../store/books/actions";
import * as searchBooksActions from "../../store/searchBooks/actions";
import SearchBooksComponent from "../../components/SearchBooks";
import * as booksSelectors from "../../store/books/selectors";
import * as searchBooksSelectors from "../../store/searchBooks/selectors";


class SearchBooks extends Component {

    componentDidMount() {
        if (this.props.match.params.query) {
            this.props.actions.searchBooks.setSearchValue(this.props.match.params.query);
            this.props.actions.books.fetchSearchBooks({
                start: 0,
                count: 10,
                query: this.props.match.params.query
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.query !== this.props.match.params.query && nextProps.match.params.query) {
            this.props.actions.searchBooks.setSearchValue(nextProps.match.params.query);
            this.props.actions.books.fetchSearchBooks({
                start: 0,
                count: 10,
                query: nextProps.match.params.query
            });
        }
    }

    onChangeText = (val) => {
        console.log(val.target.value);
        this.props.actions.searchBooks.setSearchValue(val.target.value);
    };

    onSearch = () => {
        console.log(this.props.searchValue);
        this.props.actions.books.fetchSearchBooks({
            start: 0,
            count: 10,
            query: this.props.searchValue
        });
    };

    render() {

        console.log("searchBooks", this.props.searchBooks);
        return (
            <SearchBooksComponent
                {...this.state}
                {...this.props}
                onSearch={this.onSearch}
                onChangeSearch={this.onChangeText}
            />
        );
    }
}

const mapStateToProps = ({searchBooks, books}) => ({
    searchBooks: booksSelectors.getSearchBooks(books),
    searchValue: searchBooksSelectors.getSearchValue(searchBooks),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        books: bindActionCreators(booksActions, dispatch),
        searchBooks: bindActionCreators(searchBooksActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(SearchBooks);
