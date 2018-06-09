import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";

export const CartWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 100%;
`;

export const CartSubWrapper = styled.div`
        display: block;
        width: 70%;
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

export const Input = styled.input.attrs({ type: "text" })`
    width: 40px;
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

export const Button = styled.div`
    cursor: pointer;
    width: 30px;
    font-size: 30px;
    line-height: 25px;
    color: #b3b3b3;
    height: 30px;
    box-sizing: border-box;
    border: 1px solid #b3b3b3;
    border-radius: 3px;
    background-color: #fff;
    text-align: center;
`;

export const SelectPanel = styled.div`
    width: 100%;
    height: 75px;
    position: fixed;
    bottom: 0;
    background-color: rgba(27,117,187,.9);
    z-index: 1;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
`;
export const SelectPanelBlock = styled.div`
    display: flex;
    flex-direction: row;
    align-items: center;
    height: 100%;
    width: 70%;
`;

export const RemoveButton = styled.div`
    background-color: rgba(255,255,255,.6);
    height: 35px;
    margin: 0 25px 0 25px;
    line-height: 35px;
    color: #333;
    cursor: pointer;
    transition: .2s;
    padding: 0 20px;
    font-size: 14px;
    display: flex;
    align-items: center;
    border-radius: 3px;
`;
export const OrderBlockRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-start;
`;
export const OrderBlock = styled.div`
    width: 300px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-end;
`;
export const OrderRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
`;
export const OrderButton = styled.div`
    display: block;
    width: 200px;
    height: 50px;
    margin-top: 25px;
    margin-bottom: 0;
    font-size: 18px;
    line-height: 45px;
    background-color: #fb7543;
    cursor: pointer;
    border-radius: 5px;
    color: #fff;
    text-align: center;
    padding-top: 5px;
`;