import React from "react";
import * as styles from "./styles";
import { Link } from "react-router-dom";

const HeaderMenu = (props) => (
    <styles.RowWrapper full>
       <styles.RowWrapper>
           {props.menuItems && props.menuItems.map((item, indx)=>(
               <styles.MenuItem key={"mi"+indx}>
                   <styles.MenuItemHeadWrapper>
                     <styles.TextLink to="/"><styles.MenuBoldText>{item.head}</styles.MenuBoldText></styles.TextLink>
                   </styles.MenuItemHeadWrapper>
                   {item.subItems &&
                       <styles.MenuSubItemWrapper>
                       {item.subItems.map((subItem, indx2)=>(
                           <styles.MenuSubItem key={"smi"+indx2}>
                               {subItem.name && <styles.MenuBoldText>{subItem.name}</styles.MenuBoldText>}
                               {subItem.links && subItem.links.map((link, indx3) =>(
                                   <styles.MenuSubItemLink key={"smi"+indx3}>
                                       <styles.TextLink to={link.link}>{link.title}</styles.TextLink>
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
);

export default HeaderMenu;
