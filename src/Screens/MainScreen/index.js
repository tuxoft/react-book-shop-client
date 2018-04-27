import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Screen from "../../components/Screen";
import Home from "../../containers/HomeContent";



import * as flashActions from "../../store/flash/actions";

class MainScreen extends Component {

    render() {


        return (
            <Screen horizontalCenter verticalCenter>
                <Header/>
                <Home/>
                <Footer/>
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
