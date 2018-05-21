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
        let mass = authors.filter((obj,indx)=>obj.author.id!== val.id);
        mass.push({author: val, position: 0});
        this.setBookAttr("authors", mass.map((obj, indx)=>{
            let author = obj;
            author.position = indx+1;
            return author;
        }));
    };
    removeBookAutor = ( authors ,val ) => {
        console.log("removeBookAutor", val);
        let mass = authors.filter((obj,indx)=>obj.author.id!== val.author.id);
        this.setBookAttr("authors", mass);
    };

    addObjToListAttr = ( attr, list ,val ) => {
        console.log("addObjToListAttr", val);
        let mass = list.filter((obj,indx)=>obj.id!== val.id);
        mass.push(val);
        this.setBookAttr(attr, mass);
    };
    removeObjFromListAttr = (attr, list ,val ) => {
        console.log("removeObjFromListAttr", val);
        let mass = list.filter((obj,indx)=>obj.id!== val.id);
        this.setBookAttr(attr, mass);
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
                addObjToListAttr={this.addObjToListAttr}
                removeObjFromListAttr={this.removeObjFromListAttr}
            />
        );
    }
}

const mapStateToProps = ({bookEdit, dictionary}) => ({
    book: bookEditSelectors.getBookEdit(bookEdit),
    options: bookEdit.options,
    data : dictionary,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        bookEdit: bindActionCreators(bookEditActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit);
