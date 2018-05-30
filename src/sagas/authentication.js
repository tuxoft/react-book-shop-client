import { delay } from "redux-saga";
import { all, call, take, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as appActions from "../store/app/actions";
import Api from "../api";
import Keycloak from "keycloak-js";
import axios from "axios";


// WORKERS
function* authenticationInit(action) {
    console.log("do delete");

}
// WORKERS
function* authenticationLogin(action) {
    try {
        console.log("authenticationLogin ", action.payload.keycloak);
        if(action.payload.keycloak && !action.payload.isAuthenticated){
            action.payload.keycloak.login();
        }
    } catch (error) {
        console.log("authenticationLogin error", error);
        yield put(
            flashActions.showFlash(
                "Ошибка! Данные не получены",
                "danger",
                true,
            ),
        );
    }
}

// WORKERS
function* authenticationLogout(action) {
    try {
        console.log("authenticationLogout ", action.payload.keycloak);
        if(action.payload.keycloak && action.payload.isAuthenticated){
            action.payload.keycloak.logout();
        }
    } catch (error) {
        console.log("authenticationLogout error", error);
        yield put(
            flashActions.showFlash(
                "Ошибка! Данные не получены",
                "danger",
                true,
            ),
        );
    }
}

// WORKERS
function* authenticationToken(action) {
    // need to wrap the KC "promise object" into a real Promise object
    const refreshToken = (minValidity = 5, kc) => {
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
    try {
        console.log("authenticationToken ", action.payload.keycloak);
        axios.interceptors.request.use(config => {
            return refreshToken(5, action.payload.keycloak).then(() => {
                config.headers.Authorization = 'Bearer ' + action.payload.keycloak.token;
                return Promise.resolve(config)
            }).catch(() => {
                console.log("kc airc", action.payload.keycloak);
                action.payload.keycloak.login();
            })
        });
    } catch (error) {
        console.log("authenticationToken error", error);
        yield put(
            flashActions.showFlash(
                "Ошибка! Данные не получены",
                "danger",
                true,
            ),
        );
    }
}

// WATCHERS
function* authenticationInitFlow() {
    yield takeLatest(appActions.INIT_AUTHENTICATION, authenticationInit);
}
function* authenticationLoginFlow() {
    yield takeLatest(appActions.LOGIN_AUTHENTICATION, authenticationLogin);
}
function* authenticationLogoutFlow() {
    yield takeLatest(appActions.LOGOUT_AUTHENTICATION, authenticationLogout);
}
function* authenticationTokenFlow() {
    yield takeLatest(appActions.TOKEN_AUTHENTICATION, authenticationToken);
}
export default function* authentication() {
  yield all([
      authenticationInitFlow(),
      authenticationLoginFlow(),
      authenticationLogoutFlow(),
      authenticationTokenFlow(),
  ]);
}
