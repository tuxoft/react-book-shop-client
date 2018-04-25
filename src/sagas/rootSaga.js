import { all } from "redux-saga/effects";
import flash from "./flash";
import subscribe from "./subscribe";
export default function* rootSaga() {
  yield all([
      flash(),
      subscribe(),
  ]);
}
