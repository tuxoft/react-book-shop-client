import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Screen from "../../components/Screen";
import BookBigCard from "../../containers/BookBigCard";



import * as flashActions from "../../store/flash/actions";

class BookScreen extends Component {

    render() {


        return (
            <Screen horizontalCenter verticalCenter>
                <Header/>
                <BookBigCard {...this.props}/>
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

export default connect(mapStateToProps, mapDispatchToProps)(BookScreen);
