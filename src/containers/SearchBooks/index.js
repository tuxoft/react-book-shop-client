import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as booksActions from "../../store/books/actions";
import * as searchBooksActions from "../../store/searchBooks/actions";
import SearchBooksComponent from "../../components/SearchBooks";
import * as booksSelectors from "../../store/books/selectors";
import * as searchBooksSelectors from "../../store/searchBooks/selectors";
import debounce from "lodash/debounce";

class SearchBooks extends Component {

    constructor(props) {
        super(props);
        this.loadMoreBooks = debounce(this.getNextData, 2000);
    }

    _onScroll = () => {
        if ((window.scrollY + 200) * 2 >= window.innerHeight) {
            this.loadMoreBooks();
        }
    };

    componentDidMount() {
        if (this.props.match.params.query) {
            this.props.actions.searchBooks.setSearchValue(this.props.match.params.query);
            this.props.actions.books.fetchSearchBooks({
                start: 0,
                pageSize: 10,
                query: this.props.match.params.query
            });
        }
        window.addEventListener("scroll", this._onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this._onScroll);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.query !== this.props.match.params.query && nextProps.match.params.query) {
            this.props.actions.searchBooks.setSearchValue(nextProps.match.params.query);
            this.props.actions.books.fetchSearchBooks({
                start: 0,
                pageSize: 10,
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
            pageSize: 10,
            query: this.props.searchValue
        });
    };

    getNextData = ()=>{
        this.props.paging;
        console.log("total/count",this.props.meta.total, this.props.meta.paging.start+this.props.meta.paging.pageSize);
        if(this.props.meta.total <= (this.props.meta.paging.start+this.props.meta.paging.pageSize) || this.props.spinner) return;
        this.props.actions.books.fetchSearchBooks({
            start: this.props.meta.paging.start+10,
            pageSize: 10,
            query: this.props.query
        });
    };

    render() {
        console.log("searchBooks", this.props.searchBooks);
        console.log("meta", this.props.meta);
        console.log("spinner", this.props.spinner);
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
    meta: booksSelectors.getSearchBooksMeta(books),
    spinner: booksSelectors.getSearchBooksSpinner(books),
    query: booksSelectors.getSearchBooksQuery(books),
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
