// pads types

export interface IDrumPads {
    pads: IDrumPadItem[],
    active_pad: IDrumPadItem | null
}

export interface IDrumPadItem {
    name: string,
    keyboard_key: string,
    audio: string,
}

export enum PadsActionTypes {
    SET_PAD = "SET_PAD"
}

export interface ISetPadsAction {
    type: PadsActionTypes.SET_PAD,
    payload: IDrumPadItem
}

export type PadsAction = ISetPadsAction

// component types

export interface IDrumPadComponent {
    name: string, 
    keyboard_key: string, 
    audio: string,
    playSound: (pad: IDrumPadItem) => void
}