import React, {useState, useEffect} from "react"
import { TabRow } from "./TabRow"


export const TabLab = () => {
    const [ rowCount, setRowCount ] = useState(3)

    // const renderTabRows = () => {
    //     console.log(rowCount)
    //     for (let i = 0; i < rowCount; i++) {
    //         console.log("Need to render tab rows here"); 
    //     }
    // }

    return (
        <div className="tab-grid">
            <TabRow />
            <p>+</p>
        </div>
    )
}