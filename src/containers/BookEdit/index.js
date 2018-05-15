import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as bookEditActions from "../../store/bookEdit/actions";
import BookEditComponet from "../../components/BookEdit";
import * as bookEditSelectors from "../../store/bookEdit/selectors";


class BookEdit extends Component {

    constructor(props) {
        super(props);
        this.state = {
            selectedBooks: [],
        };
    }

    componentDidMount() {
        this.setState({
            selectedBooks: [],
        });
    }

    setBookAttr = (attr, val) => {
        console.log("setBookAttr", attr, val);
    };

    render() {
        console.log("Cart", this.props.cart);
        return (
            <BookEditComponet
                {...this.state}
                {...this.props}
                block={this.props.match.params.block}
                setBookAttr={this.setBookAttr}
            />
        );
    }
}

const mapStateToProps = ({bookEdit}) => ({
    book: bookEditSelectors.getBookEdit(bookEdit),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        bookEdit: bindActionCreators(bookEditActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit);
