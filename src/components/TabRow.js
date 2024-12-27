import React from "react"
import { StringRow } from "./StringRow"

export const TabRow = () => {
    return(
        <div className="tab-row">
            <StringRow stringNote={"E"}/>
            <StringRow stringNote={"B"}/>
            <StringRow stringNote={"G"}/>
            <StringRow stringNote={"D"}/>
            <StringRow stringNote={"A"}/>
            <StringRow stringNote={"E"}/>
        </div>
    )
}