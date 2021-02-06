import React, {useState} from 'react';
//Look into this Prompt component later
import {Prompt} from 'react-router-dom';
import { head, body, source } from '../Universal.module.css'
import styles from './Calendar.module.css'

//First Calendar Option (simple)
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";

//Second Calendar Option (multiday)
import DayPicker, { DateUtils } from 'react-day-picker';
import 'react-day-picker/lib/style.css';

const Calendar = () => {
    const [name, setName] = useState("");
    //First Cal State
    const [startDate, setStartDate] = useState(new Date());
    //Second Cal State
    const [selectedDays, setSelectedDays] = useState([]);

    // constructor(props) {
    //     super(props);
    //     this.handleDayClick = this.handleDayClick.bind(this);
    //     this.state = {
    //       selectedDays: [],
    //     };
    //   }

    handleDayClick(day, { selected }) {
        const { selectedDays } = selectedDays;
        if (selected) {
          const selectedIndex = selectedDays.findIndex(selectedDay =>
            DateUtils.isSameDay(selectedDay, day)
          );
          selectedDays.splice(selectedIndex, 1);
        } else {
          selectedDays.push(day);
        }
        this.setState({ selectedDays });
      };


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