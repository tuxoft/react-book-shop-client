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
import {getMenuItemIcon} from "../../utils";


const OrderListStatus = ({orderList, isAuthenticated, keycloak, actions, history, userMenu, match}) => {

    if (!orderList) return null;
    return (
        <styles.ContentWrapper>
            <styles.Row>
                <styles.Column rightside w220 rm25>
                    <styles.MenuWrapper>
                        <styles.MenuList>
                            {userMenu && userMenu.map((menuItem) => {
                                const icon = getMenuItemIcon(menuItem);
                                return (
                                    <styles.MenuItem onClick={() => {
                                        history.push(menuItem.url)
                                    }}>
                                        {icon}{" "}{menuItem.name}
                                    </styles.MenuItem>);
                            })}

                            <styles.MenuItem onClick={() => {
                                actions.app.authenticationLogout(keycloak, isAuthenticated);
                            }}><FaSignOut/>{" "}Выйти
                            </styles.MenuItem>
                        </styles.MenuList>
                    </styles.MenuWrapper>
                </styles.Column>

                <styles.Column leftside w1000>
                    <styles.Label bold blue mb25><FaShoppingCart style={{color: "#26a9e0"}}/>{" "}Заказы</styles.Label>
                    <styles.TopTab>
                        <styles.CartTableBodyItem pl20 vcenter ><styles.SimpleLink to={"/order-list/active"} >
                            <styles.Label fs14 black underline active={match.params.id==='active'}>Активные</styles.Label>
                        </styles.SimpleLink></styles.CartTableBodyItem>
                        <styles.CartTableBodyItem pl20 vcenter><styles.SimpleLink to={"/order-list/all"} >
                            <styles.Label fs14 black underline active={match.params.id==='all'}>Все</styles.Label>
                        </styles.SimpleLink></styles.CartTableBodyItem>
                        <styles.CartTableBodyItem pl20 vcenter ><styles.SimpleLink to={"/order-list/closed"} >
                            <styles.Label fs14 black underline active={match.params.id==='closed'}>Завершённые</styles.Label>
                        </styles.SimpleLink></styles.CartTableBodyItem>
                        <styles.CartTableBodyItem pl20 vcenter><styles.SimpleLink to={"/order-list/canceled"} >
                            <styles.Label fs14 black underline active={match.params.id==='canceled'}>Отмененные</styles.Label>
                        </styles.SimpleLink></styles.CartTableBodyItem>
                    </styles.TopTab>

                    <styles.CartWrapper>
                        <styles.CartTableHeader>
                            <styles.CartTableHeaderItem w250>Заказ №</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w200>Статус</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w180>К оплате</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w220>Способ оплаты</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w150></styles.CartTableHeaderItem>
                        </styles.CartTableHeader>
                        {(orderList && orderList.length !== 0) && orderList.map((order, indx) => (
                            <styles.CartOrderItem chet={((indx+1)%2)==0} key={"item" + indx} last={indx === (orderList.length - 1)}>
                                <styles.CartTableBodyItem ml15 w250>
                                    <styles.Label bold fs14>{order.id}</styles.Label>
                                    <styles.Label fs12>Товаров: {order.orderItemList &&
                                    order.orderItemList.reduce((accumulator, item) => (item.count + accumulator), 0)}</styles.Label>
                                </styles.CartTableBodyItem>
                                <styles.CartTableBodyItem w200>
                                    <styles.Label bold gray fs14>{order.status}</styles.Label>
                                </styles.CartTableBodyItem>

                                <styles.CartTableBodyItem w180>
                                    <styles.Label fs14>{order.totalCost} ₽</styles.Label>
                                </styles.CartTableBodyItem>

                                <styles.CartTableBodyItem w220>
                                    <styles.Label fs14>{order.paymentMethodText}</styles.Label>
                                </styles.CartTableBodyItem>

                                <styles.CartTableBodyItem w150>
                                    <styles.SimpleLink to={"/order/" + order.id} >
                                        <styles.Label fs12 gray underline>Подробнее</styles.Label>
                                    </styles.SimpleLink>
                                </styles.CartTableBodyItem>
                            </styles.CartOrderItem>
                        ))}
                    </styles.CartWrapper>

                </styles.Column>
            </styles.Row>
        </styles.ContentWrapper>
    );
};

export default OrderListStatus;
