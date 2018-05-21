import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as authorsEditActions from "../../store/authorsEdit/actions";
import AuthorsEditComponet from "../../components/AuthorsEdit";
import * as authorsEditSelectors from "../../store/authorsEdit/selectors";


class AuthorsEdit extends Component {

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
        this.props.actions.objectEdit.setAuthorsEdit({
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
            <AuthorsEditComponet
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

const mapStateToProps = ({authorsEdit, dictionary}) => ({
    object: authorsEditSelectors.getAuthorsEdit(authorsEdit),
    options: authorsEditSelectors.getOptions(authorsEdit),
    data : dictionary,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        objectEdit: bindActionCreators(authorsEditActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(AuthorsEdit);
