import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ButtonComponent from "../simpleComponents/Button";

export const CartWrapper = styled.div`
        display: block;
        width: 69%;
        min-width: 1250px;
        margin-top: 15px;
`;

export const CartTabs = styled.ul`
    display: block;
    margin: 0;
    padding: 0;
    list-style: none;
    height: 30px;
    border-bottom: 1px solid #b3b3b3;
`;

export const CartTab = styled.li`
    display: inline-block;
    padding: 0;
    margin: 0 25px;
    font-size: 18px;
    font-weight: 700;
    line-height: 30px;
    cursor: pointer;
    
    ${props => props.active && `
        position: relative;
        color: #26a9e0;
        &:after {
            content: '';
            position: absolute;
            bottom: -4px;
            left: 0;
            width: 100%;
            height: 3px;
            background-color: #26a9e0;
        } 
    `}
    ${props => props.first && `
        margin-left: 0;
    `}
`;

export const CheckBoxWrapper = styled.div`
        margin-top: 35px;
        margin-bottom: 10px;
        width: 100%;
        display: flex;
        flex-direction: row;
        align-content: start;    
`;

export const CartTableHeader = styled.div`
    height: 30px;
    border-bottom: 1px solid #b3b3b3;
    font-size: 0;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-content: start;
`;

export const CartTableHeaderItem = styled.div`
    margin-left: 35px;
    text-align: left;
    display: block;
    font-size: 12px;
    line-height: 30px;
    color: gray;
    ${props => props.name && `
       width: 850px;
    `}
     ${props => props.count && `
       width: 115px;
    `}
     ${props => props.kg && `
       width: 60px;
    `}
     ${props => props.price && `
       width: 100px;
    `}
`;

export const CartOrderItem = styled.div`
    display: flex;
    flex-direction: row;
    align-content: start;
    padding: 20px 0;
    font-size: 0;
    color: #333;
`;

export const CartOrderItemCheckbox = styled.div`
    align-self: center;
    margin: -16px 19px 0 0;
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

export const SimpleLink = styled((props) => <Link {...props} />)`
  text-decoration: none;
`;

export const CartOrderItemDescription = styled.div`
    display: flex;
    flex-direction: row;
    align-content: start;
    align-items: flex-start;
    vertical-align: top;
    width: 100%;
`;

export const CartOrderItemDescriptionInfo = styled.div`
    margin-right: 10px;
    width: 735px;
    display: flex;
    flex-direction: column;
    align-content: start;
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
    ${props => props.gray && `
       color: gray;
    `}
`;

export const CartOrderItemDescriptionRightInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-content: start;
`;
export const CartOrderItemDescriptionRightInfoCountControl = styled.div`
    display: flex;
    flex-direction: column;
    align-content: start;
    width: 115px;
`;
export const CartOrderItemDescriptionRightInfoKg = styled.div`
    margin-left: 35px;
    display: flex;
    flex-direction: row;
    align-content: start;
    width: 60px;
    font-size: 16px;
`;

export const CartOrderItemDescriptionRightInfoPrice = styled.div`
    margin-left: 35px;
    display: flex;
    flex-direction: column;
    align-content: start;
    width: 100px;
`;