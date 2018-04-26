import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Screen from "../../components/Screen";
import CarouselDecorated from "../../components/CarouselDecorated";

import BookCard from "../../components/BookCard/index";

import * as flashActions from "../../store/flash/actions";

class MainScreen extends Component {

    render() {

        const newBooks = [];
        for(let i = 1; i<15; i++){
            newBooks.push({
                url: "http://placehold.it/140x140",
                name: "Пепе - длиный чулок "+i,
                id: i,
                autor: "Гоголь А. Н.",
                price: 100500,
                onInBox: (id) => {
                    alert(id)
                },
            });
        }
        return (
            <Screen horizontalCenter verticalCenter>
                <Header/>
                <CarouselDecorated>
                    {newBooks.map((book, indx)=><BookCard key={"newBook"+indx} book={book}/>)}

                </CarouselDecorated>
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
