import React from "react";
import * as styles from "./styles";
import {FaSearch} from 'react-icons/lib/fa/';
import SearchInput from "../simpleComponents/SearchInput/index";
import HeaderMenu from "../HeaderMenu/index";
import {Link} from "react-router-dom";
const logo = require("../../assets/images/logo.png");
const cart = require("../../assets/images/cart.png");

const AdminHeader = (props) => (
  <styles.HeaderWrapper>
    <styles.RowWrapper>
      <styles.LogoWrapper>
        <Link to={`/`}>
          <styles.Image src={logo}/>
        </Link>
      </styles.LogoWrapper>
      <styles.Title>
        Администрирование
      </styles.Title>
      <styles.EmptyWrapper>
      </styles.EmptyWrapper>
    </styles.RowWrapper>

    <styles.RowWrapper>
      <HeaderMenu
        menuItems={props.menuItems}
      />
    </styles.RowWrapper>

  </styles.HeaderWrapper>
);

export default AdminHeader;
