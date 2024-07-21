import { DisplayAction, DisplayActionTypes, IDrumDisplay } from "../../types/display"

const initialState: IDrumDisplay = {
    name: null
}

export const displayReducer = (state = initialState, action: DisplayAction) => {
    switch (action.type) {
        case DisplayActionTypes.SET_DISPLAY:
            return {...state, name: action.payload}
        default:
            return state
    }
}