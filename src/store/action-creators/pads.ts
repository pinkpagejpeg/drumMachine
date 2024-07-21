import { Dispatch } from "redux"
import { IDrumPadItem, PadsAction, PadsActionTypes } from "../../types/pads"

export const setCurrentPad = (pad: IDrumPadItem) => {
    return (dispatch: Dispatch<PadsAction>) => {
        dispatch({
            type: PadsActionTypes.SET_PAD, 
            payload: pad
        })
    }
}