import React, {useState, useEffect} from "react"
import { EditFretCell } from "./EditFretCell";
import '../styles/FretCell.css';

export const FretCell = () => {
    const [ editFret, toggleEditFret ] = useState(false)
    const [ fretValue, setFretValue ] = useState("-")

    const handleToggleEditFret = () => {
        toggleEditFret(!editFret)
    }

    const handleOnBlur = () => {
        toggleEditFret(false)
        debugger
    }

    const renderFret = () => {
        return editFret ? <EditFretCell/> : fretValue
    }

    return(
        <div className={editFret ? "fret-input" : "fret-value"} onClick={() => handleToggleEditFret()} onBlur={() => handleOnBlur()}>
            {renderFret()}
        </div>
    )
}