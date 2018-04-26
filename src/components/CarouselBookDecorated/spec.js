import React from "react";
import Screen from "./index";
import { shallow } from "enzyme";

it("screen", () => {
  const screen = shallow(<Screen />);
  expect(screen).toMatchSnapshot();
});
