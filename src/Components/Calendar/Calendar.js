import React, {useState} from 'react';
//Look into this Prompt component later
import {Prompt} from 'react-router-dom';
import { head, body, source } from '../Universal.module.css'
import styles from './Calendar.module.css'

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

const Calendar = () => {
    const [name, setName] = useState("");
    const [startDate, setStartDate] = useState(new Date());

    return (
        <div className={body}>
        <h2 className={head}>
            Calendar
        </h2>
        <a className={source} href="https://www.npmjs.com/package/react-datepicker" target="_blank">react-datepicker</a><br/>
        <DatePicker selected={startDate} onChange={date => setStartDate(date)} />
        </div>
    )
}

// Window history in a route is mutable. So it history.location
export default Calendar 