import { FC, useEffect } from "react"
import classes from "../../styles/main.module.scss"
import DrumDisplay from "./components/DrumDisplay"
import DrumPad from "./components/DrumPad"
import { useTypedSelector } from "../../hooks/useTypedSelector"
import { IDrumPadItem } from "../../types/pads"
import { useActions } from "../../hooks/useActions"

const DrumMachine: FC = () => {
    const { pads } = useTypedSelector(state => state.pads)
    const { setCurrentPad, setDisplay } = useActions()

    useEffect(() => {
        document.addEventListener('keydown', keyboardHandler)

        return () => {
            document.removeEventListener('keydown', keyboardHandler)
        }
    }, [])

    const keyboardHandler = (event: { key: string }) => {
        const activeKey = pads.find(pad => pad.keyboard_key === event.key.toUpperCase())
        if (activeKey) {
            playSound(activeKey)
        }
    }

    const playSound = (activeKey: IDrumPadItem) => {
        const audio = document.getElementById(activeKey.keyboard_key) as HTMLAudioElement
        if (audio) {
            audio.play()
            setCurrentPad(activeKey)
            setDisplay(activeKey.name)
        }
    }

    return (
        <div id="drum-machine" className={classes.drum__mainbox}>
            <h1 className={classes.drum__title}>Drum Machine</h1>
            <div className={classes.drum__box}>
                <div className={classes.drum__pads}>
                    {pads.map(pad =>
                        <DrumPad key={pad.keyboard_key}
                            name={pad.name}
                            keyboard_key={pad.keyboard_key}
                            audio={pad.audio}
                            playSound={playSound} />
                    )}
                </div>
                <DrumDisplay />
            </div>
        </div>
    );
}

export default DrumMachine;