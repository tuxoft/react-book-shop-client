import React, {Component} from "react";
import {
    bindActionCreators,
    createStore,
    applyMiddleware,
    compose
} from "redux";
import {withLastLocation} from "react-router-last-location";
import {connect} from "react-redux";
import styled from "styled-components";
import Keycloak from "keycloak-js";
import axios from "axios";
import * as appActions from "../../store/app/actions";
import * as contentActions from "../../store/content/actions";
import Button from "../../components/simpleComponents/Button";
import * as appSelectors from "../../store/app/selectors";
import * as contentSelectors from "../../store/content/selectors";
import {Link} from "react-router-dom";
import Contur from "../../constants/contur";
import {FaSignIn, FaSignOut, FaChevronCircleDown, FaUser, FaHome, FaEdit} from 'react-icons/lib/fa/';

export const Control = styled.div`
    height: 100%;
    background: transparent;
    font-size: 14px;
    margin-left: 10px;
    min-width: 110px;
    white-space: nowrap;
    color: #fff;
    padding: 0;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    box-sizing: border-box;
`;

export const SimpleLink = styled((props) => <Link {...props} />)`
    text-decoration: none;
    height: 30px;
    background: #26a9e0;
    font-size: 14px;
    margin: 0 auto;
    min-width: 110px;
    white-space: nowrap;
    color: #fff;
    padding: 0 20px;
    display: flex;
    align-items: center;
    justify-content: center;
    width: 110px;
    height: 30px;
    border-radius: 5px;
    cursor: pointer;
    box-sizing: border-box;
`;

export const Wrapper = styled.div`
    background: #28A9E0;
    margin: 0px;
    color: #fff;
    padding: 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 30px;
    border-bottom: 1px solid #69c3e8;
    z-index: 100;
`;

export const UserMenuItem = styled.div`
    padding: 5px;
    cursor: pointer;
    &:hover {
        background-color: #b2b2b2;
        color: #fff;
    };
`;

export const UserMenuItemWrapper = styled.div`
    position: absolute;
    display: none;
    flex-direction: column;
    box-shadow: rgba(0, 0, 0, 0.3) 0px 2px 2px 0px;
    margin-top: 15px;
    padding-top: 10px;
    padding-bottom: 10px;
    background-color: #28A9E0;
    border: 1px solid #b2b2b2;
    border-radius: 10px;
    left: -19px;
    top: 10px;
    min-width: 230px;
    &:before, :after {
        content: ''; 
        position: absolute;
        left: 20px; top: -20px;
        border: 10px solid transparent;
        border-bottom: 10px solid #b2b2b2;
    };
    &:after {
        border-bottom: 10px solid #28A9E0;
        top: -19px; 
    };
`;


export const UserMenuWrapper = styled.div`
    font-size: 14px;
    display: block;
    min-width: 210px;
    margin-right: 20px;
    flex-direction: column;    
    align-content:stretch;
    position: relative;
    cursor: pointer;
    &:hover {             
        > ${UserMenuItemWrapper} {
            display: flex;
           }
    }    
`;

export const UserMenuTitle = styled.div`
    margin: 5px;
`;

class ProfileBlock extends Component {

    componentDidMount() {
        console.log("ProfileBlock init", this.props.isInitialized);
        const ENDPOINT = Contur.get().API;
        if (!this.props.isInitialized) {
            let kc = Keycloak({
                realm: "book-realm",
                url: ENDPOINT + "/auth",
                clientId: "front-end",
            });
            kc.init({onLoad: 'check-sso', checkLoginIframe: false}).success(authenticated => {
                console.log("kc success", kc);
                if (authenticated) {
                    axios.interceptors.request.use(config => {
                        config.headers.Authorization = 'Bearer ' + kc.token;
                        console.log("axios set config", config);
                        return config;
                    });
                }
                this.props.actions.app.authenticationInitSuccess(authenticated, kc);
                if (authenticated) {
                    this.props.actions.app.authenticationToken(kc);
                    this.props.actions.content.fetchUserMenu();
                }
            }).error(function () {
                console.log("kc failed", kc);
                this.props.actions.app.setInitialized(false);
            });
        } else {
            console.log("already inited");
        }
        //this.props.actions.app.authenticationInit(this.props.isInitialized);
    }

    render() {
        console.log("ProfileBlock isInitialized", this.props.isInitialized);
        console.log("ProfileBlock isAuthenticated", this.props.isAuthenticated);
        console.log("ProfileBlock keycloak", this.props.keycloak);
        if (!this.props.isInitialized) {
            return <Wrapper>
                <Control>
                    Загрузка
                </Control>
            </Wrapper>
        }
        if (this.props.isAuthenticated) {
            return (
                <Wrapper>
                    {(this.props.keycloak && this.props.keycloak.idTokenParsed && this.props.keycloak.idTokenParsed.name) &&
                    <UserMenuWrapper>
                        <UserMenuTitle>
                            <FaChevronCircleDown/>{" "}{this.props.keycloak.idTokenParsed.name}
                        </UserMenuTitle>
                        <UserMenuItemWrapper>
                            {this.props.userMenu && this.props.userMenu.map((menuItem, indx) => {
                                const icon = menuItem.url === "/profile" ?
                                    <FaUser style={{verticalAlign: "text-top"}}/> :
                                    menuItem.url === "/home" ? <FaHome style={{verticalAlign: "text-top"}}/> :
                                        menuItem.url === "/admin" ?
                                            <FaEdit style={{verticalAlign: "text-top"}}/> : null;
                                return (
                                    <UserMenuItem key={"menuItem-"+indx} onClick={() => {
                                        this.props.history.push(menuItem.url)
                                    }}>
                                        {icon}{" "}{menuItem.name}
                                    </UserMenuItem>);
                            })}
                            <UserMenuItem onClick={() => {
                                this.props.actions.app.authenticationLogout(this.props.keycloak, this.props.isAuthenticated);
                            }}>
                                <FaSignOut/>{" "}Выйти
                            </UserMenuItem>
                        </UserMenuItemWrapper>
                    </UserMenuWrapper>
                    }
                </Wrapper>
            );
        } else {
            return (
                <Wrapper>
                    <Control onClick={() => {
                        this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.isAuthenticated);
                    }}>
                        <FaSignIn/>Войти
                    </Control>
                </Wrapper>
            );
        }
    }
}

const mapStateToProps = ({app, content}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    isAuthenticated: appSelectors.isAuthenticated(app),
    isInitialized: appSelectors.isInitialized(app),
    userMenu: contentSelectors.getUserMenu(content)
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch),
        content: bindActionCreators(contentActions, dispatch)
    },
});

export default withLastLocation(connect(mapStateToProps, mapDispatchToProps)(ProfileBlock));
