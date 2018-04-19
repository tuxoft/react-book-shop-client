import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import SearchInput from "./components/simpleComponents/searchInput/index";
import Button from "./components/simpleComponents/Button";
import shopTheme from "./constants/shopTheme";
import Checkbox from "./components/simpleComponents/Checkbox";
import { ThemeProvider } from "styled-components";
class App extends Component {
  render() {
    return (
        <ThemeProvider  theme={shopTheme}>
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
        <SearchInput placeholder="Вводи значение" onChange={(val)=>{console.log("val", val.target.value)}}/>
      <Button> В корзину </Button>


        <Checkbox labelText = "labelForCheckbox" onClick={(e)=>{
            console.log('checked', e)}}/>

      </div>
        </ThemeProvider>
    );
  }
}

export default App;
