import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";


export const MenuSubItemWrapper = styled.div`
    position: absolute;
    display: none;
    border: 1px solid #b2b2b2;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 2px 0px;    
    padding: 10px;
    flex-direction: row;
    background-color: white;
`;

export const MenuBoldText = styled.b`
  color: #000;
  text-decoration: none;  
`;

export const MenuItemHeadWrapper = styled.div`
    margin-top: 5px;
    margin-left: 10px;    
`;

export const TextLink = styled((props) => <Link {...props} />)`
  color: #000;
  text-decoration: none;  
`;

export const MenuItem = styled.div`
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
            display: flex;            
           }        
        > ${MenuItemHeadWrapper} {
            border-bottom:4px solid #26A9E0;
            margin-bottom: -4px;
           }
    }    
`;

export const MenuSubItemLink = styled.div`
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

export const MenuSubItem = styled.div`
    padding: 10px;
    display: flex;
    flex-direction: column;
    align-content:stretch;
    background-color: transparent;    
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

