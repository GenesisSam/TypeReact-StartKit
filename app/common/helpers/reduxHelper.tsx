import { ThunkAction } from "redux-thunk";
import { IAppState } from "app/rootReducer";
import { Action, ActionCreatorsMapObject } from "redux";

export type ActionThunk = ThunkAction<void, IAppState, null, Action<string>>;

export type ActionExtractor<T extends ActionCreatorsMapObject> = ReturnType<T[keyof T]>;
