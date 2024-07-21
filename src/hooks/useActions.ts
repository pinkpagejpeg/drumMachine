import { useAppDispatch } from "./useAppDispatch"
import drumMachineActionCreators from "../store/action-creators/index"
import { IDrumPadItem } from "../types/pads"

export const useActions = () => {
    const dispatch = useAppDispatch()
    return {
        setCurrentPad: (pad: IDrumPadItem) => dispatch(drumMachineActionCreators.setCurrentPad(pad)),
        setDisplay: (name: string) => dispatch(drumMachineActionCreators.setDisplay(name))
    };
}