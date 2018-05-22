import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as bookActions from "../../store/books/actions";
import * as contentActions from "../../store/content/actions";
import CategoryBooksComponent from "../../components/CategoryBooks";
import * as booksSelectors from "../../store/books/selectors";
import * as contentSelectors from "../../store/content/selectors";
import debounce from "lodash/debounce";

class CategoryBooks extends Component {

    constructor(props) {
        super(props);
        this.loadMoreBooks = debounce(this.getNextData, 2000);
    }

    _onScroll = () => {
        if ((window.scrollY + 330) * 2 >= window.innerHeight) {
            this.loadMoreBooks();
        }
    };

    componentDidMount() {
        if (this.props.match.params.categoryId) {
            this.props.actions.books.fetchBooksByCategory({
                categoryId: this.props.match.params.categoryId,
                start: 0,
                pageSize: 12,
            });
            this.props.actions.content.fetchNavigationMenuTop({id: this.props.match.params.categoryId});
            this.props.actions.content.fetchNavigationMenuLeft({id: this.props.match.params.categoryId});
        }
        window.addEventListener("scroll", this._onScroll);
    }

    componentWillUnmount() {
        window.removeEventListener("scroll", this._onScroll);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.categoryId !== this.props.match.params.categoryId && nextProps.match.params.categoryId) {
            this.props.actions.books.fetchBooksByCategory({
                categoryId: nextProps.match.params.categoryId,
                start: 0,
                pageSize: 12,
            });
            this.props.actions.content.fetchNavigationMenuTop({id: nextProps.match.params.categoryId});
            this.props.actions.content.fetchNavigationMenuLeft({id: nextProps.match.params.categoryId});
        }
    }

    getNextData = ()=>{
        this.props.paging;
        console.log("total/count",this.props.paging.total, this.props.paging.paging.start+this.props.paging.paging.pageSize);
        if(this.props.paging.total <= (this.props.paging.paging.start+this.props.paging.paging.pageSize) || this.props.spinner) return;
        this.props.actions.books.fetchBooksByCategory({
            categoryId: this.props.match.params.categoryId,
            start: this.props.paging.paging.start+12,
            pageSize: 12,
        })
    };

    render() {
        console.log("spinner", this.props.spinner);
        console.log("paging", this.props.paging);
        console.log("booksByCategory", this.props.booksByCategory);
        return (
            <CategoryBooksComponent
                {...this.state}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = ({ searchBooks, books, content}, {match}) => ({
    booksByCategory: booksSelectors.getBooksByCategory(books, match.params.categoryId),
    paging: booksSelectors.getBooksByCategoryPaging(books, match.params.categoryId),
    spinner: booksSelectors.getBooksByCategorySpiner(books, match.params.categoryId),
    navigationMenuTop: contentSelectors.getNavigationMenuTop(content),
    navigationMenuLeft: contentSelectors.getNavigationMenuLeft(content),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        books: bindActionCreators(bookActions, dispatch),
        content: bindActionCreators(contentActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBooks);
