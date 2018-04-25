import React from "react";
import HeaderBody from "../header/index";
import BookCard from "../BookCard/index";
import FooterBody from "../Footer/index";
import Screen from "../../components/Screen";
import shopTheme from "../../constants/shopTheme";


const MainPage = (props) => (

        <Screen>
    <div className="App">
        <HeaderBody/>
        <BookCard {...{
            url:"http://placehold.it/140x140",
            name: "Пепе - длиный чулок",
            id: 1,
            autor: "Гоголь А. Н.",
            price: 100500,
            onInBox: (id)=>{ alert(id)},
        }}/>
        <FooterBody onChangeText={(val)=>{console.log(val);}}
                    onSubscription={(val)=>{console.log(val);}}/>
    </div>
        </Screen>

);

export default MainPage;
