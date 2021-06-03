import React, { useEffect, useState } from 'react';
import {data} from './profileData';
import { wrapper } from './SvgMap.module.css';

const SvgMap = () => {
    const [ employeeData, setEmployeeData ] = useState([])
    const [ employees, setEmployees ] = useState([]);

    const deleteUser = (id) => {
        console.log(id, employeeData)
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
                    return <div key={profile.id} id={profile.id}>{profile.name}
                    <button onClick={() => {deleteUser(profile.id)}}>X</button>
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
        </div>
    )
}

export default SvgMap;