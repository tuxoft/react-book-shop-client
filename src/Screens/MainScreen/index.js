import React, { Component } from "react";
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Screen from "../../components/Screen";
import HeaderBody from "../../components/header/index";
import BookCard from "../../components/BookCard/index";

import * as flashActions from "../../store/flash/actions";

class MainScreen extends Component {

  render() {

    return (
      <Screen>
          <Header/>
          <BookCard book={{
              url:"http://placehold.it/140x140",
              name: "Пепе - длиный чулок",
              id: 1,
              autor: "Гоголь А. Н.",
              price: 100500,
              onInBox: (id)=>{ alert(id)},
          }}/>
          <Footer/>
      </Screen>
    );
  }
}

const mapStateToProps = ({ app }) => ({
  app: app,
});

const mapDispatchToProps = (dispatch) => ({
  actions: {
      flash: bindActionCreators(flashActions, dispatch),
  }
});

export default connect(mapStateToProps, mapDispatchToProps)(MainScreen);
