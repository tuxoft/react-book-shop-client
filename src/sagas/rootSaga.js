import { all } from "redux-saga/effects";
import flash from "./flash";
export default function* rootSaga() {
  yield all([
      flash(),
  ]);
}
