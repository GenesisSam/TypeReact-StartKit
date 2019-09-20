import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
// child reducers
import * as appReducer from "app/reducers/app";

export interface IAppState {
	router: RouterState;
	app: appReducer.IState;
}
export const INITIAL_APP_STORE_STATE: IAppState = {
	router: {} as any,
	app: appReducer.INITIAL_STATE,
};

const rootReducer = (history: History) => combineReducers({ router: connectRouter(history), app: appReducer.reducer });

export default rootReducer;
