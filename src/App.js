import React, {Component} from "react";
import { ThemeProvider } from "styled-components";
import shopTheme from "./constants/shopTheme";
import Routes from "./routes/MainRoutes/index";

import Keycloak from "keycloak-js";
import axios from "axios";


const kc = Keycloak({
    realm: "book-realm",
    url: "http://localhost:8080/auth",
    clientId: "front-end",
});

// need to wrap the KC "promise object" into a real Promise object
const refreshToken = (minValidity = 5) => {
    return new Promise((resolve, reject) => {
        kc.updateToken(minValidity)
            .success(() => resolve())
            .error(error => reject(error))
    });
};


class App extends Component {
    componentDidMount(){

        kc.init({onLoad: 'login-required', checkLoginIframe: false}).success(authenticated => {
            debugger;
            if (authenticated) {
                console.log("kc", kc);
                //store.getState().keycloak = kc;
            }else{
                kc.login();
            }
        });


        axios.interceptors.request.use(config => {
            return refreshToken().then(() => {
                config.headers.Authorization = 'Bearer ' + kc.token;
                return Promise.resolve(config)
            }).catch(() => {
                debugger;
                kc.login();
            })
        });
    }

    render(){
        return <ThemeProvider  theme={shopTheme}><Routes /></ThemeProvider>;
    }
}

export default App;
