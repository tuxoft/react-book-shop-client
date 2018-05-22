import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

export const HomeWrapper = styled.div`
    margin: 25px 0px 20px 0px;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: flex-start;
    width: 70%;
    padding: 4px 4px 10px;
    align-items: center;
`;

export const BooksWrapper = styled.div`
    display: flex;
    flex-direction: column;
    height: 100%;
    justify-content: center;
    padding: 0px 20px 20px 20px;
    align-items: flex-start;
`;

export const CenterSide = styled.div`
    margin-top: 20px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    align-items: start;
`;

export const RowWrapper = styled.div`
    display: flex;
    flex-flow: row wrap;
    justify-content: flex-start;
    ${props => props.center && `
        justify-content: center;
        width: 100%;
        
    `}
    align-items: center;
    align-content: center;
`;

export const BlueLabel = styled.span`
    margin: 0 0 5px;
    overflow: hidden;
    font-size: 18px;
    font-weight: 700;
    color: #26a9e0;
    text-transform: uppercase;
`;

export const NavigationItem = styled((props) => <Link {...props} />)`
    display: block;
    font-size: 12px;
    line-height: 14.4px;    
    color: inherit;
    overflow: hidden;
    text-decoration: none;  
    align-self: flex-start; 
    margin-right: 10px;
    &:hover {        
       color: #26A9E0;
    }
`;

export const NavigationItemWrapper = styled.div` 
   display: flex;
   flex-direction: row;
   justify-content: space-between;
   
`;

export const NavigationItemSplitter = styled.img`
    width: 12px;
    height: 12px;
    margin-right: 10px;
`;

export const NavigationTopRow = styled.div`
    display: flex;
    flex-direction: row;
    
    justify-content: flex-start;
    align-items: flex-start;
`;

export const NavigationLeftColumn = styled.div`
    display: flex;
    flex-direction: column;
    align-self: flex-start;
    align-items: flex-start;
    padding: 0px 20px 20px 0px;
    min-width: 250px;
`;

export const BoldText = styled.b`
  color: #000;
  text-decoration: none;  
`;

export const TextLink = styled((props) => <Link {...props} />)`
  color: #000;
  text-decoration: none;  
`;

export const NavigationLeftMenuItemWrapper = styled.div`
    display: flex;
    flex-direction: column;
    margin: 0px 0px 15px 10px;    
`;

export const NavigationLeftMenuItemNameWrapper = styled.div`
  margin: 0px 0px 15px 0px;    
`;

export const NavigationLeftMenuItemSubItemWrapper = styled.div`
  margin: 0px 0px 5px 15px;
  &:hover {        
      > ${TextLink} {
          color: #26A9E0;
      }
  }
`;
