import React, {Component} from "react";
import {bindActionCreators} from "redux";
import Axios from "axios";
import {connect} from "react-redux";
import FooterRoutes from "../../routes/FooterRoutes";
import HeaderRoutes from "../../routes/HeaderRoutes";
import Screen from "../../components/Screen";
import ContentRoutes from "../../routes/ContentRoutes";



import * as flashActions from "../../store/flash/actions";

class MainScreen extends Component {

    render() {


        return (
            <Screen horizontalCenter verticalCenter>
                <HeaderRoutes {...this.props}/>
                <ContentRoutes {...this.props}/>
                <FooterRoutes {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
