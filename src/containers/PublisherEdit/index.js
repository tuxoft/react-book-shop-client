import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import * as publisherEditActions from "../../store/publisherEdit/actions";
import PublisherEditComponet from "../../components/PublisherEdit";
import * as publisherEditSelectors from "../../store/publisherEdit/selectors";


class PublisherEdit extends Component {

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
        this.props.actions.objectEdit.setPublisherEdit({
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
            <PublisherEditComponet
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

const mapStateToProps = ({publisherEdit, dictionary}) => ({
    object: publisherEditSelectors.getPublisherEdit(publisherEdit),
    options: publisherEditSelectors.getOptions(publisherEdit),
    data : dictionary,
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        objectEdit: bindActionCreators(publisherEditActions, dispatch),
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(PublisherEdit);
