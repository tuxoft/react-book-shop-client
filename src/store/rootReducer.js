import { combineReducers } from "redux";
import app from "./app/reducers";
import flash from "./flash/reducers";
import subscribe from "./subscribe/reducers";
import searchBooks from "./searchBooks/reducers";
import buscket from "./bucket/reducers";

const rootReducer = combineReducers({
  app,
  flash,
  subscribe,
  searchBooks,
  buscket
});

export default rootReducer;
