import React, {Component} from "react";
import ReactDOM from "react-dom";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as objectEditActions from "../../store/objectEdit/actions";
import * as dictionaryActions from "../../store/dictionary/actions";
import ObjectEditComponent from "../../components/ObjectEdit";
import * as objectEditSelectors from "../../store/objectEdit/selectors";


class ObjectEdit extends Component {

  componentDidMount() {
    this.props.actions.objectEdit.setActiveObject(this.props.match.params.object);
    this.props.actions.objectEdit.fetchObjectEdit(this.props.match.params.id);
    this.props.options.forEach((option) => {
      if (option.dictionary != null) {
        this.props.actions.dictionary.clearDictionary(option.dictionary);
      }
    });
    this.getDictionaryForSelect();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.object != this.props.match.params.object) {
      this.props.actions.objectEdit.setActiveObject(nextProps.match.params.object);
      this.props.options.forEach((option) => {
        if (option.dictionary != null) {
          this.props.actions.dictionary.clearDictionary(option.dictionary);
        }
      });
      this.getDictionaryForSelect();
    }
    if (nextProps.match.params.id != this.props.match.params.id) {
      this.props.actions.objectEdit.fetchObjectEdit(nextProps.match.params.id);
    }
  }

  getDictionaryForSelect = () => {
    this.props.options.forEach((option) => {
      if (option.type === "select") {
        let params = {};
        let dictionary = option.dictionary ? option.dictionary : option.name;
        if (dictionary === "bookSeries") {
          params.parentId = this.props.object.publisher.id;
        }
        this.props.actions.dictionary.fetchDictionary(params, dictionary);
      }
    });
  };

  addObjWithOrder = ( authors ,val ) => {
    let mass = authors ? authors.filter((obj,indx)=>obj.author.id!== val.id) : [];
    mass.push({author: val, position: 0});
    this.setObjAttr("bookAuthors", mass.map((obj, indx)=>{
      let author = obj;
      author.position = indx+1;
      return author;
    }));
  };
  removeObjWithOrder = ( authors ,val ) => {
    let mass = authors.filter((obj,indx)=>obj.author.id!== val.author.id);
    this.setObjAttr("bookAuthors", mass);
  };


  setObjAttr = (attr, val) => {
    this.props.actions.objectEdit.setObjectEdit({
      ...this.props.object,
      [attr]: val,
    })
  };

  addObjToListAttr = (attr, list, val) => {
    let mass = list ? list.filter((obj, indx) => obj.id !== val.id) : [];
    mass.push(val);
    this.setObjAttr(attr, mass);
  };
  removeObjFromListAttr = (attr, list, val) => {
    let mass = list ? list.filter((obj, indx) => obj.id !== val.id) : [];
    this.setObjAttr(attr, mass);
  };

  cancelChangeObjectEdit = () => {
    this.props.actions.objectEdit.cancelChangeObjectEdit();
  }

  saveChangeObjectEdit = () => {
    this.props.actions.objectEdit.saveChangeObjectEdit(this.props.object);
  }

  searchInDictionary = (dictionary, query) => {
    let params = { query };
    if (dictionary === "bookSeries") {
      params.parentId = this.props.object.publisher.id;
    }
    this.props.actions.dictionary.searchDictionary( params, dictionary);
  };

  clearSuggest = (dictionary, id) => {
    this.props.actions.dictionary.clearDictionary(dictionary);
    if (document.getElementById) {
      const inputElement = ReactDOM.findDOMNode(document.getElementById(id));
      inputElement.value = "";
    }
  };

  setImage = (e, field) => {
    let file = e.target.files[0];
    if (!file.type.match(/image.*/)) {
      alert(
        "Выбранный файл не является изображением. Пожалуйста выберите другой файл",
      );
    } else {
      this.props.actions.objectEdit.saveImage(file, field);
    }
  };

  getTitle = (object) => {
    let name = '';
    if (object.name) {
      name = object.name;
    } else {
      if (object.firstName) {
        name += object.firstName;
      }
      if (object.middleName) {
        name += " " + object.middleName;
      }
      if (object.lastName) {
        name += " " + object.lastName;
      }
      name = name.trim();
    }
    return name;
  };

  render() {
    return (
      <ObjectEditComponent
        {...this.state}
        {...this.props}
        setObjAttr={this.setObjAttr}
        addObjToListAttr={this.addObjToListAttr}
        removeObjFromListAttr={this.removeObjFromListAttr}
        cancelChangeObjectEdit={this.cancelChangeObjectEdit}
        saveChangeObjectEdit={this.saveChangeObjectEdit}
        addObjWithOrder={this.addObjWithOrder}
        removeObjWithOrder={this.removeObjWithOrder}
        searchInDictionary={this.searchInDictionary}
        getTitle={this.getTitle}
        clearSuggest={this.clearSuggest}
        setImage={this.setImage}
      />
    );
  }
}

const mapStateToProps = ({objectEdit, dictionary}) => ({
  object: objectEditSelectors.getObjectEdit(objectEdit),
  options: objectEditSelectors.getOptions(objectEdit),
  objectInfo: objectEditSelectors.getObjectInfo(objectEdit),
  data: dictionary,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    ...ownProps.actions,
    objectEdit: bindActionCreators(objectEditActions, dispatch),
    dictionary: bindActionCreators(dictionaryActions, dispatch)
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ObjectEdit);