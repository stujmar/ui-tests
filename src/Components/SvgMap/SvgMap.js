import React, { useEffect, useState } from 'react';
import {data} from './profileData';

import Map from './Map';
import { wrapper, employee, employeeName, employeeRemove } from './SvgMap.module.css';


const SvgMap = () => {
    const [ employeeData, setEmployeeData ] = useState([])
    const [ employees, setEmployees ] = useState([]);

    const deleteUser = (id) => {
        setEmployeeData(employeeData.filter(person => person.id !== id));
    }

    const reload = () => {
        setEmployeeData(data);
    }

    useEffect(() => {
        setEmployeeData(data);
    },[]) 

    useEffect(() => {
        setEmployees(
                employeeData.map((profile) => {
                    return <div key={profile.id} id={profile.id} className={employee}>
                        <div className={employeeName}>{profile.name}</div>
                    <button className={employeeRemove} onClick={() => {deleteUser(profile.id)}}>X</button>
                    </div>
                })
            )
        // eslint-disable-next-line react-hooks/exhaustive-deps
        },[employeeData])

    return (
        <div className={wrapper}>
            <h2>This is where the svg map will go</h2>
            <button type="button" onClick={reload}>RELOAD</button>
            {employees}
            <Map />
        </div>
    )
}

export default SvgMap;