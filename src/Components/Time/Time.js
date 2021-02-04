import React, { useState } from "react"

// react-time-picker imports
import TimePicker from 'react-time-picker'


// style imports
import { head, body, source} from '../Universal.module.css'
import MaterialPicker from "./MaterialPicker";
import styles from './Time.module.css'

const Time = () => {
    const [value, onChange] = useState('00:00')
    return (
        <div className={body}>
            <h2 className={head}>Time</h2>
            <a className={source} href="https://www.npmjs.com/package/react-time-picker">react-time-picker</a><br/>
            <TimePicker
                disableClock={true}
                onChange={onChange}
                value={value}
            />
            <a className={source} href="https://material-ui.com/components/pickers/">material-UI</a><br/>
            <MaterialPicker />
            
        </div>
    )
}

export default Time;