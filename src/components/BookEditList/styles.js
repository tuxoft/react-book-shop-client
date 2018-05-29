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
`;

export const TableRow = styled.tr`
`;

export const TableHeader = styled.th`
`;

export const TableCell = styled.td`
`;

export const Paging = styled.div`
`;

export const Page = styled.div`
`;