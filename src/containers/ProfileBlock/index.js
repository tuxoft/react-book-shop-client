import React, {Component} from "react";
import {
    bindActionCreators,
    createStore,
    applyMiddleware,
    compose
} from "redux";
import {connect} from "react-redux";
import styled from "styled-components";
import Keycloak from "keycloak-js";
import axios from "axios";
import * as appActions from "../../store/app/actions";
import Button from "../../components/simpleComponents/Button";
import * as appSelectors from "../../store/app/selectors";
import {Link} from "react-router-dom";
import Contur from "../../constants/contur";

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
    background: transparent;
    margin: 0px;
    color: #fff;
    padding: 3px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: flex-end;
    width: 100%;
    height: 30px;    
`;


class ProfileBlock extends Component {

    componentDidMount() {
        console.log("ProfileBlock init", this.props.isInitialized);
        const ENDPOINT = Contur.get().API;
        if (!this.props.isInitialized) {
            let kc = Keycloak({
                realm: "book-realm",
                url: ENDPOINT+"/auth",
                clientId: "front-end",
            });
            kc.init({onLoad: 'check-sso', checkLoginIframe: false}).success(authenticated => {
                console.log("kc success", kc);
                this.props.actions.app.authenticationInitSuccess(authenticated, kc);
                if(authenticated){
                    this.props.actions.app.authenticationToken(kc);
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
            return <Wrapper>Загрузка</Wrapper>
        }
        if (this.props.isAuthenticated) {
            return (
                <Wrapper>
                    {(this.props.keycloak && this.props.keycloak.idTokenParsed && this.props.keycloak.idTokenParsed.name) && <Control>
                        {this.props.keycloak.idTokenParsed.name}
                    </Control>}
                    <Control onClick={() => {
                        this.props.actions.app.authenticationLogout(this.props.keycloak, this.props.isAuthenticated);
                    }}>
                        ВЫЙТИ
                    </Control>
                </Wrapper>
            );
        } else {
            return (
                <Wrapper>
                    <Control onClick={() => {
                        this.props.actions.app.authenticationLogin(this.props.keycloak, this.props.isAuthenticated);
                    }}>
                        ВОЙТИ
                    </Control>
                </Wrapper>
            );
        }
    }
}

const mapStateToProps = ({app}) => ({
    keycloak: appSelectors.getKeyckloak(app),
    isAuthenticated: appSelectors.isAuthenticated(app),
    isInitialized: appSelectors.isInitialized(app),
});

const mapDispatchToProps = (dispatch, ownProps) => ({
    actions: {
        ...ownProps.actions,
        app: bindActionCreators(appActions, dispatch)
    },
});

export default connect(mapStateToProps, mapDispatchToProps)(ProfileBlock);
