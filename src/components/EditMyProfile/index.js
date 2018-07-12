import React from "react";
import moment from "moment";
import * as styles from "./styles";
import {
    FaCircleO,
    FaDotCircleO,
    FaListAlt,
    FaSignOut,
    FaUser,
    FaEdit,
    FaHome
} from 'react-icons/lib/fa/';
import DatePicker from 'react-datepicker';

import 'react-datepicker/dist/react-datepicker.css';
import './custom-styles.css';
import {getMenuItemIcon} from "../../utils";


const EditMyProfile = ({profile, isAuthenticated, keycloak, actions, history, userMenu, setObjectAttr, validatorEmail, validatorNumber, saveProfile}) => {
    const getInput = (indx, name, parametrName, object, setObjectAttr, validator, doValid, alertText) => {
        return (
            <styles.Row w400 big key={indx ? "row" + indx : "row"}>
                <styles.Column w220>
                    <styles.Label rm15 fs14>{parametrName}</styles.Label>
                </styles.Column>
                <styles.Input redAlert={(doValid && !validator)} onChange={(val) => {
                    setObjectAttr(val.target.value, name)
                }} value={object[name]} placeholder={parametrName}/>
                {(doValid && !validator) && <styles.Label redAlert>{alertText}</styles.Label>}
            </styles.Row>)
    };

    return (
        <styles.ContentWrapper>
            <styles.Row>
                <styles.Column rightside w220 rm25>
                    <styles.MenuWrapper>
                        <styles.MenuList>
                            {userMenu && userMenu.map((menuItem) => {
                                const icon = getMenuItemIcon(menuItem);

                              return (
                                    <styles.MenuItem key={menuItem.name} onClick={() => {
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

                    <styles.Row fromStart mb25 mt25><FaListAlt style={{color: "#26a9e0"}}/>
                        <styles.Label lm15 bold blue fs16>Личные данные</styles.Label>
                    </styles.Row>
                    <styles.Row>
                        {getInput(1, "lastName", "Фамилия", profile, setObjectAttr, true, false, "")}
                    </styles.Row>
                    <styles.Row>
                        {getInput(2, "firstName", "Имя", profile, setObjectAttr, true, false, "")}
                    </styles.Row>
                    <styles.Row>
                        {getInput(3, "middleName", "Отчество", profile, setObjectAttr, true, false, "")}
                    </styles.Row>
                    <styles.Row w400>
                        <styles.Column w220>
                            <styles.Label rm15 fs14>Пол</styles.Label>
                        </styles.Column>
                        <styles.Column w100>
                            <styles.Row mt0>
                                {!(profile.sex === 'male') && <FaCircleO style={{width: 60}}
                                                                         onClick={() => {
                                                                             setObjectAttr("male", "sex");
                                                                         }}/>}
                                {profile.sex === 'male' &&
                                <FaDotCircleO style={{color: "#26a9e0", width: 60}}
                                              onClick={() => {
                                                  setObjectAttr("male", "sex");
                                              }}/>}
                                <styles.Label rm15 fs14>Мужской</styles.Label>
                            </styles.Row>
                        </styles.Column>
                        <styles.Column w100>
                            <styles.Row mt0>
                                {!(profile.sex === 'female') && <FaCircleO style={{width: 60}}
                                                                           onClick={() => {
                                                                               setObjectAttr("female", "sex");
                                                                           }}/>}
                                {profile.sex === 'female' &&
                                <FaDotCircleO style={{color: "#26a9e0", width: 60}}
                                              onClick={() => {
                                                  setObjectAttr("female", "sex");
                                              }}/>}
                                <styles.Label rm15 fs14>Женский</styles.Label>
                            </styles.Row>
                        </styles.Column>
                    </styles.Row>
                    <styles.Row w400>
                        <styles.Column w220>
                            <styles.Label rm15 fs14>Дата рождения</styles.Label>
                        </styles.Column>
                        <DatePicker
                            dateFormat="DD/MM/YY"
                            selected={moment(profile.birthdate, "DD.MM.YYYY").isValid() ? moment(profile.birthdate, "DD.MM.YYYY") : moment()}
                            onChange={(date, b, c) => {
                                console.log("datepicker", date, b, c);
                                setObjectAttr(date.format("DD.MM.YYYY"), "birthdate")
                            }}/>
                    </styles.Row>
                    <styles.Row>
                        {getInput(4, "email", "Эл. почта", profile, setObjectAttr, validatorEmail(profile.email), true, "")}
                    </styles.Row>
                    <styles.Row>
                        {getInput(5, "phoneNumber", "Телефон", profile, setObjectAttr, validatorNumber(profile.phoneNumber), true, "")}
                    </styles.Row>
                    <styles.OrderButton onClick={saveProfile}>Сохранить изменения</styles.OrderButton>
                </styles.Column>
            </styles.Row>
        </styles.ContentWrapper>
    );
};

export default EditMyProfile;
