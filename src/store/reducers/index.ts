import { combineReducers } from "redux"
import { displayReducer } from "./displayReducer"
import { padsReducer } from "./padsReducer"

export const rootReducer = combineReducers({
    display: displayReducer,
    pads: padsReducer
})

export type RootState = ReturnType<typeof rootReducer>