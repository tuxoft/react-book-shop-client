import React from "react";
import Button from "./index";
import {ThemeProvider} from "styled-components";

import { shallow, mount } from "enzyme";

import shopTheme from '../../../constants/shopTheme';
it("renders text", () => {
  const button = mount(
      <ThemeProvider theme = {shopTheme}>
        <Button>Button</Button>
      </ThemeProvider>);
  expect(button.text()).toBe("Button");
});

it("renders text", () => {
  const onClickHandler = jest.fn();
  const button = mount(
      <ThemeProvider theme = {shopTheme}>
        <Button onClick={onClickHandler}>Button</Button>
      </ThemeProvider>);
  button.simulate("click");
  expect(onClickHandler).toHaveBeenCalled();
});

it("default button", () => {
  const button = shallow(
      <ThemeProvider theme = {shopTheme}>
        <Button>Button</Button>
      </ThemeProvider>);
  expect(button).toMatchSnapshot();
});

it("primary button", () => {
  const button = shallow(
   <ThemeProvider theme = {shopTheme}>
    <Button primary>Button</Button>
  </ThemeProvider>);
  expect(button).toMatchSnapshot();
});

it("small button", () => {
  const button = shallow(
      <ThemeProvider theme = {shopTheme}>
        <Button small>Button</Button>
      </ThemeProvider>);
  expect(button).toMatchSnapshot();
});
