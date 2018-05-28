import React, {Component} from "react";
import { ThemeProvider } from "styled-components";
import shopTheme from "./constants/shopTheme";
import Routes from "./routes/MainRoutes/index";


const App = () => <ThemeProvider  theme={shopTheme}><Routes /></ThemeProvider>;

export default App;
