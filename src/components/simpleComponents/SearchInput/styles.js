import styled from "styled-components";

export const InputWrapper = styled.div`
  width: 500px;
  height: 40px;
  border-radius: 3px;
  ${props => (props.short) && `
    width: 200px;
  `}  
  ${props => (props.long) && `
    width: 100%;
  `}  
`;

export const Input = styled.input.attrs({ type: "text" })`
  background-color: #fff;
  border: 0px solid #b2b2b2;
  padding: 0 10px;  
  height: 40px;
  width: 80%;
  border-radius: 5px 0 0 5px;
   ${props => (props.leftPicture && !props.rightPicture) && `
    border-radius: 0 5px 5px 0;
  `}
  ${props => (!props.leftPicture && props.rightPicture) && `
    border-radius: 5px 0 0 5px;
  `}
  ${props => (!props.leftPicture && !props.rightPicture) && `
    border-radius: 5px 5px 5px 5px;
  `}
  ${props => (props.leftPicture && props.rightPicture) && `
    border-radius: 0 0 0 0;
  `}
  ${props => (props.border) && `
    box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
  `}
`;

export const Button = styled.button`
  height: 40px;
  border: 0;  
  background-color: #1b75bb;
  width: 11%;
  ${props => props.rightSide && `
    border-radius: 0 5px 5px 0;
  `}
  ${props => props.leftSide && `
    border-radius: 5px 0 0 5px;
  `}
  ${props => (props.border) && `
    box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
  `}
`;

export const ControlLabel = styled.span`
  margin-right: 10px;
`;

