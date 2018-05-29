import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HeaderWrapper = styled.div`
    width: 100%;
    height: 115px;
    display: flex;
    flex-direction: column;
    align-content:stretch;
    background-color: #28A9E0;
    z-index: 2;
`;

export const RowWrapper = styled.div`
    margin-top: 10px;
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-around;
`;

export const LogoWrapper = styled.div`
    width: 160px;
    Height: 60px;
    display: flex;
    flex-wrap: wrap;
    align-content:stretch;
    justify-content: center;    
`;

export const BucketWrapper = styled.div`
    width: 170px;
    height: 100px;
    display: flex;
    flex-wrap: wrap;
    align-content:stretch;
    align-items: center;
    justify-content: space-around;    
`;

export const BucketInfoWrapper = styled.div`
    display: inline-block;
    width: 95px;
    color: #fff;
    font-size: 14px;
    vertical-align: top;
    margin-left: 5px;
`;

export const ImageBucket = styled.img`
    width: 65px
    height: 60px;
    border-radius: 50px 50px 50px 50px;;
`;

export const Image = styled.img`
    width: 100%;
    
`;

export const TextLink = styled((props) => <Link {...props} />)`
  color: #fff;
  text-decoration: none;
`;

export const ControlLabel = styled.span`
  margin-right: 10px;
`;

