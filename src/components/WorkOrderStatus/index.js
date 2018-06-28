import React from "react";
import ReactDOMServer from 'react-dom/server';
import * as styles from "./styles";
import {
    FaPhone,
    FaCreditCardAlt,
    FaTruck,
    FaShoppingCart,
    FaSignOut,
    FaUser,
    FaEdit,
    FaHome
} from 'react-icons/lib/fa/';
import Checkbox from "../simpleComponents/Checkbox";
import {YMaps, Map, Placemark, Clusterer, ListBox, ListBoxItem,} from 'react-yandex-maps';
import { getAddress, formatDate } from "../../utils"


const WorkOrder = ({order, isAuthenticated, keycloak, actions, history, userMenu, searchWorkers, setOrderPay, setOrderWorker, setOrderStatus, setWorkStatus}) => {
    if (!order || !order.orderItemList) return null;
    return (
        <styles.ContentWrapper>
            <styles.Row>
                <styles.Column rightside w220 rm25>
                    <styles.MenuWrapper>
                        <styles.MenuList>
                            {userMenu && userMenu.map((menuItem, indx) => {
                                const icon = menuItem.url === "/profile" ?
                                    <FaUser style={{verticalAlign: "text-top"}}/> :
                                    menuItem.url === "/home" ? <FaHome style={{verticalAlign: "text-top"}}/> :
                                        menuItem.url === "/admin" ?
                                            <FaEdit style={{verticalAlign: "text-top"}}/> : null;
                                return (
                                    <styles.MenuItem key={"userMenu-"+indx} onClick={() => {
                                        history.push(menuItem.url)
                                    }}>
                                        {icon}{" "}{menuItem.name}
                                    </styles.MenuItem>);
                            })}

                            <styles.MenuItem onClick={() => {
                                actions.app.authenticationLogout(keycloak, isAuthenticated);
                            }}><FaSignOut/>{" "}Выйти</styles.MenuItem>
                        </styles.MenuList>
                    </styles.MenuWrapper>
                </styles.Column>
                <styles.Column leftside w1000>
                    <styles.Label bold blue>Заказ №{order.id}</styles.Label>
                    <styles.Label fs12 gray>(создан: {formatDate(order.createDate)})</styles.Label>

                    <styles.Row fromStart mb25 mt25><FaPhone style={{color: "#26a9e0"}}/>
                        <styles.Label lm15 bold blue>Контактные данные</styles.Label>
                    </styles.Row>
                    <styles.Label fs14>{order.lastName} {order.firstName} {order.middleName}</styles.Label>
                    <styles.Row fromStart>
                        <styles.Column leftside w220 rm25>
                            <styles.Label fs12 gray>Эл. почта</styles.Label>
                            <styles.Label fs14>{order.email}</styles.Label>
                        </styles.Column>
                        <styles.Column leftside w220 rm25>
                            <styles.Label fs12 gray>Телефон</styles.Label>
                            <styles.Label fs14>{order.phoneNumber}</styles.Label>
                        </styles.Column>
                        <styles.Column leftside w220 rm25>
                            <styles.Label fs12 gray>Способ оповещения</styles.Label>
                            {order.isTakeStatusSMS && <styles.Label fs14>СМС</styles.Label>}
                            {order.isTakeStatusEmail && <styles.Label fs14>Эл. почта</styles.Label>}
                        </styles.Column>
                    </styles.Row>

                    <styles.Row fromStart mb25 mt25><FaTruck style={{color: "#26a9e0"}}/>
                        <styles.Label lm15 bold blue>Доставка</styles.Label>
                    </styles.Row>
                    <styles.Row fromStart>
                        <styles.Column leftside w220 rm25>
                            <styles.Label fs12 gray>Способ доставки</styles.Label>
                            {order.sendType === "pickupPoint" &&
                            <styles.Label fs14>Пункт выдачи ({order.sendOrgName})</styles.Label>}
                            {order.sendType === "courierService" && <styles.Label fs14>Курьером ({order.sendOrgName})</styles.Label>}
                            {order.sendType === "mailService" && <styles.Label fs14>Почтой ({order.sendOrgName})</styles.Label>}
                        </styles.Column>
                        <styles.Column leftside w220 rm25>
                            <styles.Label fs12 gray>Дата и время</styles.Label>
                            <styles.Label fs14>{formatDate(order.deliveryDate)}</styles.Label>
                        </styles.Column>
                        <styles.Column leftside w220 rm25>
                            <styles.Label fs12 gray>Адрес</styles.Label>
                            <styles.Label fs14>{getAddress(order.addr)}</styles.Label>
                        </styles.Column>
                    </styles.Row>

                    <styles.Row fromStart  mb25 mt25><FaCreditCardAlt style={{color: "#26a9e0"}}/>
                        <styles.Label lm15 bold blue>Оплата</styles.Label>
                    </styles.Row>
                    <styles.Row fromStart>
                        <styles.Column leftside w220 rm25>
                            <styles.Label fs12 gray>Способ оплаты</styles.Label>
                            <styles.Label fs14>{order.paymentMethodText}</styles.Label>
                        </styles.Column>
                        <styles.Column leftside w220 rm25>
                            <styles.Label fs12 gray>стоимость доставки</styles.Label>
                            <styles.Label fs14>{order.sendPrice} ₽</styles.Label>
                            <styles.Label fs12 gray>Итого к оплате</styles.Label>
                            <styles.Label fs14>{order.totalCost} ₽</styles.Label>
                        </styles.Column>
                    </styles.Row>

                    <styles.Row fromStart  mb25 mt25><FaShoppingCart style={{color: "#26a9e0"}}/>
                        <styles.Label lm15 bold blue>Состав заказа</styles.Label>
                    </styles.Row>
                    <styles.CartWrapper>
                        <styles.CartTableHeader>
                            <styles.CartTableHeaderItem w450>Товар</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w100>Вес</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w80>Количество</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w100>Сумма</styles.CartTableHeaderItem>
                        </styles.CartTableHeader>
                        {(order.orderItemList && order.orderItemList.length !== 0) && order.orderItemList.map((item, indx) => (
                            <styles.SimpleLink to={"/book/" + item.book.id} key={"item" + indx}>
                                <styles.CartOrderItem last={indx === (order.orderItemList.length - 1)}>
                                    <styles.CartTableBodyItem w450>
                                        <styles.CartOrderItemCover>
                                            <styles.CartOrderItemCoverImage
                                                src={item.book.coverUrl ? item.book.coverUrl : "http://placehold.it/100x140"}></styles.CartOrderItemCoverImage>
                                        </styles.CartOrderItemCover>
                                        <styles.Column leftside w355>
                                            <styles.Label fs14 bold>{item.book.title}</styles.Label>
                                            {item.book.bookAuthors && item.book.bookAuthors.map((obj, indx2) => (
                                                <styles.Label fs14 gray
                                                              key={"autor" + indx2}>{obj.author.lastName ? obj.author.lastName : ""} {obj.author.firstName ? obj.author.firstName.substring(0, 1) + "." : ""} {obj.author.middleName ? obj.author.middleName.substring(0, 1) + "." : ""}</styles.Label>
                                            ))}
                                        </styles.Column>
                                    </styles.CartTableBodyItem>
                                    <styles.CartTableBodyItem w100>
                                        <styles.Label fs14>{item.book.weight} г</styles.Label>
                                    </styles.CartTableBodyItem>
                                    <styles.CartTableBodyItem w80>
                                        <styles.Label fs14>{item.count} шт.</styles.Label>
                                    </styles.CartTableBodyItem>
                                    <styles.CartTableBodyItem w100>
                                        <styles.Column>
                                            <styles.Label fs14 bold>{item.book.price*item.count} ₽</styles.Label>
                                            <styles.Label fs12 gray>{item.book.price} ₽ х {item.count} шт.</styles.Label>
                                        </styles.Column>
                                    </styles.CartTableBodyItem>
                                </styles.CartOrderItem>
                            </styles.SimpleLink>))
                        }
                    </styles.CartWrapper>
                    <styles.Column rightside w710>
                        <styles.Row fromEnd>
                            <styles.Label fs14>Общая сумма:</styles.Label>
                            <styles.Column rightside w100>
                                <styles.Label fs14>{order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0)} ₽</styles.Label>
                            </styles.Column>
                        </styles.Row>
                        {order && order.discount != "" && <styles.Row fromEnd mb25>
                        <styles.Label fs14>Скидка:</styles.Label>
                            <styles.Column rightside w100>
                                <styles.Label
                                  fs14>{order.discount} ₽
                                </styles.Label>
                            </styles.Column>
                        </styles.Row>}
                        <styles.Row fromEnd mb25>
                            <styles.Label fs14>Общий вес:</styles.Label>
                            <styles.Column rightside w100>
                                <styles.Label
                                    fs14>{order.orderItemList.reduce((accumulator, item) => ((item.book.weight * item.count) + accumulator), 0)} г
                                </styles.Label>
                            </styles.Column>
                        </styles.Row>

                        <styles.Row fromEnd>
                            <styles.Label fs14 bold>Итого без доставки:</styles.Label>
                            <styles.Column rightside w100>
                                <styles.Label fs14 bold>{order.orderItemList.reduce((accumulator, item) => ((item.book.price * item.count) + accumulator), 0) - order.discount} ₽</styles.Label>
                            </styles.Column>
                        </styles.Row>
                    </styles.Column>
                </styles.Column>

                <styles.Column rightside w220 rm25>
                    {order.workStatus=="unworked" &&
                        <styles.Column>
                            <styles.Label gray>НЕ В РАБОТЕ</styles.Label>
                        </styles.Column>
                    }

                    {order.workStatus=="inworked" &&
                        <styles.Column>
                            <styles.Label blue>В РАБОТЕ</styles.Label>
                        </styles.Column>
                    }

                    {order.workStatus=="finished" &&
                        <styles.Column>
                            <styles.Label gray>Завершен</styles.Label>
                        </styles.Column>
                    }
                </styles.Column>
            </styles.Row>
        </styles.ContentWrapper>
    );
};

export default WorkOrder;
