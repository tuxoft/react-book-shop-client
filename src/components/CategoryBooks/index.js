import React from "react";
import * as styles from "./styles";
import BookCard from "../../components/BookCard/index";
import Spinner  from 'react-spinkit'

const navigationSplitter = require("../../assets/images/arrow.png");

const CategoryBooks = ({booksByCategory, navigationMenuTop, navigationMenuLeft, spinner}) => (
    <styles.HomeWrapper>
        <styles.NavigationLeftColumn>
            {navigationMenuLeft && navigationMenuLeft.map((menuItem, indx1) => (
                <styles.NavigationLeftMenuItemWrapper key={"leftNavMenu-" + indx1}>
                    <styles.NavigationLeftMenuItemNameWrapper>
                        <styles.TextLink to={menuItem.url ? menuItem.url : "/"}>
                            <styles.BoldText>{menuItem.name}</styles.BoldText>
                        </styles.TextLink>
                    </styles.NavigationLeftMenuItemNameWrapper>
                    {menuItem.subItems && menuItem.subItems.map((subItem, indx2) => (
                        <styles.NavigationLeftMenuItemSubItemWrapper key={"leftNavMenu-subItem-" + indx2}>
                            <styles.TextLink to={subItem.url ? subItem.url : "/"}>{subItem.name}</styles.TextLink>
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
                            <styles.NavigationItemWrapper key={"meniItemTop-" + indx}>
                                <styles.NavigationItem to={menuItem.url}>{menuItem.name}</styles.NavigationItem>
                            </styles.NavigationItemWrapper>
                        )
                    } else {
                        return (
                            <styles.NavigationItemWrapper key={"meniItemTop-" + indx}>
                                <styles.NavigationItemSplitter src={navigationSplitter}/>
                                <styles.NavigationItem to={menuItem.url}>{menuItem.name}</styles.NavigationItem>
                            </styles.NavigationItemWrapper>
                        )
                    }
                })}
            </styles.NavigationTopRow>
            {navigationMenuTop && navigationMenuTop[navigationMenuTop.length - 1] &&
            <styles.CenterSide>
                <styles.BlueLabel>{navigationMenuTop[navigationMenuTop.length - 1].name}</styles.BlueLabel>
            </styles.CenterSide>}

            <styles.RowWrapper>
                {booksByCategory && booksByCategory.map((book, indx) => <BookCard key={"booksByCategory-" + indx}
                                                                                  book={book}/>)}
            </styles.RowWrapper>

            { spinner && <styles.RowWrapper center>
                <Spinner name="ball-spin-fade-loader" color="#28A9E0"/>
            </styles.RowWrapper> }
        </styles.BooksWrapper>

    </styles.HomeWrapper>

);

export default CategoryBooks;
