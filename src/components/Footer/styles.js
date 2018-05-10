import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const FooterWrapper = styled.div`
    width: 100%;
    margin-top: 25px;
    padding-top: 35px;
    font-size: 14px;
    background-color: #28A9E0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
    z-index: 1;
`;

export const ColWrapper = styled.div`
    padding-left: 80px;
    width: 220px;
    padding: 0 10px;
    margin-bottom: 30px;
    position: relative;
`;

export const ColTitle = styled.div`
    font-size: 16px;
    font-weight: 700;
    color: #fff;
    margin: 0 0 9px;
`;

export const ColUl = styled.ul`
    list-style: none;
    padding: 8px 0 0;
    margin: 0;
`;

export const ColLi = styled.li`
    display: list-item;
`;


export const ImageCircle = styled.img`
    width: 65px
    height: 60px;
    border-radius: 50px 50px 50px 50px;;
`;


export const TextLink = styled((props) => <Link {...props} />)`
    font-size: 14px;
    line-height: 18px;
    text-decoration: none;
    color: #fff;
`;

export const MailBlock = styled.div`
    display: block;
`;

export const Button = styled.button`
  height: 40px;
  border: 0;  
  background-color: #1b75bb;
  width: 105px;
  border-radius: 5px 5px 5px 5px;  
`;

export const SubscribeWrapper = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-around;
`;

export const ControlLabel = styled.span`
    padding: 5px 0 0;
    margin: 0;
    color: #fff;
    font-size: 14px;
    line-height: 20px;
`;

