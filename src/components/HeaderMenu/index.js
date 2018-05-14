import React from "react";
import * as styles from "./styles";
import { Link } from "react-router-dom";

const HeaderMenu = (props) => {
  return (
    <styles.RowWrapper full>
       <styles.RowWrapper>
           {props.menuItems && props.menuItems.map((item, indx)=>(
               <styles.MenuItem key={"mi"+indx}>
                   <styles.MenuItemHeadWrapper>
                     <styles.TextLink to={item.url?item.url:"/"}><styles.MenuBoldText>{item.name}</styles.MenuBoldText></styles.TextLink>
                   </styles.MenuItemHeadWrapper>
                   {item.subItems &&
                       <styles.MenuSubItemWrapper>
                       {item.subItems.map((subItem, indx2)=>(
                           <styles.MenuSubItem key={"smi"+indx2}>
                               {subItem.name && <styles.MenuBoldText>{subItem.name}</styles.MenuBoldText>}
                               {subItem.subItems && subItem.subItems.map((category, indx3) =>(
                                   <styles.MenuSubItemLink key={"smi"+indx3}>
                                       <styles.TextLink to={category.url?category.url:"/"}>{category.name}</styles.TextLink>
                                   </styles.MenuSubItemLink>
                                ))}
                           </styles.MenuSubItem>
                       ))}
                       </styles.MenuSubItemWrapper>
                   }
               </styles.MenuItem>
           ))}
       </styles.RowWrapper>
    </styles.RowWrapper>
)};

export default HeaderMenu;
