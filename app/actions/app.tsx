import { Dispatch, bindActionCreators } from "redux";
import { APP_TYPES } from "./types";
import { ActionThunk, ActionExtractor } from "../common/helpers/reduxHelper";

export const ActionCreator = {
	changeCurrentUser: (userData: any) => ({ type: APP_TYPES.CHANGE_CURRENT_USER, payload: { userData } }),
};

export type ActionTypes = ActionExtractor<typeof ActionCreator>;

export const changeCurrentUser = (params: { userData: any }): ActionThunk => {
	return dispatch => {
		dispatch(ActionCreator.changeCurrentUser(params.userData));
	};
};
