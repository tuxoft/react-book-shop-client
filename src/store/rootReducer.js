import { combineReducers } from "redux";
import app from "./app/reducers";
import flash from "./flash/reducers";
import subscribe from "./subscribe/reducers";
import searchBooks from "./searchBooks/reducers";
import buscket from "./bucket/reducers";
import books from "./books/reducers";
import bookEdit from "./bookEdit/reducers";
import categoryEdit from "./categoryEdit/reducers";
import dictionary from "./dictionary/reducers";
import content from "./content/reducers";

const rootReducer = combineReducers({
  app,
  flash,
  subscribe,
  searchBooks,
  buscket,
  books,
  bookEdit,
  categoryEdit,
  dictionary,
  content
});

export default rootReducer;
