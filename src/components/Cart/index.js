import React from "react";
import * as styles from "./styles";
import Checkbox from "../simpleComponents/Checkbox";


const Cart = ({cart, block, cartCount, reservCount}) => (
    <styles.CartWrapper>
        <styles.CartTabs>
            <styles.CartTab first active={block==="cart"}>Корзина: {cartCount}</styles.CartTab>
            <styles.CartTab active={block==="reserv"}>Резерв: {reservCount}</styles.CartTab>
        </styles.CartTabs>
        <styles.CartWrapper>
            <styles.CheckBoxWrapper>
                <Checkbox labelText="Выбрать все" onClick={()=>{console.log("select all");}}/>
            </styles.CheckBoxWrapper>
            <styles.CartTableHeader>
                <styles.CartTableHeaderItem name>Товар </styles.CartTableHeaderItem>
                <styles.CartTableHeaderItem count>Количество </styles.CartTableHeaderItem>
                <styles.CartTableHeaderItem kg>Вес </styles.CartTableHeaderItem>
                <styles.CartTableHeaderItem price>Сумма </styles.CartTableHeaderItem>
            </styles.CartTableHeader>

            <styles.CartOrderItem>
                <styles.CartOrderItemCheckbox>
                    <Checkbox onClick={()=>{console.log("select all");}}/>
                </styles.CartOrderItemCheckbox>
                <styles.CartOrderItemCover>
                    <styles.SimpleLink to="/">
                        <styles.CartOrderItemCoverImage src="http://placehold.it/100x140"/>
                    </styles.SimpleLink>
                </styles.CartOrderItemCover>
                <styles.CartOrderItemDescription>
                    <styles.CartOrderItemDescriptionInfo>
                        <styles.Label bold>Джунгли. В природе есть только один закон - выживание. Реальная история</styles.Label>
                        <styles.Label gray>Гинсберг Й.</styles.Label>
                    </styles.CartOrderItemDescriptionInfo>
                    <styles.CartOrderItemDescriptionRightInfo>
                        <styles.CartOrderItemDescriptionRightInfoCountControl>

                        </styles.CartOrderItemDescriptionRightInfoCountControl>
                        <styles.CartOrderItemDescriptionRightInfoKg>500 г</styles.CartOrderItemDescriptionRightInfoKg>
                        <styles.CartOrderItemDescriptionRightInfoPrice>
                            <styles.Label fs16 bold>300</styles.Label>
                            <styles.Label fs12 gray>382 ₽ х 1 шт.</styles.Label>
                        </styles.CartOrderItemDescriptionRightInfoPrice>
                    </styles.CartOrderItemDescriptionRightInfo>
                </styles.CartOrderItemDescription>
            </styles.CartOrderItem>

        </styles.CartWrapper>
    </styles.CartWrapper>
);

export default Cart;
