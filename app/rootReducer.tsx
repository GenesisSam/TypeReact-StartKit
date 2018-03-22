import { combineReducers } from "redux";
// child reducers
import testReducer from "./common/testReducer";

export const INITIAL_APP_STORE_STATE = {};

const rootReducer = combineReducers({ testReducer });

export default rootReducer;
