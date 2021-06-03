import React, { useEffect, useState } from 'react';
import {data} from './profileData';
import { wrapper } from './SvgMap.module.css';

const SvgMap = () => {
    const [ employees, setEmployees ] = useState([]);
    useEffect(() => {
        setEmployees(
                data.map((profile) => {
                    return <div id={profile.id}>{profile.name}</div>
                })
            )
        },[])

    return (
        <div className={wrapper}>
            <h2>This is where the svg map will go</h2>
            {employees}
        </div>
    )
}

export default SvgMap;