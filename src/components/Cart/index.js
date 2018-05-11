import React from "react";
import * as styles from "./styles";
import Checkbox from "../simpleComponents/Checkbox";


const Cart = ({cart, block, boxItemsCount, setBookCount}) => (
    <styles.CartWrapper>
        <styles.CartTabs>
            <styles.CartTab first active={block === "cart"}>Корзина: {boxItemsCount}</styles.CartTab>
        </styles.CartTabs>
        <styles.CartWrapper>
            <styles.CheckBoxWrapper>
                <Checkbox labelText="Выбрать все" onClick={() => {
                    console.log("select all");
                }}/>
            </styles.CheckBoxWrapper>

            {(cart.cartItemList && boxItemsCount !== 0) &&
            <styles.CartTableHeader>
                <styles.CartTableHeaderItem name>Товар</styles.CartTableHeaderItem>
                <styles.CartTableHeaderItem count>Количество</styles.CartTableHeaderItem>
                <styles.CartTableHeaderItem kg>Вес</styles.CartTableHeaderItem>
                <styles.CartTableHeaderItem price>Сумма</styles.CartTableHeaderItem>
            </styles.CartTableHeader>
            }
            {(!cart.cartItemList || boxItemsCount === 0) &&
            <styles.Label bold>Ваша корзина пуста</styles.Label>
            }
            {(cart.cartItemList && boxItemsCount !== 0) && cart.cartItemList.map((item, indx) => (
                <styles.CartOrderItem key={"item" + indx}>
                    <styles.CartOrderItemCheckbox>
                        <Checkbox onClick={() => {
                            console.log("select all");
                        }}/>
                    </styles.CartOrderItemCheckbox>
                    <styles.CartOrderItemCover>
                        <styles.SimpleLink to={"/book/" + item.book.id}>
                            <styles.CartOrderItemCoverImage
                                src={item.book.coverUrl ? item.book.coverUrl : "http://placehold.it/100x140"}/>
                        </styles.SimpleLink>
                    </styles.CartOrderItemCover>
                    <styles.CartOrderItemDescription>
                        <styles.CartOrderItemDescriptionInfo>
                            <styles.Label bold>{item.book.title}</styles.Label>
                            {item.book.authors && item.book.authors.map((obj, indx2) => (
                                <styles.Label gray
                                              key={"autor" + indx2}>{obj.author.lastName ? obj.author.lastName : ""} {obj.author.firstName ? obj.author.firstName.substring(0, 1) + "." : ""} {obj.author.middleName ? obj.author.middleName.substring(0, 1) + "." : ""}</styles.Label>
                            ))}
                        </styles.CartOrderItemDescriptionInfo>
                        <styles.CartOrderItemDescriptionRightInfo>

                            <styles.CartOrderItemDescriptionRightInfoCountControl>
                                <styles.CartOrderItemDescriptionRightInfo>
                                    <styles.Button onClick={(val) => {setBookCount(item.book.id, item.count - 1)}}>-</styles.Button>
                                    <styles.Input onChange={(val) => {
                                        setBookCount(item.book.id, val.target.value)
                                    }} value={item.count}/>
                                    <styles.Button onClick={(val) => {setBookCount(item.book.id, item.count + 1)}}>+</styles.Button>
                                </styles.CartOrderItemDescriptionRightInfo>
                            </styles.CartOrderItemDescriptionRightInfoCountControl>

                            <styles.CartOrderItemDescriptionRightInfoKg>{item.book.weight + " г"}</styles.CartOrderItemDescriptionRightInfoKg>
                            <styles.CartOrderItemDescriptionRightInfoPrice>
                                <styles.Label fs16 bold>{item.book.price * item.count}</styles.Label>
                                <styles.Label fs12 gray>{item.book.price} ₽ х {item.count} шт.</styles.Label>
                            </styles.CartOrderItemDescriptionRightInfoPrice>
                        </styles.CartOrderItemDescriptionRightInfo>
                    </styles.CartOrderItemDescription>
                </styles.CartOrderItem>))
            }
        </styles.CartWrapper>
    </styles.CartWrapper>
);

export default Cart;
