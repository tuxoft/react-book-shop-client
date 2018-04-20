import React from "react";
import Input from "./index";
import { shallow, mount } from "enzyme";

it("input", () => {
  const input = shallow(<Input />);
  expect(input).toMatchSnapshot();
});
