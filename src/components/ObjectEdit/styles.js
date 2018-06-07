import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ButtonComponent from "../simpleComponents/Button";

import UploadButtonComponent from "../simpleComponents/UploadButton";

export const ContentWrapper = styled.div`
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
`;

export const Row = styled.div`
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: center;
`;

export const RowItem = styled.div`
        display: flex;
        width: 300px;
        ${props => props.big && `
            width: 600px;
        `}
`;

export const SimpleLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
`;

export const Label = styled.div`
    font-size: 18px;
    ${props => props.fs16 && `
       font-size: 16px;
    `}
    ${props => props.bold && `
       font-weight: 700;
    `}
    ${props => props.fs12 && `
       font-size: 12px;
    `}
    ${props => props.fs14 && `
       font-size: 14px;
    `}
    ${props => props.gray && `
       color: gray;
    `}
    ${props => props.white && `
       color: white;
    `}
    ${props => props.underline && `
       text-decoration: underline;
    `}    
`;

export const Input = styled.input.attrs({ type: props => props.valueType ? props.valueType : "text" })`
    width: 600px;
    font-size: 16px;
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    line-height: 31px;
    vertical-align: top;
    color: #333;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    background-color: #fff;
    padding-left: 5px;
    text-align: start;
    background-color: ${({ disabled }) => disabled ? '#ccc' : '#fff'};
`;

export const InputText = styled.textarea.attrs({ type: "text" })`
    width: 600px;
    min-height: 300px;
    font-size: 16px;
    font-family: 'PT Sans', sans-serif;
    font-weight: 400;
    line-height: 31px;
    vertical-align: top;
    color: #333;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    background-color: #fff;
    padding-left: 5px;
    text-align: start;
    overflow: auto;
        
`;

export const Select = styled.select`
  display: block;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #b3b3b3;
  background-color: #fff;
  font-size: 16px;
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
  width: 600px;  
`;

export const Column = styled.div`
        margin-top: 3px;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
        justify-content: center;
`;

export const Line = styled.div`
        margin-top: 5px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: start;
        cursor: pointer;
        &:hover {
            color: blue;
        }
`;

export const Container = styled.div`
        width: 100%;
        display: flex;
        flex-flow: row wrap;
        justify-content: start;
`;
export const Item = styled.div`
        border: 1px solid #e2e2e2;
        border-radius: 6px;
        color: #fff;
        background-color: #26a9e0;
        padding: 5px;
        margin: 5px;
`;

export const ButtonRow = styled.div`
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 70%;
        justify-content: flex-start;
`;

export const Button = styled(ButtonComponent).attrs({ type: "button" })`
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

export const CoverImage = styled.img`
    margin-bottom: 10px;
    max-width: 600px;
`;

export const UploadButton = styled(UploadButtonComponent)`  
`;