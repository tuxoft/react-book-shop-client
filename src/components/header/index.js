import React from "react";
import * as styles from "./styles";
import {FaSearch} from 'react-icons/lib/fa/';
import SearchInput from "../simpleComponents/searchInput/index";
import HeaderMenu from "../HeaderMenu/index";
import {Link} from "react-router-dom";

const HeaderBody = (props) => (
    <styles.HeaderWrapper>
        <styles.RowWrapper>
            <styles.LogoWrapper>
                <Link to={`/`}>
                    <styles.Image src="http://placehold.it/160x60"/>
                </Link>
            </styles.LogoWrapper>
            <SearchInput
                inputProps={{
                    placeholder: "Вводи поисковое значение",
                    onChange: props.onChangeSearch,
                    value: props.searchValue
                }}
                rightPictureClick={() => {
                    props.onSearch()
                }}
                rightPicture
                picture={FaSearch}/>
            <styles.BucketWrapper>
                <styles.TextLink to={`/box`}><styles.ImageBucket src="http://placehold.it/65x60"/></styles.TextLink>
                <styles.BucketInfoWrapper>
                    <styles.TextLink to={`/box`}><b>Корзина: {props.boxItemsCount} </b></styles.TextLink>
                    <styles.TextLink to={`/box/reserv`}>Резерв: {props.boxItemsReservCount}</styles.TextLink>
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
