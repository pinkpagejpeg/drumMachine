import { Dispatch } from "redux"
import { DisplayAction, DisplayActionTypes } from "../../types/display"


export const setDisplay = (name: string) => {
    return (dispatch: Dispatch<DisplayAction>) => {
        dispatch({
            type: DisplayActionTypes.SET_DISPLAY,
            payload: name
        })
    }
}