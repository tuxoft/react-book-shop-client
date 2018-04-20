import { delay } from "redux-saga";
import { all, call, take, put } from "redux-saga/effects";
import * as actions from "../store/flash/actions";

function* flashFlow() {
  while (true) {
    const flash = yield take(actions.FLASH_SHOW_FLASH);
    yield put(
      actions.showFlash(
        flash.payload.message,
        flash.payload.type,
        flash.payload.autoHide
      )
    );

    if (flash.payload.autoHide) {
      yield call(delay, 2000);
      yield put(actions.hideFlash());
    } else {
      yield take(actions.FLASH_HIDE_FLASH);
      yield put(actions.hideFlash());
    }
  }
}

export default function* flash() {
  yield all([flashFlow()]);
}
