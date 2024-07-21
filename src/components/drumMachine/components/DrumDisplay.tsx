import { FC } from "react"
import classes from "../../../styles/main.module.scss"
import { useTypedSelector } from "../../../hooks/useTypedSelector"

const DrumDisplay: FC = () => {
    const {name} = useTypedSelector(state => state.display)
    
    return (
        <div id="display" className={classes.drum__display}>
            <h2 className={classes.drum__display_text}>&#119136; {name} &#119136;</h2>
        </div>
    );
}

export default DrumDisplay;