import React from "react";
import * as styles from "./styles";
import {FaSearch} from 'react-icons/lib/fa/';
import SearchInput from "../simpleComponents/SearchInput/index";
import HeaderMenu from "../HeaderMenu/index";
import ProfileBlock from "../../containers/ProfileBlock";
import {Link} from "react-router-dom";
const logo = require("../../assets/images/logo.png");
const cart = require("../../assets/images/cart.png");

const HeaderBody = (props) => (
    <styles.HeaderWrapper>
        <ProfileBlock/>
        <styles.RowWrapper>
            <styles.LogoWrapper>
                <Link to={`/`}>
                    <styles.Image src={logo}/>
                </Link>
            </styles.LogoWrapper>
            <SearchInput
                inputProps={{
                    placeholder: "Поиск...",
                    onChange: props.onChangeSearch,
                    value: props.searchValue
                }}
                rightPictureClick={() => {
                    props.onSearch()
                }}
                rightPicture
                picture={FaSearch}
                suggestions={props.suggestions}
            />
            <styles.BucketWrapper>
                <styles.TextLink to={`/cart`}><styles.ImageBucket src={cart}/></styles.TextLink>
                <styles.BucketInfoWrapper>
                    <styles.TextLink to={`/cart`}><b>Корзина: {props.boxItemsCount} </b></styles.TextLink>
                </styles.BucketInfoWrapper>
            </styles.BucketWrapper>

        </styles.RowWrapper>

        <styles.RowWrapper>
            <HeaderMenu
                menuItems={props.menuItems}
            />
        </styles.RowWrapper>

    </styles.HeaderWrapper>
);

export default HeaderBody;
