import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as objectEditActions from "../../store/objectEdit/actions";
import * as flashActions from "../../store/flash/actions";
import ObjectEditListComponent from "../../components/ObjectEditList";
import * as objectEditSelectors from "../../store/objectEdit/selectors";


class ObjectEditList extends Component {

  componentDidMount() {
    this.props.actions.objectEdit.setActiveObject(this.props.match.params.object);
    this.props.actions.objectEdit.fetchObjectEditList();
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.match.params.object != this.props.match.params.object) {
      this.props.actions.objectEdit.setActiveObject(nextProps.match.params.object);
      this.props.actions.objectEdit.fetchObjectEditList();
    }
  }

  openObjectEdit = (id) => {
    let object = this.props.match.params.object?this.props.match.params.object:this.props.activeObject;
    this.props.history.push("/admin/change/item/" + object + "/" + id);
  };

  onChangeSearch = (query) => {
    this.props.actions.objectEdit.changeSearchValue(query)
  };

  getCellValue = (object, field) => {
    let indx = field.split(".");
    let value = object;
    for (let i = 0; i< indx.length; i++) {
      if (value[indx[i]]) {
        value = value[indx[i]]
      } else {
        value = "";
        break;
      }
    }
    return value;

  };

  deleteActionHandler = (e, id) => {
    e.stopPropagation();
    this.props.actions.flash.showFlash(
      "Вы уверены что хотите удалить (ид="+id+")?",
      "confirm",
      false,
      ()=>this.props.actions.objectEdit.deleteObjectEdit(id)
    );
  };


  render() {
    return (
      <ObjectEditListComponent
        {...this.state}
        {...this.props}
        fetchObjectEditList={this.props.actions.objectEdit.fetchObjectEditList}
        openObjectEdit={this.openObjectEdit}
        changeSortField={this.props.actions.objectEdit.changeSortField}
        onChangeSearch={this.onChangeSearch}
        getCellValue={this.getCellValue}
        deleteActionHandler={this.deleteActionHandler}
      />
    );
  }
}

const mapStateToProps = ({objectEdit, dictionary, flash}) => ({
  objectList: objectEditSelectors.getObjectEditList(objectEdit),
  headers: objectEditSelectors.getHeadersForEditList(objectEdit),
  pages: objectEditSelectors.getPagesForEditList(objectEdit),
  pageSize: objectEditSelectors.getPageSize(objectEdit),
  sortField: objectEditSelectors.getSortField(objectEdit),
  searchValue: objectEditSelectors.getSearchValue(objectEdit),
  objectInfo: objectEditSelectors.getObjectInfo(objectEdit),
  activeObject: objectEditSelectors.getActiveObject(objectEdit),
  data: dictionary,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
  actions: {
    ...ownProps.actions,
    objectEdit: bindActionCreators(objectEditActions, dispatch),
    flash: bindActionCreators(flashActions, dispatch),
  },
});

export default connect(mapStateToProps, mapDispatchToProps)(ObjectEditList);