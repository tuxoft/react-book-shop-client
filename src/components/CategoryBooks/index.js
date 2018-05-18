import React from "react";
import * as styles from "./styles";
import BookCard from "../../components/BookCard/index";
const navigationSplitter = require("../../assets/images/arrow.png");

const CategoryBooks = ({ category, navigationMenuTop, navigationMenuLeft }) => (
  <styles.HomeWrapper>
    <styles.NavigationLeftColumn>
      {navigationMenuLeft && navigationMenuLeft.map((menuItem, indx1) => (
        <styles.NavigationLeftMenuItemWrapper key={"leftNavMenu-"+indx1}>
          <styles.NavigationLeftMenuItemNameWrapper>
            <styles.TextLink to={menuItem.url?menuItem.url:"/"}><styles.BoldText>{menuItem.name}</styles.BoldText></styles.TextLink>
          </styles.NavigationLeftMenuItemNameWrapper>
          {menuItem.subItems && menuItem.subItems.map((subItem, indx2) => (
            <styles.NavigationLeftMenuItemSubItemWrapper key={"leftNavMenu-subItem-"+indx2}>
              <styles.TextLink to={subItem.url?subItem.url:"/"}>{subItem.name}</styles.TextLink>
            </styles.NavigationLeftMenuItemSubItemWrapper>
          ))}
        </styles.NavigationLeftMenuItemWrapper>
      ))}
    </styles.NavigationLeftColumn>
    <styles.BooksWrapper>
      <styles.NavigationTopRow>
        {navigationMenuTop && navigationMenuTop.map((menuItem, indx) => {
          if (indx === 0) {
            return (
              <styles.NavigationItemWrapper key={"meniItemTop-"+indx}>
                <styles.NavigationItem to={menuItem.url}>{menuItem.name}</styles.NavigationItem>
              </styles.NavigationItemWrapper>
            )
          } else {
            return (
              <styles.NavigationItemWrapper key={"meniItemTop-"+indx}>
                <styles.NavigationItemSplitter src={navigationSplitter}/>
                <styles.NavigationItem to={menuItem.url}>{menuItem.name}</styles.NavigationItem>
              </styles.NavigationItemWrapper>
            )
          }
        })}
      </styles.NavigationTopRow>
      <styles.CenterSide>
        <styles.BlueLabel >{category.name}</styles.BlueLabel>
      </styles.CenterSide>

      <styles.RowWrapper>
        {category.bookList && category.bookList.map((book, indx)=><BookCard key={"categoryBooks"+indx} book={book}/>)}
      </styles.RowWrapper>
    </styles.BooksWrapper>

  </styles.HomeWrapper>

);

export default CategoryBooks;
