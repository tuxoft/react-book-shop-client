import React from "react";
import * as styles from "./styles";
import {FaBook } from 'react-icons/lib/fa/';
import {TiShoppingCart} from 'react-icons/lib/ti/';
import {MdEmail} from 'react-icons/lib/md/';
import SearchInput from "../simpleComponents/SearchInput/index";

const FooterBody = (props) => (
    <styles.FooterWrapper>
        <styles.ColWrapper>
            <styles.ColTitle>
               <FaBook /> в наших магазинах
            </styles.ColTitle>
            <styles.ColUl>
                <styles.ColLi><styles.TextLink to="/">Адреса магазинов</styles.TextLink></styles.ColLi>
                <styles.ColLi><styles.TextLink to="/">Услуги</styles.TextLink></styles.ColLi>
                <styles.ColLi><styles.TextLink to="/">Наши партнеры</styles.TextLink></styles.ColLi>
                <styles.ColLi><styles.TextLink to="/">О компании</styles.TextLink></styles.ColLi>
                <styles.ColLi><styles.TextLink to="/">Хотите у нас работать?</styles.TextLink></styles.ColLi>
            </styles.ColUl>
        </styles.ColWrapper>

        <styles.ColWrapper>
            <styles.ColTitle>
                <TiShoppingCart /> в интернет магазине
            </styles.ColTitle>
            <styles.ColUl>
                <styles.ColLi><styles.TextLink to="/">Доставка и оплата</styles.TextLink></styles.ColLi>
                <styles.ColLi><styles.TextLink to="/">Акции</styles.TextLink></styles.ColLi>
                <styles.ColLi><styles.TextLink to="/">Книги</styles.TextLink></styles.ColLi>
                <styles.ColLi><styles.TextLink to="/">Сувениры</styles.TextLink></styles.ColLi>
                <styles.ColLi><styles.TextLink to="/">Правила продажи</styles.TextLink></styles.ColLi>
                <styles.ColLi><styles.TextLink to="/">Политика конфиденциальности</styles.TextLink></styles.ColLi>
            </styles.ColUl>
        </styles.ColWrapper>

        <styles.ColWrapper>
            <styles.ColTitle>
                <MdEmail /> подписка на новости
            </styles.ColTitle>
            <styles.MailBlock>
                <styles.ControlLabel>Подпишитесь на нас:</styles.ControlLabel>
                <styles.SubscribeWrapper>
                <SearchInput
                    inputProps={{
                        placeholder: "E-mail",
                        onChange: (val)=>{props.onChangeText(val.target.value)},
                        value: props.email
                    }} short/>
                <styles.Button onClick={props.onSubscription}>Подписаться</styles.Button>
                </styles.SubscribeWrapper>
            </styles.MailBlock>
        </styles.ColWrapper>
    </styles.FooterWrapper>
);

export default FooterBody;
