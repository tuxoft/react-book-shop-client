import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";
import ButtonComponent from "../simpleComponents/Button";

export const CardWrapper = styled.div`
    margin: 25px 15px 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 80%;
    text-align: center;
    border-color: #fff;
    box-shadow: 0 0 5px 0 rgba(0,0,0,.3);
    vertical-align: top;
    box-sizing: border-box;
    border: 1px solid #ccc;
    border-radius: 5px;
    padding: 4px 4px 10px;
    text-decoration: none;
    color: #333;
    background: #fff;
    position: relative;
`;

export const ImageLink = styled(Link)`
   position: relative;
    display: block;
    text-align: center;
    width: 140px;
`;

export const Image = styled.img`
    max-width: 140px;
    max-height: 224px;
    width: auto;
    height: auto;
    margin-bottom: 8px;
`;

export const Description = styled.div`
    display: block;
    height: 120px;
    padding: 0;
`;

export const TextLink = styled((props) => <Link {...props} />)`
    display: block;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 700;
    color: inherit;
    overflow: hidden;
    text-decoration: none;
    height: 37px;
`;

export const NameBookLabel = styled.div`
    display: block;
    font-size: 15px;
    line-height: 1.2;
    font-weight: 700;
    color: inherit;
    overflow: hidden;
    height: 37px;
`;

export const AutorLabel = styled.div`
    height: 20px;
    color: gray;
    overflow: hidden;
    margin-bottom: 5px;
`;

export const PriceLabel = styled.div`
    font-size: 14px;
    line-height: 1.2;
    margin-bottom: 10px;
`;

export const PriceValue = styled.span`
  font-weight: 700;
`;

export const ButtonWrapper = styled.div`
`;
export const Control = styled(ButtonComponent).attrs({ type: "button" })`
    height: 30px;
    background: #9bd53a;
    font-size: 14px;
    margin: 0 auto;
    min-width: 110px;
    white-space: nowrap;
    color: #fff;
    padding: 0 20px;
    display: block;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
`;
