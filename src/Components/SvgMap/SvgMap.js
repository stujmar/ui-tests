import React, { useEffect, useState } from 'react';
import {data} from './profileData';

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
        <div>
            <h2>This is where the svg map will go</h2>
            {employees}
        </div>
    )
}

export default SvgMap;