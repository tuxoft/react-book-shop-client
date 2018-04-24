import React from "react";
import HeaderBody from "../header/index";
import BookCard from "../BookCard/index";
import FooterBody from "../Footer/index";
import shopTheme from "../../constants/shopTheme";
import { ThemeProvider } from "styled-components";

const MainPage = (props) => (
    <ThemeProvider  theme={shopTheme}>
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
    </ThemeProvider>
);

export default MainPage;
