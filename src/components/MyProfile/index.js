import React from "react";
import ReactDOMServer from 'react-dom/server';
import * as styles from "./styles";
import {
    FaPhone,
    FaBook,
    FaShoppingCart,
    FaListAlt,
    FaSignOut,
    FaUser,
    FaEdit,
    FaHome
} from 'react-icons/lib/fa/';
import Checkbox from "../simpleComponents/Checkbox";



const MyProfile = ({profile, isAuthenticated, keycloak, actions, history, userMenu, orderList}) => {
    return (
        <styles.ContentWrapper>
            <styles.Row>
                <styles.Column rightside w220 rm25>
                    <styles.MenuWrapper>
                        <styles.MenuList>
                            {userMenu && userMenu.map((menuItem) => {
                                const icon = menuItem.url === "/profile" ?
                                    <FaUser style={{verticalAlign: "text-top"}}/> :
                                    menuItem.url === "/home" ? <FaHome style={{verticalAlign: "text-top"}}/> :
                                        menuItem.url === "/admin" ?
                                            <FaEdit style={{verticalAlign: "text-top"}}/> : null;
                                return (
                                    <styles.MenuItem onClick={() => {
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
                    <styles.Row fromStart mb25 mt25><FaUser style={{color: "#26a9e0"}}/>
                        <styles.Label lm15 bold blue fs18>Мой профиль</styles.Label>
                    </styles.Row>

                    <styles.Row fromStart mb25 mt25><FaListAlt style={{color: "#26a9e0"}}/>
                        <styles.Label lm15 bold blue fs16>Личные данные</styles.Label>
                    </styles.Row>

                    <styles.Label fs14>{profile.lastName} {profile.firstName} {profile.middleName}</styles.Label>

                    <styles.Row fromStart mt25>
                        <styles.Column leftside >
                            <styles.Label fs12 gray>Эл. почта</styles.Label>
                            <styles.Label fs14>{profile.email}</styles.Label>
                        </styles.Column>
                    </styles.Row>

                    <styles.Row fromStart mb25 mt25><FaListAlt style={{color: "#26a9e0"}}/>
                        <styles.Label lm15 bold blue fs16>Активные заказы</styles.Label>
                    </styles.Row>
                    {(orderList && orderList.length>0) && <styles.CartWrapper>
                        <styles.CartTableHeader>
                            <styles.CartTableHeaderItem w250>Заказ №</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w200>Статус</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w180>К оплате</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w220>Способ оплаты</styles.CartTableHeaderItem>
                            <styles.CartTableHeaderItem w150></styles.CartTableHeaderItem>
                        </styles.CartTableHeader>
                        {orderList.map((order, indx) => (
                            <styles.CartOrderItem chet={((indx+1)%2)==0} key={"item" + indx} last={indx === (profile.activeOrders.length - 1)}>
                                <styles.CartTableBodyItem ml15 w250>
                                    <styles.Label bold fs14>{order.id}</styles.Label>
                                    <styles.Label fs12>Товаров: {order.orderItemList &&
                                    order.orderItemList.reduce((accumulator, item) => (item.count + accumulator), 0)}</styles.Label>
                                </styles.CartTableBodyItem>
                                <styles.CartTableBodyItem w200>
                                    {order.status === 'canceled' && <styles.Label bold gray fs14>Отменен</styles.Label>}
                                    {order.status === 'shipping' &&
                                    <styles.Label bold gray fs14>Отправлен</styles.Label>}
                                    {order.status === 'unpaiment' &&
                                    <styles.Label bold gray fs14>Неоплачен</styles.Label>}
                                </styles.CartTableBodyItem>

                                <styles.CartTableBodyItem w180>
                                    <styles.Label fs14>{order.totalPrice} ₽</styles.Label>
                                </styles.CartTableBodyItem>

                                <styles.CartTableBodyItem w220>
                                    {order.paymentMethod==='cash' && <styles.Label fs14>наличными</styles.Label>}
                                    {order.paymentMethod==='card' && <styles.Label fs14>по карте</styles.Label>}
                                    {order.paymentMethod==='visa' && <styles.Label fs14>карта виза</styles.Label>}
                                    {order.paymentMethod==='' && <styles.Label fs14>не указан</styles.Label>}
                                </styles.CartTableBodyItem>

                                <styles.CartTableBodyItem w150>
                                    <styles.SimpleLink to={"/order/" + order.id} >
                                        <styles.Label fs12 gray underline>Подробнее</styles.Label>
                                    </styles.SimpleLink>
                                </styles.CartTableBodyItem>
                            </styles.CartOrderItem>
                        ))}
                    </styles.CartWrapper>}
                    {(!orderList || !orderList.length>0) && <styles.Label fs14 gray>У Вас нет активных заказов</styles.Label>}

                    <styles.Column mt25 gray leftside >
                        <styles.Row fromStart mt25 mb25>
                            <styles.Column lm25 w220 leftside >
                                <styles.Row fromStart mb25 fs14><styles.Label bold fs14>Личные данные</styles.Label></styles.Row>
                                <styles.SimpleLink to={"/edit-profile/"} >
                                    <styles.Label mb10  gray fs14 underline>Редактировать данные</styles.Label>
                                </styles.SimpleLink>
                                <styles.SimpleLink to={"/urist-face/"} >
                                    <styles.Label mb10  gray fs14 underline>Юридическое лицо</styles.Label>
                                </styles.SimpleLink>
                                <styles.SimpleLink to={"/accaunt-settings/"} >
                                    <styles.Label mb10  gray fs14 underline>Настройки аккаунта</styles.Label>
                                </styles.SimpleLink>
                            </styles.Column>
                            <styles.Column w220 leftside >
                                <styles.Row fromStart mb25 fs14><styles.Label bold fs14>Бонусная карта</styles.Label></styles.Row>
                                <styles.SimpleLink to={"/bonus-cart/"} >
                                    <styles.Label mb10  gray fs14 underline>Карта Любимого Покупателя</styles.Label>
                                </styles.SimpleLink>
                            </styles.Column>
                            <styles.Column w220 leftside >
                                <styles.Row fromStart mb25 fs14><styles.Label bold fs14>Заказы</styles.Label></styles.Row>
                                <styles.SimpleLink to={"/order-list/active"} >
                                    <styles.Label mb10  gray fs14 underline>Активные</styles.Label>
                                </styles.SimpleLink>
                                <styles.SimpleLink to={"/order-list/archived"} >
                                    <styles.Label mb10  gray fs14 underline>Архив</styles.Label>
                                </styles.SimpleLink>
                            </styles.Column>
                        </styles.Row>
                        <styles.Row fromStart mb25>
                            <styles.Column lm25 w220 leftside >
                                <styles.Row fromStart mb25 fs14><styles.Label bold fs14>Закладки</styles.Label></styles.Row>
                                <styles.SimpleLink to={"/bookmark/want"} >
                                    <styles.Label mb10 gray fs14 underline>Хочу почитать</styles.Label>
                                </styles.SimpleLink>
                                <styles.SimpleLink to={"/bookmark/wait"} >
                                    <styles.Label mb10 gray fs14 underline>Жду</styles.Label>
                                </styles.SimpleLink>
                            </styles.Column>
                            <styles.Column w220 leftside >
                                <styles.Row fromStart mb25 fs14><styles.Label bold fs14>Корзина </styles.Label></styles.Row>
                                <styles.SimpleLink to={"/cart"} >
                                    <styles.Label mb10 gray fs14 underline>Интернет-магазин</styles.Label>
                                </styles.SimpleLink>
                            </styles.Column>
                        </styles.Row>
                    </styles.Column>
                </styles.Column>
            </styles.Row>
        </styles.ContentWrapper>
    );
};

export default MyProfile;
