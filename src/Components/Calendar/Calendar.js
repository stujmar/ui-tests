import React, {useState} from 'react';
//Look into this Prompt component later
import {Prompt} from 'react-router-dom';

const Calendar = () => {
    const [name, setName] = useState("");
    
    return (
        <div>Calendar
        <input type="text" />
        </div>
    )
}

// Window history in a route is mutable. So it history.location
export default Calendar 