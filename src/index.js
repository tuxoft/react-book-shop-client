import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter} from "react-router-dom";
import {applyMiddleware, createStore, compose} from "redux";
import {Provider} from "react-redux";
import createSagaMiddleware from "redux-saga";

import Keycloak from "keycloak-js";
import axios from "axios";

import moment from "moment";
import "moment/locale/ru";
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

import rootReducer from "./store/rootReducer";
import rootSaga from "./sagas/rootSaga";

const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    compose(
        applyMiddleware(sagaMiddleware)
    )
);

sagaMiddleware.run(rootSaga);

let kc = Keycloak({
    realm: "book-realm",
    url: "http://local.portal.rzhd.ml/auth",
    clientId: "front-end",
});

console.log("kc cDM", kc);
kc.init({onLoad: 'login-required', checkLoginIframe: false}).success(authenticated => {
    if (authenticated) {
        console.log("kc succ", kc);
        store.getState().keycloak = kc;

        ReactDOM.render(
            <Provider store={store}>
                <BrowserRouter basename="/">
                    <App/>
                </BrowserRouter>
            </Provider>,
            document.getElementById("root")
        );

    } else {
        console.log("kc false", kc);
    }
}).error(function () {
    console.log("kc failed", kc);
});

axios.interceptors.request.use(config => {
    return refreshToken().then(() => {
        config.headers.Authorization = 'Bearer ' + kc.token;
        return Promise.resolve(config)
    }).catch(() => {
        console.log("kc airc", kc);
        kc.login();
    })
});

// need to wrap the KC "promise object" into a real Promise object
const refreshToken = (minValidity = 5) => {
    console.log("minValidity", minValidity);
    return new Promise((resolve, reject) => {
        console.log("kc conf", kc);
        kc.updateToken(minValidity)
            .success(() => {
                return resolve()
            })
            .error(error => {
                console.log("error", error);
                return reject(error)
            })
    });
};

registerServiceWorker();
