import React from "react";
import styled from "styled-components";
import {Link} from "react-router-dom";
import ButtonComponent from "../simpleComponents/Button";

import UploadButtonComponent from "../simpleComponents/UploadButton";

export const ContentWrapper = styled.div`
        margin-top: 15px;
        display: flex;
        flex-direction: column;
        align-items: start;
        width: 100%;
        max-width: 1250px;
`;

export const RadioBox = styled.div`
        display: flex;
        flex-direction: column;
        align-items: start;
`;

export const RadioRow = styled.div`
        display: flex;
        flex-direction: row;
        align-items: start;
        ${props => props.big && `
            
        `}
`;

export const RadioLabel = styled.div`
        margin-bottom: 15px;
        margin-right: 25px;
        display: flex;
        flex-direction: column;
        align-items: start;
        ${props => props.active && `
            color:#26a9e0;
        `}
`;

export const InputRadio = styled.input.attrs({ type: "radio" })`
    box-sizing: border-box;
    border: 10px solid #26a9e0;
    padding: 0;
`;

export const Row = styled.div`
        margin-top: 15px;
        display: flex;
        flex-direction: row;
        align-items: center;
        width: 100%;
        justify-content: center;
        ${props => props.fromStart && `
            align-items: center;
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
    ${props => props.lm15 && `
       margin-left: 15px;
    `}
    ${props => props.redAlert && `
       font-size: 12px;
       color: red;
    `}
    
`;

export const Input = styled.input.attrs({ type: "text" })`
    width: 100%;
    padding: 3px 0;
    border: 0;
    border-bottom: 1px solid gray;
    color: #333;
    transition: .3s;
    line-height: normal;
    font-family: 'PT Sans',sans-serif;
    font: inherit;
    margin: 0;
    background-color: white;
    cursor: text;
    ${props => props.redAlert && `
       border-color: red;
    `}
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
        align-items: flex-start;
        width: 100%;
        justify-content: center;
        ${props => props.leftside && `
            align-items: flex-start;
        `}
        
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
    min-width: 80px;
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


export const OrderBlockRow = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    ${props => props.left && `
        justify-content: flex-start;
    `}
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
    margin-bottom: 25px;
    ${props => props.short && `
        width: 200px;
    `}
`;
export const SelectBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 585px;
    height: 60px;
    margin-bottom: 10px;
    padding: 0 20px;
    box-sizing: border-box;
    background-color: #f2f2f2;
    font-size: 14px;
    cursor: pointer;
    transition: .3s;
`;

export const SelectBlockRow = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
`;

export const Step = styled.div`
    height: 110px;
    margin-bottom: 15px;
    box-sizing: border-box;
    font-size: 0;
    width: 620px;
    display: flex;
    flex-direction: row;
`;
export const StepNumber = styled.div`
    display: inline-block;
    font-weight: 700;
    text-align: center;
    line-height: 108px;
    color: #26a9e0;
    vertical-align: top;
    width: 90px;
    font-size: 32px;
    height: 110px;
    box-sizing: border-box;
    border: 1px solid #b3b3b3;
    ${props => props.active && `
        border: 1px solid #26a9e0;
        background-color: #26a9e0;
        color: #fff;
    `}
`;
export const StepRight = styled.div`
    display: inline-flex;
    flex-direction: column;
    justify-content: center;
    width: 530px;
    padding: 0 20px;    
    border: 1px solid #b3b3b3;
    border-left: none;
    font-size: 14px;
    height: 110px;
    box-sizing: border-box;
    font-family: 'PT Sans',sans-serif;
    color: #333;
    line-height: 1.2;
    ${props => props.active && `
        background-color: rgba(38,169,224,.1);
        border-color: #26a9e0;
        box-shadow: inset 0 0 0 1px #26a9e0;
    `}
`;
export const StepRow = styled.div`
    margin-bottom: 5px;
    font-size: 18px;
    font-weight: 700;
    color: #26a9e0;
    vertical-align: top;
    display: flex;
    flex-direction: row;
    ${props => props.low && `
        font-size: 14px;
        overflow: hidden;
        font-weight: 100;
        font-family: 'PT Sans',sans-serif;
        color: #333;
        line-height: 1.2;
    `}
`;

export const CartTableHeader = styled.div`
    height: 30px;
    border-bottom: 1px solid #b3b3b3;
    font-size: 0;
    width: 580px;
    display: flex;
    flex-direction: row;
    align-content: start;
`;

export const CartTableHeaderItem = styled.div`
    text-align: left;
    display: block;
    font-size: 12px;
    line-height: 30px;
    color: gray;
    ${props => props.naming && `
       width: 380px;
    `}
     ${props => props.count && `
       width: 80px;
    `}
     ${props => props.price && `
       width: 120px;
    `}
`;

export const CartWrapper = styled.div`
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 580px;
`;

export const CartOrderItem = styled.div`
    display: flex;
    width: 100%;
    flex-direction: row;
    align-content: start;    
    padding-bottom: 5px;
    text-decoration: none;
    color: #333;
    &:hover {
      background-color: rgba(38,169,224,.1);
    }
    ${props => props.last && `
        border-bottom: 1px solid #b3b3b3;
        margin-bottom: 25px;
    `}   
`;

export const EditWrapper = styled.div`
    text-decoration: none;
    color: #26a9e0;
    margin-left: 15px;
    font-size: 12px;
    cursor: pointer;
    &:hover {
      color: #005477;
    }
`;

export const CartOrderItemDescription = styled.div`
    display: flex;
    flex-direction: row;
    align-content: start;
    align-items: center;
    vertical-align: top;
    width: 100%;
`;

export const CartOrderItemDescriptionInfo = styled.div`
    margin-right: 10px;
    width: 380px;
    display: flex;
    flex-direction: column;
    align-content: start;
`;

export const CartOrderItemDescriptionRightInfo = styled.div`
    display: flex;
    flex-direction: row;
    align-content: start;
    width: 200px;
`;
export const CartOrderItemDescriptionRightInfoPrice = styled.div`
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 100px;
`;
export const CartOrderItemDescriptionRightInfoCount = styled.div`
    margin-left: 5px;
    display: flex;
    flex-direction: column;
    align-content: center;
    justify-content: center;
    width: 75px;
`;