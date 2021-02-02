import React, {useState} from 'react';
//Look into this Prompt component later
import {Prompt} from 'react-router-dom';
import { head, body } from '../Universal.module.css'
import styles from './Calendar.module.css'

const Calendar = () => {
    const [name, setName] = useState("");
    
    return (
        <div className={body}>
        <h2 className={head}>
            Calendar
        </h2>
        </div>
    )
}

// Window history in a route is mutable. So it history.location
export default Calendar 