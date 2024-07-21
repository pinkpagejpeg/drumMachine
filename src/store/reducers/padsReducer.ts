import { IDrumPads, PadsAction, PadsActionTypes } from "../../types/pads"

const initialState: IDrumPads = {
    pads: [
        { keyboard_key: 'Q', name: 'Heater-1', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-1.mp3' },
        { keyboard_key: 'W', name: 'Heater-2', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-2.mp3' },
        { keyboard_key: 'E', name: 'Heater-3', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-3.mp3' },
        { keyboard_key: 'A', name: 'Heater-4', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-4_1.mp3' },
        { keyboard_key: 'S', name: 'Clap', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Heater-6.mp3' },
        { keyboard_key: 'D', name: 'Open-HH', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Dsc_Oh.mp3' },
        { keyboard_key: 'Z', name: 'Kick-n-Hat', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Kick_n_Hat.mp3' },
        { keyboard_key: 'X', name: 'Kick', audio: 'https://s3.amazonaws.com/freecodecamp/drums/RP4_KICK_1.mp3' },
        { keyboard_key: 'C', name: 'Closed-HH', audio: 'https://s3.amazonaws.com/freecodecamp/drums/Cev_H2.mp3' }
    ],
    active_pad: null
}

export const padsReducer = (state = initialState, action: PadsAction) => {
    switch (action.type) {
        case PadsActionTypes.SET_PAD:
            return { ...state, active_pad: action.payload }
        default:
            return state
    }
}