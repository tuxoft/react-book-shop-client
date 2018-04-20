import React from "react";
import * as styles from "./styles";
import {FaSearch} from 'react-icons/lib/fa/';
import SearchInput from "../simpleComponents/searchInput/index";
import HeaderMenu from "../HeaderMenu/index";
import { Link } from "react-router-dom";

const HeaderBody = (props) => (
    <styles.HeaderWrapper>
        <styles.RowWrapper>
        <styles.LogoWrapper>
            <Link  to={`/`}>
                <styles.Image src="http://placehold.it/160x60"/>
            </Link>
        </styles.LogoWrapper>
        <SearchInput
            inputProps={{
                placeholder: "Вводи значение",
                onChange: (val)=>{console.log("val", val.target.value)},
            }}
            rightPictureClick={(val)=>{console.log("val right")}}
            rightPicture
            picture={FaSearch}/>
            <styles.BucketWrapper>
                <styles.ImageBucket src="http://placehold.it/65x60"/>
                <styles.TextLink to={`/`}>Корзина</styles.TextLink>
            </styles.BucketWrapper>

        </styles.RowWrapper>

        <styles.RowWrapper>
            <HeaderMenu
                menuItems={
                    [
                        {
                            head: "menu1",
                            subItems: [{
                                name: "name1",
                                link: "/"
                            }, {
                                name: "name1",
                                link: "/"
                            }]
                        },
                        {head: "menu2"},
                        {head: "menu3"}
                    ]
                }
            />
        </styles.RowWrapper>

    </styles.HeaderWrapper>
);

export default HeaderBody;
