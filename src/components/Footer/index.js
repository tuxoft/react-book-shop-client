import React from "react";
import * as styles from "./styles";
import {FaBook } from 'react-icons/lib/fa/';
import {TiShoppingCart} from 'react-icons/lib/ti/';
import {MdEmail} from 'react-icons/lib/md/';
import SearchInput from "../simpleComponents/SearchInput/index";

const FooterBody = (props) => (
    <styles.FooterWrapper>
        {props.footerItems && props.footerItems.map((item, idx1) => (
          <styles.ColWrapper key={idx1}>
            <styles.ColTitle>
              {item.name === "В наших магазинах"?<FaBook style={{verticalAlign: "text-top"}}/>:item.name === "В интернет-магазине"?<TiShoppingCart style={{verticalAlign: "text-top"}}/>:null}{" "}{item.name}
            </styles.ColTitle>
            <styles.ColUl>
              {item.subItems && item.subItems.map((subItem, idx2) => (
                <styles.ColLi key={idx1 + '-' +idx2}><styles.TextLink to={subItem.url?subItem.url:"/"}>{subItem.name}</styles.TextLink></styles.ColLi>
              ))}
            </styles.ColUl>
          </styles.ColWrapper>
        ))}
        <styles.ColWrapper>
            <styles.ColTitle>
                <MdEmail style={{verticalAlign: "text-top"}}/> подписка на новости
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
