import { FC } from "react"
import classes from "../../../styles/main.module.scss"
import { IDrumPadComponent } from "../../../types/pads"
import { useTypedSelector } from "../../../hooks/useTypedSelector"

const DrumPad: FC<IDrumPadComponent> = ({ name, keyboard_key, audio, playSound }) => {
    const { pads } = useTypedSelector(state => state.pads)

    const clickHandler = () => {
        const activeKey = pads.find(pad => pad.keyboard_key === keyboard_key)
        if (activeKey) {
            playSound(activeKey)
        }
    }
    return (
        <div id={name} className={`drum-pad ${classes.drum__pad}`} onClick={() => clickHandler()}>
            <h2 className={classes.drum__pad_text}>{keyboard_key}</h2>
            <audio id={keyboard_key} className="clip" src={audio}></audio>
        </div>
    );
}

export default DrumPad;