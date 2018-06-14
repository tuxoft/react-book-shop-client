import React from "react";
import * as styles from "./styles";
import HeaderMenu from "../HeaderMenu/index";
import {Link} from "react-router-dom";
import ProfileBlock from "../../containers/ProfileBlock";
const logo = require("../../assets/images/logo.png");

const AdminHeader = (props) => (
  <styles.HeaderWrapper>
    <ProfileBlock/>
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
