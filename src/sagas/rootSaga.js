import { all } from "redux-saga/effects";
import flash from "./flash";
import subscribe from "./subscribe";
import searchBooks from "./searchBooks";
import books from "./books";
import cart from "./cart";
import content from "./content";
import authentication from "./authentication";


export default function* rootSaga() {
  yield all([
      flash(),
      subscribe(),
      searchBooks(),
      books(),
      cart(),
      content(),
      authentication(),
  ]);
}
