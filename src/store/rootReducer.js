import { combineReducers } from "redux";
import app from "./app/reducers";
import flash from "./flash/reducers";

const rootReducer = combineReducers({
  app,
  flash
});

export default rootReducer;
