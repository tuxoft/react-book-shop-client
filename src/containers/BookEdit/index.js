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
        this.props.actions.bookEdit.setBookEdit({
            ...this.props.book,
            [attr]: val,
        })
    };

    addBookAutor = ( authors ,val ) => {
        console.log("addBookAutor", val);
        let mass = authors.filter((obj,indx)=>obj.author.id!== val.author.id);
        mass.push(val);
        this.setBookAttr("authors", mass);
    };
    removeBookAutor = ( authors ,val ) => {
        console.log("removeBookAutor", val);
        let mass = authors.filter((obj,indx)=>obj.author.id!== val.author.id);
        this.setBookAttr("authors", mass);
    };

    render() {
        console.log("book", this.props.book);
        return (
            <BookEditComponet
                {...this.state}
                {...this.props}
                block={this.props.match.params.block}
                setBookAttr={this.setBookAttr}
                addBookAutor={this.addBookAutor}
                removeBookAutor={this.removeBookAutor}
            />
        );
    }
}

const mapStateToProps = ({bookEdit}) => ({
    book: bookEditSelectors.getBookEdit(bookEdit),
    bookSeries: bookEdit.bookSeries,
    publishers: bookEdit.publishers,
    authors: bookEdit.authors,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        bookEdit: bindActionCreators(bookEditActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit);
