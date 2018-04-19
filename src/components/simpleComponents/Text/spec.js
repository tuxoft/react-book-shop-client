import React from "react";
import Button from "./index";
import { shallow, mount } from "enzyme";

it("renders text", () => {
  const button = mount(<Button>Button</Button>);
  expect(button.text()).toBe("Button");
});

it("renders text", () => {
  const onClickHandler = jest.fn();
  const button = mount(<Button onClick={onClickHandler}>Button</Button>);
  button.simulate("click");
  expect(onClickHandler).toHaveBeenCalled();
});

it("default button", () => {
  const button = shallow(<Button>Button</Button>);
  expect(button).toMatchSnapshot();
});

it("primary button", () => {
  const button = shallow(<Button primary>Button</Button>);
  expect(button).toMatchSnapshot();
});

it("small button", () => {
  const button = shallow(<Button small>Button</Button>);
  expect(button).toMatchSnapshot();
});
