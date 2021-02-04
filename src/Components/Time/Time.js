import React, { useState } from "react"
import TimePicker from 'react-time-picker'
import { head, body, source} from '../Universal.module.css'
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
        </div>
    )
}

export default Time;