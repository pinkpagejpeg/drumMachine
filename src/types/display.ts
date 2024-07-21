export interface IDrumDisplay {
    name: string | null
}

export enum DisplayActionTypes {
    SET_DISPLAY = "SET_DISPLAY"
}

export interface ISetDisplayAction {
    type: DisplayActionTypes.SET_DISPLAY,
    payload: string
}

export type DisplayAction = ISetDisplayAction