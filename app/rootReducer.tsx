import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import { History } from "history";
// child reducers
import testReducer from "app/reducers/textReducer";

export interface IAppState {
	router: RouterState;
}
export const INITIAL_APP_STORE_STATE: IAppState = {
	router: {} as any,
};

const rootReducer = (history: History) => combineReducers({ testReducer, router: connectRouter(history) });

export default rootReducer;
