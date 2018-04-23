import React from "react";
import HeaderBody from "../header/index";
import BookCard from "../BookCard/index";
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
        <BookCard {...{
            url:"http://placehold.it/240x140",
            name: "Пепе - длиный чулок",
            id: 1,
            autor: "Гоголь А. Н.",
            price: 100500,
            onInBox: (id)=>{ alert(id)},
        }}/>
        <BookCard {...{
            url:"http://placehold.it/140x240",
            name: "Пепе - длиный чулок",
            id: 1,
            autor: "Гоголь А. Н.",
            price: 100500,
            onInBox: (id)=>{ alert(id)},
        }}/>
    </div>
    </ThemeProvider>
);

export default MainPage;
