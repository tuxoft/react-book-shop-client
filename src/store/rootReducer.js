import { combineReducers } from "redux";
import app from "./app/reducers";
import flash from "./flash/reducers";
import subscribe from "./subscribe/reducers";
import searchBooks from "./searchBooks/reducers";
import buscket from "./bucket/reducers";
import books from "./books/reducers";
import objectEdit from "./objectEdit/reducers";
import dictionary from "./dictionary/reducers";
import content from "./content/reducers";
import order from "./order/reducers";
import profile from "./profile/reducers";

const rootReducer = combineReducers({
  app,
  flash,
  subscribe,
  searchBooks,
  buscket,
  books,
  dictionary,
  objectEdit,
  content,
  order,
  profile
});

export default rootReducer;
