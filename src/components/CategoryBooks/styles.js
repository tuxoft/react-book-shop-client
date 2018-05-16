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

export const CenterSide = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    width: 660px;
    align-items: start;
`;

export const RowWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    width: 860px;
    align-items: center;
    align-content: center;
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


