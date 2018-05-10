import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as booksActions from "../../store/books/actions";
import CartComponet from "../../components/Cart";
import * as booksSelectors from "../../store/books/selectors";


class Cart extends Component {

    componentDidMount() {
        this.props.actions.books.fetchBook(this.props.match.params.id);
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.match.params.id !== this.props.match.params.id) {
            this.props.actions.books.fetchBook(nextProps.match.params.id);
        }
    }
    render() {
        console.log("Cart", this.props.book);
        return (
            <CartComponet
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

export default connect(mapStateToProps, mapDispatchToProps)(Cart);
