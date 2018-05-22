import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as bookActions from "../../store/books/actions";
import * as contentActions from "../../store/content/actions";
import CategoryBooksComponent from "../../components/CategoryBooks";
import * as booksSelectors from "../../store/books/selectors";
import * as contentSelectors from "../../store/content/selectors";

class CategoryBooks extends Component {

    componentDidMount() {
        if (this.props.match.params.categoryId) {
            this.props.actions.books.fetchCategory({
                categoryId: this.props.match.params.categoryId,
                start: 0,
                count: 12,
            });
            this.props.actions.content.fetchNavigationMenuTop({id: this.props.match.params.categoryId});
            this.props.actions.content.fetchNavigationMenuLeft({id: this.props.match.params.categoryId});
        }
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.categoryId !== this.props.match.params.categoryId && nextProps.match.params.categoryId) {
            this.props.actions.books.fetchCategory({
                categoryId: nextProps.match.params.categoryId,
                start: 0,
                count: 12,
            });
            this.props.actions.content.fetchNavigationMenuTop({id: nextProps.match.params.categoryId});
            this.props.actions.content.fetchNavigationMenuLeft({id: nextProps.match.params.categoryId});
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

const mapStateToProps = ({ searchBooks, books, content }) => ({
    category: booksSelectors.getCategory(books),
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
