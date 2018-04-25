import { all } from "redux-saga/effects";
import flash from "./flash";
import subscribe from "./subscribe";
import searchBooks from "./searchBooks";
export default function* rootSaga() {
  yield all([
      flash(),
      subscribe(),
      searchBooks(),
  ]);
}
