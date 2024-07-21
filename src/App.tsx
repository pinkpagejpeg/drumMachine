import { FC } from "react"
import classes from "./styles/main.module.scss"
import DrumMachine from "./components/drumMachine/DrumMachine"

const App: FC = () => {
  return (
    <div className={classes.container}>
      <DrumMachine />
    </div>
  )
}

export default App
