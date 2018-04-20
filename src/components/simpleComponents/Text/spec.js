import React from "react";
import { shallow, mount } from "enzyme";
import {ThemeProvider} from 'styled-components';

import shopTheme from '../../../constants/shopTheme';
import {SimpleText,BoldText,ColoredText,ColoredBoldText,UnderlinedText} from "./index";

it("renders simple", () => {
    const text = mount(
    <ThemeProvider theme = {shopTheme}>
      <SimpleText>Text</SimpleText>
    </ThemeProvider>);
  expect(text).toMatchSnapshot()
});

it("renders bold", () => {
    const text = mount(
    <ThemeProvider theme = {shopTheme}>
      <BoldText>Text</BoldText>
    </ThemeProvider>);
    expect(text).toMatchSnapshot()
});

it("renders colored", () => {
    const text = mount(
     <ThemeProvider theme = {shopTheme}>
      <ColoredText>Text</ColoredText>
    </ThemeProvider>);
    expect(text).toMatchSnapshot()
});

it("renders coloredBold", () => {
    const text = mount(
        <ThemeProvider theme = {shopTheme}>
          <ColoredBoldText>Text</ColoredBoldText>
        </ThemeProvider>);
    expect(text).toMatchSnapshot()
});

it("renders underlined", () => {
    const text = mount(
        <ThemeProvider theme = {shopTheme}>
          <UnderlinedText>Text</UnderlinedText>
        </ThemeProvider>);
    expect(text).toMatchSnapshot()
});
