import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Screen from "../../components/Screen";
import NotFoundComponent from "../../components/NotFound/index";



import * as flashActions from "../../store/flash/actions";

class NotFound extends Component {

    render() {


        return (
            <Screen horizontalCenter verticalCenter>
                <Header/>
                <NotFoundComponent {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(NotFound);
