import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import Footer from "../../containers/Footer";
import Header from "../../containers/Header";
import Screen from "../../components/Screen";
import CarouselBookDecorated from "../../components/CarouselBookDecorated";
import CarouselPromoDecorated from "../../components/CarouselPromoDecorated";

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
                <CarouselPromoDecorated>
                    <img src="http://placehold.it/1000x400/f0000f/c0392b/&text=slide1" />
                    <img src="http://placehold.it/1000x400/00f0f0/c0392b/&text=slide2" />
                </CarouselPromoDecorated>
                <CarouselBookDecorated>
                    {newBooks.map((book, indx)=><BookCard key={"newBook"+indx} book={book}/>)}

                </CarouselBookDecorated>
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
