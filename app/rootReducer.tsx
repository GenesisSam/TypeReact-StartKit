import { combineReducers } from "redux";
import { connectRouter } from "connected-react-router";
import { History } from "history";
// child reducers
import testReducer from "./common/testReducer";

export const INITIAL_APP_STORE_STATE = {};

const rootReducer = (history: History) =>
  combineReducers({ testReducer, router: connectRouter(history) });

export default rootReducer;
