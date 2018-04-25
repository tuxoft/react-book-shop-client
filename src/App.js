import React from "react";
import Routes from "./routes";
import { ThemeProvider } from "styled-components";
import shopTheme from "./constants/shopTheme";

const App = () => <ThemeProvider  theme={shopTheme}><Routes /></ThemeProvider>;

export default App;
