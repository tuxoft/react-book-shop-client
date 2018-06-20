import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Screen from "../../components/Screen";
import MyProfile from "../../containers/MyProfile";
import ProfileBlock from "../../containers/ProfileBlock";


import * as flashActions from "../../store/flash/actions";

class MyProfileScreen extends Component {

    render() {

        if(this.props.app.isInitialized){
            return (
                <Screen horizontalCenter verticalCenter>
                    <ProfileBlock/>
                    <Header/>
                    <MyProfile {...this.props}/>
                    <Footer/>
                </Screen>
            );
        }else{
            return (
                <Screen horizontalCenter verticalCenter>
                    <ProfileBlock/>
                </Screen>
            );
        }
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

export default connect(mapStateToProps, mapDispatchToProps)(MyProfileScreen);
