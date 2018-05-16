import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as bookActions from "../../store/books/actions";
import CategoryBooksComponent from "../../components/CategoryBooks";
import * as booksSelectors from "../../store/books/selectors";

class CategoryBooks extends Component {

    componentDidMount() {
        if (this.props.match.params.categoryId) {
            this.props.actions.books.fetchCategory({
                categoryId: this.props.match.params.categoryId,
                start: 0,
                pageSize: 12,
            });
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.categoryId !== this.props.match.params.categoryId && nextProps.match.params.categoryId) {
            this.props.actions.books.fetchCategory({
                categoryId: nextProps.match.params.categoryId,
                start: 0,
                pageSize: 12,
            });
        }
    }

    render() {

        return (
            <CategoryBooksComponent
                {...this.state}
                {...this.props}
            />
        );
    }
}

const mapStateToProps = ({ searchBooks, books }) => ({
    category: booksSelectors.getCategory(books),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        books: bindActionCreators(bookActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryBooks);
