import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as categoryEditActions from "../../store/categoryEdit/actions";
import CategoryEditComponet from "../../components/CategoryEdit";
import * as categoryEditSelectors from "../../store/categoryEdit/selectors";


class CategoryEdit extends Component {

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

    setObjAttr = (attr, val) => {
        console.log("setObjAttr", attr, val);
        this.props.actions.categoryEdit.setCategoryEdit({
            ...this.props.category,
            [attr]: val,
        })
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
        console.log("category", this.props.category);
        return (
            <CategoryEditComponet
                {...this.state}
                {...this.props}
                block={this.props.match.params.block}
                setObjAttr={this.setObjAttr}
                addObjToListAttr={this.addObjToListAttr}
                removeObjFromListAttr={this.removeObjFromListAttr}
            />
        );
    }
}

const mapStateToProps = ({categoryEdit, dictionary}) => ({
    category: categoryEditSelectors.getCategoryEdit(categoryEdit),
    options: categoryEditSelectors.getOptions(categoryEdit),
    data : dictionary,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        categoryEdit: bindActionCreators(categoryEditActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(CategoryEdit);
