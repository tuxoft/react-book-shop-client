import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as bookSeriesEditActions from "../../store/bookSeriesEdit/actions";
import BookSeriesEditComponet from "../../components/BookSeriesEdit";
import * as bookSeriesEditSelectors from "../../store/bookSeriesEdit/selectors";


class BookSeriesEdit extends Component {

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
        this.props.actions.objectEdit.setBookSeriesEdit({
            ...this.props.object,
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
        console.log("authors", this.props.object);
        return (
            <BookSeriesEditComponet
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

const mapStateToProps = ({bookSeriesEdit, dictionary}) => ({
    object: bookSeriesEditSelectors.getBookSeriesEdit(bookSeriesEdit),
    options: bookSeriesEditSelectors.getOptions(bookSeriesEdit),
    data : dictionary,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        objectEdit: bindActionCreators(bookSeriesEditActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(BookSeriesEdit);
