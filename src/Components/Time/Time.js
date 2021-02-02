import React, { useState } from "react"
import TimePicker from 'react-time-picker'
import { head, body } from '../Universal.module.css'
import styles from './Time.module.css'

const Time = () => {
    const [value, onChange] = useState('00:00')
    return (
        <div className={body}>
            <h2 className={head}>Time</h2>
            <TimePicker
                disableClock={true}
                onChange={onChange}
                value={value}
            />
        </div>
    )
}

export default Time;