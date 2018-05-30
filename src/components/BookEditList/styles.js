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

export const Table = styled.table`
    border-radius: 4px;
    border: 1px solid #e2e2e2;
    margin: 20px;
`;

export const TableBody = styled.tbody`
`;

export const TableHeader = styled.th`
    padding: 10px;
`;

export const TableCell = styled.td`
    border: 1px solid #e2e2e2;
    padding: 5px 10px;
    text-align: right;
    ${props => props.right && `
        text-align: right;
    `}
    ${props => props.left == true && `
        text-align: left;
    `}
    ${props => props.center && `
        text-align: center;
    `}
     
`;

export const TableRow = styled.tr`
    &:hover {        
        > ${TableCell} {
            background-color: #26a9e0;
            color: #fff;
            cursor: pointer;
        }
    }
            
`;

export const Paging = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: flex-start;    
`;

export const Page = styled(ButtonComponent).attrs({ type: "button" })`
    height: 30px;
    min-width: 30px;
    font-size: 16px;
    margin: 0 5px;
    white-space: nowrap;
    padding: 0 5px;
    display: block;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
     ${props => props.active && `
        background: #26a9e0;
        color: #fff;
    `}
`;

export const Select = styled.select`
  display: block;
  height: 30px;
  border-radius: 4px;
  border: 1px solid #b3b3b3;
  background-color: #fff;
  font-size: 16px;
  font-family: 'PT Sans', sans-serif;
  font-weight: 400;
  width: 100px;  
`;