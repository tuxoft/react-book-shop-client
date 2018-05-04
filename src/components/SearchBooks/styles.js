import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    width:100%;
    align-items: center;
`;

export const TextLink = styled((props) => <Link {...props} />)`
  color: #fff;
  text-decoration: none;
`;

export const LeftSide = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 71%;
    align-items: start;
`;

export const CenterSide = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 55%;
    align-items: start;
`;

export const InfoBlock = styled((props) => <Link {...props} />)`
    border-radius: 5px;
    box-sizing: border-box;
    margin-bottom: 20px;
    padding: 4px;
    overflow: hidden;
    display: inline-block;
    vertical-align: top;
    width: 300px;
    text-decoration: none;
    min-height: 340px;
    margin-right: 20px;
    border: 1px solid #b3b3b3;
`;

export const InfoText = styled.div`
    padding: 20px;
    color: #333;
`;

export const RowWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: space-between;
    width: 55%;
    align-items: center;
    align-content: center;
`;

export const InfoImage = styled.img`
    height: 220px;
`;

export const BlueTextLink = styled((props) => <Link {...props} />)`
    font-weight: 700;
    color: #26a9e0;
    margin-bottom: 10px;
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
`;

export const BlueLabel = styled.span`
    height: 42px;
    margin: 0 0 5px;
    overflow: hidden;
    font-size: 18px;
    font-weight: 700;
    color: #26a9e0;
    text-transform: uppercase;
`;

export const Label = styled.span`
    height: 35px;
    margin: 0;
    font-size: 14px;
    overflow: hidden;
`;

