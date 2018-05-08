import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Screen from "../../components/Screen";
import SearchBooks from "../../containers/SearchBooks";



import * as flashActions from "../../store/flash/actions";

class SearchScreen extends Component {

    render() {


        return (
            <Screen horizontalCenter verticalCenter>
                <Header {...this.props} />
                <SearchBooks {...this.props} />
                <Footer {...this.props} />
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

export default connect(mapStateToProps, mapDispatchToProps)(SearchScreen);
