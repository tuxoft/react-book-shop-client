import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as bookEditActions from "../../store/bookEdit/actions";
import * as dictionaryActions from "../../store/dictionary/actions";
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
        this.props.actions.bookEdit.fetchBookEdit(this.props.match.params.id);
        this.getDictionaryForSelect();
    }

    getDictionaryForSelect = () => {
        this.props.options.forEach((option) => {
            if (option.type === "select") {
                let params = {};
                let dictionary = option.dictionary ? option.dictionary : option.name;
                if (dictionary == "bookSeries") {
                    params.parentId = this.props.book.publisher.id;
                }
                this.props.actions.dictionary.fetchDictionary(params, dictionary);
            }
        });
    };

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
        this.setBookAttr("bookAuthors", mass.map((obj, indx)=>{
            let author = obj;
            author.position = indx+1;
            return author;
        }));
    };
    removeBookAutor = ( authors ,val ) => {
        console.log("removeBookAutor", val);
        let mass = authors.filter((obj,indx)=>obj.author.id!== val.author.id);
        this.setBookAttr("bookAuthors", mass);
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

    searchInDictionary = (dictionary, query) => {
        console.log("searchDictionary", dictionary, query);
        let params = { query };
        if (dictionary == "bookSeries") {
            params.parentId = this.props.book.publisher.id;
        }
        this.props.actions.dictionary.searchDictionary( params, dictionary);
    };

    clearSuggest = (dictionary) => {
        this.props.actions.dictionary.clearDictionary(dictionary);
    }

    getAuthorName = (author) => {
        console.log("getAuthorName", author);
        let name = '';
        if (author.name) {
            name = author.name;
        } else {
            if (author.firstName) {
                name += author.firstName;
            }
            if (author.middleName) {
                name += " " + author.middleName;
            }
            if (author.lastName) {
                name += " " + author.lastName;
            }
            name = name.trim();
        }
        return name;
    }

    cancelChangeBookEdit = () => {
        this.props.actions.bookEdit.cancelChangeBookEdit();
    }

    saveChangeBookEdit = () => {
        this.props.actions.bookEdit.saveChangeBookEdit(this.props.book);
    }

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
                searchInDictionary={this.searchInDictionary}
                getAuthorName={this.getAuthorName}
                clearSuggest={this.clearSuggest}
                cancelChangeBookEdit={this.cancelChangeBookEdit}
                saveChangeBookEdit={this.saveChangeBookEdit}
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
        dictionary: bindActionCreators(dictionaryActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookEdit);
