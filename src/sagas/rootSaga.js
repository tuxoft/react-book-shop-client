import { all } from "redux-saga/effects";
import flash from "./flash";
import subscribe from "./subscribe";
import searchBooks from "./searchBooks";
import books from "./books";
import cart from "./cart";
import content from "./content";
import admin from "./admin";
import authentication from "./authentication";
import order from "./order";

export default function* rootSaga() {
  yield all([
      flash(),
      subscribe(),
      searchBooks(),
      books(),
      cart(),
      content(),
      admin(),
      authentication(),
      order(),
  ]);
}
