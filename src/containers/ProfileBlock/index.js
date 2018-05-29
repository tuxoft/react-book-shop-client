import React, {Component} from "react";
import {bindActionCreators} from "redux";
import {connect} from "react-redux";
import styled from "styled-components";
import * as appActions from "../../store/app/actions";
import Button from "../../components/simpleComponents/Button";
import * as appSelectors from "../../store/app/selectors";
import {Link} from "react-router-dom";

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
        this.props.actions.app.authenticationInit(this.props.isInitialized);
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
                    <Control onClick={() => {this.props.actions.app.authenticationLogout(this.props.keycloak,this.props.isAuthenticated);}}>
                        ВЫЙТИ
                    </Control>
                </Wrapper>
            );
        } else {
            return (
                <Wrapper>
                    <Control onClick={() => {this.props.actions.app.authenticationLogin(this.props.keycloak,this.props.isAuthenticated);}}>
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
