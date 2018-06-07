import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import AdminFooter from "../../containers/AdminFooter";
import AdminHeader from "../../containers/AdminHeader";
import Screen from "../../components/Screen";
import ObjectEdit from "../../containers/ObjectEdit";



import * as flashActions from "../../store/flash/actions";

class ObjectEditScreen extends Component {

    render() {


        return (
            <Screen horizontalCenter verticalCenter>
                <AdminHeader/>
                <ObjectEdit {...this.props}/>
                <AdminFooter/>
            </Screen>
        );
    }
}

const mapStateToProps = ({app}) => ({
    app: app,
});

const mapDispatchToProps = (dispatch) => ({
    actions: {
        flash: bindActionCreators(flashActions, dispatch),
    }
});

export default connect(mapStateToProps, mapDispatchToProps)(ObjectEditScreen);