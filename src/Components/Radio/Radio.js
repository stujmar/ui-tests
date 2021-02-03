import React from "react"
import { head, body } from '../Universal.module.css'
import CashRadioButtons from "./CashedRadioButtons"
import styles from './Radio.module.css'

const Radio = () => {



    
    return (
        <div className={body} >
            <h2 className={head}>    
                Radio
            </h2>
            <CashRadioButtons />

        </div>
    )
}

export default Radio;