import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ButtonComponent from "../simpleComponents/Button";

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

export const Input = styled.input.attrs({ type: "text" })`
    width: 600px;
    margin: 0 5px;
    font-size: 16px;
    font-weight: 700;
    line-height: 31px;
    vertical-align: top;
    color: #333;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    background-color: #fff;
    text-align: center;
`;

export const Select = styled.select`
  display: block;
  height: 40px;
  border-radius: 4px;
  border: 1px solid #e2e2e2;
  background-color: #fff;
  padding: 8px 16px;
  font-size: 14px;
  width: 100%;
`;