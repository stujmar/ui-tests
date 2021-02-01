import React from "react"
import {body} from './Radio.module.css'

const Radio = ({match}) => {
    return (
        <div className={body} >Radio
            <p>{match.path}</p>
        </div>
    )
}

export default Radio;