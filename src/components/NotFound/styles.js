import React from "react";
import styled from "styled-components";

export const CardWrapper = styled.div`
    margin: 25px 15px 20px 0px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    width: 80%;
    text-align: center;
    vertical-align: top;
    padding: 4px 4px 10px;
    text-decoration: none;
    background: #fff;
    position: relative;
`;

export const Row = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: center;
    margin: 20px;
`;

export const PriceLabel = styled.div`
    font-size: 14px;
    line-height: 1.2;
    margin-bottom: 10px;
`;

