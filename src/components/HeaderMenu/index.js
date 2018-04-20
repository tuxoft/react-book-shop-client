import React from "react";
import * as styles from "./styles";
import { Link } from "react-router-dom";

const HeaderMenu = (props) => (
    <styles.RowWrapper full>
       <styles.RowWrapper>
           {props.menuItems && props.menuItems.map((item, indx)=>(
               <styles.MenuItem key={"mi"+indx}>
                   <styles.TextLink to="/">{item.head}</styles.TextLink>
                   <styles.MenuSubItemWrapper>
                   {item.subItems && item.subItems.map((subItem, indx2)=>(
                       <styles.MenuSubItem key={"smi"+indx2}>
                           <styles.TextLink to={subItem.link}>{subItem.name}</styles.TextLink>
                       </styles.MenuSubItem>
                   ))}
                   </styles.MenuSubItemWrapper>
               </styles.MenuItem>
           ))}
       </styles.RowWrapper>
    </styles.RowWrapper>
);

export default HeaderMenu;
