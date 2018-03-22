import { combineReducers } from "redux";
import { routerReducer } from "react-router-redux";
// child reducers
import testReducer from "./common/testReducer";

export const INITIAL_APP_STORE_STATE = {};

const rootReducer = combineReducers({ testReducer, router: routerReducer });

export default rootReducer;
