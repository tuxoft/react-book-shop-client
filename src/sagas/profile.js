import { all, call, put, takeLatest } from "redux-saga/effects";
import * as flashActions from "../store/flash/actions";
import * as profileActions from "../store/profile/actions";
import Api from "../api";


// WORKERS
function* fetchProfile(action) {
    try {
        console.log("fetchProfile ");
        const profile = yield call(Api.profile.get);
        yield put(profileActions.setProfile(profile.data));
    } catch (error) {
        console.log("fetchProfile error", error);
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
function* saveProfile(action) {
    try {
        console.log("saveProfile ");
        const profile = yield call(Api.profile.put);
        yield put(profileActions.setProfile(profile.data));
    } catch (error) {
        console.log("saveProfile error", error);
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
function* fetchProfileFlow() {
    yield takeLatest(profileActions.FETCH_PROFILE, fetchProfile);
}
// WATCHERS
function* saveProfileFlow() {
    yield takeLatest(profileActions.SAVE_PROFILE, saveProfile);
}

export default function* profile() {
  yield all([
      fetchProfileFlow(),
      saveProfileFlow(),
  ]);
}
