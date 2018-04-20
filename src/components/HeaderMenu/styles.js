import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const MenuSubItemWrapper = styled.div`
    position: absolute;
    display: none;
`;

export const TextLink = styled((props) => <Link {...props} />)`
  color: #000;
  text-decoration: none;
`;

export const MenuItem = styled.div`
    margin-top: 5px;
    margin-left: 10px;
    display: block;
    flex-direction: column;
    align-content:stretch;
    background-color: transparent;
    border-radius: 2px 2px 2px 2px;
    &:hover {        
        > ${TextLink} {
            color: #26A9E0;
           }
        > ${MenuSubItemWrapper} {
            display: block !important;            
           }
    }
`;

export const MenuSubItem = styled.div`
    margin-top: 5px;
    display: flex;
    flex-direction: column;
    align-content:stretch;
    background-color: transparent;
    &:hover {
        >${TextLink}{
            color: #26A9E0;
        }
    }
`;

export const RowWrapper = styled.div`
    margin-top: 10px;
    width: 70%;
    justify-content: flex-start;
     ${props => props.full && `
        width: 100%;
        border-bottom: 1px solid #b2b2b2;
        justify-content: center;
    `}
    display: flex;
    flex-direction: row;
    align-items: center;    
    background-color: #fff;
`;

export const ImageBucket = styled.img`
    width: 65px
    height: 60px;
    border-radius: 50px 50px 50px 50px;
`;

export const Image = styled.img`
    width: 100%;
`;

export const ControlLabel = styled.span`
  margin-right: 10px;
`;

