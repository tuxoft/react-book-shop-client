import styled from "styled-components";
import ButtonCumponent from "../Button";


export const Wrapper = styled.div`
   display: flex;
   flex-direction: row;
`;

export const Button = styled(ButtonCumponent)`
  height: 30px;
    ${props => props.green && `
        background: #9bd53a;
    `}
    ${props => props.red && `
        background: #d9534f;
    `}
    ${props => props.blue && `
        background: #26a9e0;
    `}
    
    font-size: 16px;
    margin: 0 10px;
    min-width: 110px;
    white-space: nowrap;
    color: #fff;
    padding: 0 20px;
    display: block;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;  
`;

export const Input = styled.input.attrs({ type: "file" })`
  display: none !important;
`;

