import React from "react";
import Checkbox from "./index";
import { shallow, mount } from "enzyme";

it("checkbox", () => {
  const onClick = jest.fn();
  const cb = shallow(<Checkbox labelText={'text'} onClick={onClick}/>);
  expect(cb).toMatchSnapshot();
});
it("checkbox handler", () => {
     let expected = true;
     const onClickHandler =(val) =>{
         expect(val).toBe(expected);
     };
    const cb = mount(<Checkbox labelText={'text'} onClick={onClickHandler}/>);
    cb.simulate('click', {target:{}});
    expected = false;
    cb.simulate('click', {target:{}});

});