import { AllActions } from "app/actions";

export interface IState {
	currentUser: Model.IRawUser | null;
}

export const INITIAL_STATE: IState = {
	currentUser: null,
};

export function reducer(state = INITIAL_STATE, action: AllActions) {
	switch (action.type) {
		default:
			return state;
	}
}
