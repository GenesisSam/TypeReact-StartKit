import { APP_TYPES } from "./types";
import { ActionThunk, ActionExtractor } from "common/helpers/reduxHelper";

export const ActionCreator = {
	changeCurrentUser: (userData: Model.IRawUser | null) => ({
		type: APP_TYPES.CHANGE_CURRENT_USER,
		payload: { userData },
	}),
};

export type ActionTypes = ActionExtractor<typeof ActionCreator>;

export const changeCurrentUser = (params: { userData: Model.IRawUser | null }): ActionThunk => {
	return dispatch => {
		dispatch(ActionCreator.changeCurrentUser(params.userData));
	};
};
