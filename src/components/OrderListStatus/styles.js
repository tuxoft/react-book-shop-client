import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const ContentWrapper = styled.div`
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        max-width: 1250px;
`;

export const Row = styled.div`
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        align-items: flex-start;
        width: 100%;
        justify-content: flex-start;
        ${props => props.fromStart && `
            align-items: flex-start;
            justify-content: flex-start;
            margin-top: 5px;
        `}
        ${props => props.top && `
            align-items: flex-start;
            justify-content: flex-end;
        `}
        ${props => props.mb25 && `
            margin-bottom: 25px;
        `}
         ${props => props.mt25 && `
            margin-top: 25px;
        `}
        ${props => props.fromEnd && `
            align-items: center;
            justify-content: flex-end;
            margin-top: 5px;
        `}
`;

export const RowItem = styled.div`
        position: relative;
        width: 300px;
        min-height: 55px;
        margin: 10px 0 0;
        font-size: 16px;
        transition: all .3s;
        vertical-align: top;
        ${props => props.big && `
            
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
    ${props => props.black && `
       color: black;
    `}
    ${props => props.blue && `
       color: #26a9e0;
    `}
    ${props => props.white && `
       color: white;
    `}
    ${props => props.underline && `
       text-decoration: underline;
    `}    
    ${props => props.lm15 && `
       margin-left: 15px;
    `}
    ${props => props.mb25 && `
       margin-bottom: 25px;
    `}
    ${props => props.redAlert && `
       font-size: 12px;
       color: red;
    `}
    ${props => props.underline && `
       text-decoration: underline;
       &:hover {
        text-decoration: none;
    };
    `}
    ${props => props.active && `
       text-decoration: none;
       color: #26a9e0;
    `}
`;

export const Column = styled.div`
        margin-top: 3px;
        display: flex;
        flex-direction: column;
        align-items: flex-start;
        width: 100%;
        justify-content: flex-start;;
        ${props => props.leftside && `
            align-items: flex-start;
        `}
        ${props => props.rightside && `
            align-items: flex-end;
        `}
        ${props => props.w220 && `
            width: 220px;
        `}
        ${props => props.w100 && `
            width: 100px;
        `}
        ${props => props.w1000 && `
            width: 1000px;
        `}
        ${props => props.w355 && `
            width: 355px;
        `}
        ${props => props.w710 && `
            width: 710px;
        `}
        ${props => props.rm25 && `
            margin-right: 25px;
        `}
`;

export const MenuWrapper = styled.div`
    background: #f2f2f2;
    padding: 20px;
    list-style-type: none;
    margin: 0 0 40px;
`;

export const MenuList = styled.ul`
    list-style-type: none;
    margin: 0;
    padding: 0;
`;

export const MenuItem = styled.li`
    font-size: 16px;
    color: #333;
    padding: 5px 0;
    cursor: pointer;
    &:hover {
        color: #f66;
    };
`;

export const CartTableHeaderItem = styled.div`
    text-align: left;
    display: block;
    font-size: 12px;
    line-height: 30px;
    color: gray;
    ${props => props.w250 && `
       width: 250px;
    `}
     ${props => props.w200 && `
       width: 200px;
    `}
     ${props => props.w180 && `
       width: 180px;
    `}
    ${props => props.w220 && `
       width: 220px;
    `}
    ${props => props.w150 && `
       width: 150px;
    `}
`;

export const CartTableHeader = styled.div`
    height: 30px;
    border-bottom: 1px solid #b3b3b3;
    font-size: 0;
    width: 1000px;
    display: flex;
    flex-direction: row;
    align-content: start;
`;

export const CartOrderItem = styled.div`
    display: flex;
    flex-direction: row;
    align-content: flex-start;
    padding-top: 15px;    
    font-size: 0;
    color: #333;
    ${props => props.chet && `
       background-color: #f2f2f2;
    `}    
`;

export const TopTab = styled.div`
    display: flex;
    flex-direction: row;
    align-content: center;
    justify-content: flex-start;
    background-color: #f2f2f2;
    height: 50px;
    width: 1000px;
    margin-bottom: 25px;
`;

export const CartTableBodyItem = styled.div`
    text-align: left;
    display: flex;
    flex-direction: column;
    align-content: flex-start;
    justify-content: flex-start;
    line-height: 30px;   
    ${props => props.vcenter && `
       justify-content: center;
    `} 
   ${props => props.w250 && `
       width: 235px;
    `}
     ${props => props.w200 && `
       width: 200px;
    `}
     ${props => props.w180 && `
       width: 180px;
    `}
    ${props => props.w220 && `
       width: 220px;
    `}
    ${props => props.w150 && `
       width: 150px;
    `}
    ${props => props.pl20 && `
       padding-left: 20px;
    `}
    ${props => props.ml15 && `
       margin-left: 15px;
    `}
`;

export const CartOrderItemCover = styled.div`
    min-width: 95px;
    margin-right: 20px;
`;

export const CartOrderItemCoverImage = styled.img`
    width: 100%;
    height: auto;
    max-width: 95px;
    max-height: 150px;
`;

export const CartWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 1000px;
`;